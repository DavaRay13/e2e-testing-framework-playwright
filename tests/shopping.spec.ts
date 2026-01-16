import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';

test.describe('Skenario Belanja SauceDemo', () => {
  
  test('User harus bisa nambahin satu produk ke keranjang', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.bukaWeb();
    await loginPage.isiLogin('standard_user', 'secret_sauce');

    // 3. Pengecekan URL (Regex)
    // /.*inventory/ artinya: "Pokoknya ada tulisan inventory-nya di belakang"
    await expect(page).toHaveURL(/.*inventory.html/);

    // 4. Aksi Tambah Barang
    // Panggil skill yang kamu bikin di ProductPage kemarin
    await productPage.tambahBackpackKeKeranjang();

    // 5. Pembuktian (Assertion)
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    
    // toHaveText adalah cara cek apakah tulisan di elemen itu sesuai
    await expect(cartBadge).toHaveText('1');
  });

});