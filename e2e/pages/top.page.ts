import { BasePage } from './base.page'

export class TopPage extends BasePage {
  async navigate() {
    await this.navigateTo('/')
  }
}
