import type { Preview } from '@storybook/nextjs-vite'
import '@/app/globals.css'
import { GoogleFontDecorator } from './decorators/googleFontDecorator'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { withScreenshot } from 'storycapture'
import { DecoratorFunction } from 'storybook/internal/types'

// Initialize MSW
initialize()

const preview: Preview = {
  decorators: [GoogleFontDecorator, withScreenshot as DecoratorFunction],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    screenshot: {
      fullPage: false,
      delay: 0,
      viewports: {
        desktop: { width: 1920, height: 1080 },
        tablet: { width: 768, height: 1024 },
        mobile: { width: 360, height: 800, isMobile: true, hasTouch: true },
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  loaders: [mswLoader],
}

export default preview
