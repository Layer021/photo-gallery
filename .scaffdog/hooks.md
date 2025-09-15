---
name: 'hooks'
root: '.'
output: '.'
ignore: []
questions:
  name: 'Please enter the hooks name. (e.g. useFetch, useForm, etc.)'
---

# `hooks/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.ts`

```tsx
export const {{ inputs.name | pascal }} = () => {
}
```

# `hooks/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.ts`

```tsx
import { render, screen } from '@testing-library/react'
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}'

describe('<{{ inputs.name | pascal }} />', () => {
  test('should render', () => {
    render(<{{ inputs.name | pascal }} />)
    expect(screen.getByText('{{ inputs.name | pascal }}')).toBeInTheDocument()
  })
})
```

# `hooks/{{ inputs.name | pascal }}/index.ts`

```ts
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}'

export {{ inputs.name | pascal }}
```
