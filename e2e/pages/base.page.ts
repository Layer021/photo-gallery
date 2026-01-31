import { Page } from 'playwright'
import { HeaderComponent } from '../components/header.component'

export abstract class BasePage {
  private header: HeaderComponent

  constructor(protected page: Page) {
    this.header = new HeaderComponent(page)
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle')
  }

  async navigateTo(path: string) {
    await this.page.goto(`https://photo-gallery-eight-kappa.vercel.app${path}`)
    await this.waitForPageLoad()
  }

  async navigateByHeaderLink(label: string) {
    await this.header.clickNavLink(label)
    await this.waitForPageLoad()
  }
}
