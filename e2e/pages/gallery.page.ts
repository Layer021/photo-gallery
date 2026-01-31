import { BasePage } from './base.page'

export class GalleryPage extends BasePage {
  async navigate() {
    await this.navigateTo('/gallery')
  }

  async clickThumbnailByIndex(index: number) {
    const thumbnails = this.page.locator('[data-testid="gallery-thumbnail-link"]')
    await thumbnails.nth(index).click()
  }

  getModal() {
    return this.page.locator('#gallery-modal')
  }
}
