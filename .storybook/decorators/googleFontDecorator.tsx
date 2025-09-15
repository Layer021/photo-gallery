import { DecoratorFunction } from 'storybook/internal/types'
import { cormorantGaramond } from '../../app/fonts'

export const GoogleFontDecorator: DecoratorFunction = Story => {
  return (
    <div className={`${cormorantGaramond.variable} font-cormorant-garamond antialiased`}>
      <Story />
    </div>
  )
}
