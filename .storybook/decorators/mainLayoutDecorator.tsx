import { DecoratorFunction } from 'storybook/internal/types'
import MainLayout from '../../components/layout/MainLayout/MainLayout'

export const MainLayoutDecorator: DecoratorFunction = Story => {
  return (
    <MainLayout>
      <Story />
    </MainLayout>
  )
}
