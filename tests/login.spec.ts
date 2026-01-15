import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// 1. Kelompokkan tes lu (biar rapi di laporan nanti)
test.describe('Fitur Autentikasi', () => {
    
    test('User harus bisa login dan logout dengan benar', async ({ page }) => {
        // 2. Lahirin si Kamus (LoginPage) ke dalam skenario ini
        const loginPage = new LoginPage(page);

        // 3. Eksekusi Langkah (Cerita)
        await loginPage.bukaWeb();
        await loginPage.isiLogin('standard_user', 'secret_sauce');

        // 4. Assertion Pertama (Cek apakah berhasil masuk)
        // Kita cek apakah URL-nya mengandung kata 'inventory'
        await expect(page).toHaveURL(/.*inventory/);


        // 5. Eksekusi Logout (Pakai fungsi yang lu buat tadi)
        await loginPage.klikLogout();

        // 6. Assertion Kedua (Cek apakah berhasil balik ke login)
        // Kita pastiin tombol login muncul lagi
        await expect(loginPage.loginButton).toBeVisible();
    });
});