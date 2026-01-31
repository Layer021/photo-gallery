import { Page } from 'playwright'

export class HeaderComponent {
  constructor(private page: Page) {}

  async clickLogo() {
    await this.page.click('a[data-testid="header-logo-link"]')
  }

  async clickNavLink(label: string) {
    await this.page.getByTestId('header-navlink').filter({ hasText: label }).click()
  }
}
