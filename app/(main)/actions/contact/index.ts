'use server'

import type { ActionState } from '@/utils/types/actionState'
import { contactSchema } from './schema'

export async function sendContact(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    name: formData.get('name') as string,
    organization: formData.get('organization') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  const result = contactSchema.safeParse(raw)
  if (!result.success) {
    const errors: Record<string, string[]> = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as string
      errors[key] = errors[key] ?? []
      errors[key].push(issue.message)
    }
    return {
      success: false,
      message: '入力内容に誤りがあります',
      errors,
    }
  }

  const { name, organization, email, message } = result.data

  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL is not configured')
    return {
      success: false,
      message: '送信に失敗しました。しばらく経ってからお試しください。',
    }
  }

  const text = [
    '【Photo Gallery】お問い合わせがありました。',
    '```',
    '■お名前',
    `${name}`,
    '',
    '■企業・団体名',
    `${organization || ''}`,
    '',
    '■メールアドレス',
    `${email}`,
    '',
    '■お問い合わせ内容',
    `${message}`,
    '```',
  ].join('\n')

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    if (!res.ok) {
      console.error('Slack webhook failed:', res.status, await res.text())
      return {
        success: false,
        message: '送信に失敗しました。しばらく経ってからお試しください。',
      }
    }
  } catch (error) {
    console.error('Slack webhook error:', error)
    return {
      success: false,
      message: '送信に失敗しました。しばらく経ってからお試しください。',
    }
  }

  return {
    success: true,
    message: 'お問い合わせを送信しました。',
  }
}
