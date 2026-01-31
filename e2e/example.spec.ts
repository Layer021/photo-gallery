import { test, expect } from '@playwright/test'

test('画像モーダルの表示まで', async ({ page }) => {
  // トップページへ移動
  await page.goto('https://photo-gallery-eight-kappa.vercel.app/')

  // Galleryページへのリンクをクリック
  await page.getByRole('link', { name: 'GALLERY', exact: true }).click()

  // 最初の画像サムネイルをクリック
  await page
    .locator('a')
    .filter({ has: page.locator('img') })
    .first()
    .click()

  // モーダルが表示されていることを確認
  const modal = page.locator('#gallery-modal') // モーダルのセレクタを指定
  await expect(modal).toBeVisible()
})
