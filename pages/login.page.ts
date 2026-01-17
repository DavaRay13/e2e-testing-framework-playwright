import { Page, Locator } from '@playwright/test';

export class LoginPage {
  // 2. Deklarasi "Tombol" (Locator). Kasih 'readonly' biar gak bisa diubah-ubah.
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly menuButton: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;


  // 3. Constructor: Momen "Menghubungkan" Class ini dengan tab browser asli
  constructor(private readonly page: Page) {
    // Lu kasih tau 'alamat' masing-masing elemen pake selector ID (#)
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
    this.errorMessage = page.locator('[data-test="error"]');

  }

  // 4. Method (Skill): Apa aja yang bisa dilakuin di halaman ini?
  async bukaWeb() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async isiLogin(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async klikLogout(){
    await this.menuButton.click();
    await this.logoutButton.waitFor({state: 'visible'});
    await this.logoutButton.click();
  }
}