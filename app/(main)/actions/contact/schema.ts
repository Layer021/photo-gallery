import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  organization: z.string().optional(),
  email: z
    .email('メールアドレスの形式が正しくありません')
    .min(1, 'メールアドレスを入力してください'),
  message: z.string().min(1, 'お問い合わせ内容を入力してください'),
})

export type ContactFormData = z.infer<typeof contactSchema>
