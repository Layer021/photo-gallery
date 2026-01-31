import { test, expect } from '@playwright/test'
import { TopPage } from '../pages/top.page'
import { GalleryPage } from '../pages/gallery.page'

test('画像モーダルの表示まで', async ({ page }) => {
  // ページオブジェクトのインスタンスを作成
  const topPage = new TopPage(page)

  // Topページへ移動
  await topPage.navigate()

  // Galleryページへヘッダーから移動
  await topPage.navigateByHeaderLink('GALLERY')

  // ギャラリーページで最初のサムネイルをクリック
  const galleryPage = new GalleryPage(page)
  await galleryPage.clickThumbnailByIndex(0)

  // モーダルが表示されていることを確認
  expect(await galleryPage.isModalVisible()).toBe(true)
})
