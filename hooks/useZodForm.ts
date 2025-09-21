import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormProps, FieldValues, Resolver } from 'react-hook-form'
import { z } from 'zod'

// TODO: 型安全にする方法を検討する
export function useZodForm<T extends FieldValues = FieldValues>(
  schema: z.ZodSchema<T>,
  props?: Omit<UseFormProps<T>, 'resolver'>
) {
  return useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any) as Resolver<T>,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    ...props,
  })
}
