import { DecoratorFunction } from 'storybook/internal/types'
import MainLayout from '../../components/layout/MainLayout'
import LowerLayout from '../../components/layout/LowerLayout'

export const LowerLayoutDecorator: DecoratorFunction = Story => {
  return (
    <MainLayout>
      <LowerLayout>
        <Story />
      </LowerLayout>
    </MainLayout>
  )
}
