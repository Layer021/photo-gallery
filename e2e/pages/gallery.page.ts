import { BasePage } from './base.page'

export class GalleryPage extends BasePage {
  async navigate() {
    await this.navigateTo('/gallery')
  }

  async clickThumbnailByIndex(index: number) {
    const thumbnails = this.page.locator('a').filter({ has: this.page.locator('img') })
    await thumbnails.nth(index).click()
  }

  async isModalVisible() {
    const modal = this.page.locator('#gallery-modal')
    return await modal.isVisible()
  }
}
