---
name: 'component'
root: '.'
output: '.'
ignore: []
questions:
  directory: 'Please enter the directory path. (e.g. base, shared/button, etc.)'
  name: 'Please enter the component name. (e.g. Header, Button, etc.)'
  test:
    confirm: 'Do you need a test file?'
---

# `components/{{ inputs.directory | lower }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
export interface {{ inputs.name | pascal }}Props {
}

export default function {{ inputs.name | pascal }}(props: {{ inputs.name | pascal }}Props) {
  return (
    <>{{ inputs.name | pascal }}</>
  )
}
```

# `components/{{ inputs.directory | lower }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {{ inputs.name | pascal }} from './{{ inputs.name | pascal }}'

const meta = {
  component: {{ inputs.name | pascal }},
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof {{ inputs.name | pascal }}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
  }
}
```

# `components/{{ inputs.directory | lower }}/{{ inputs.name | pascal }}/index.ts`

```ts
import {{ inputs.name | pascal }}, { {{ inputs.name | pascal }}Props } from './{{ inputs.name | pascal }}'

export default {{ inputs.name | pascal }}
export type { {{ inputs.name | pascal }}Props }
```

# `{{ !inputs.test && '!' }}components/{{ inputs.directory | lower }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

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
