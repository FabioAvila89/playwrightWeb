import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../locators/login.locators';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
  await this.page.goto('https://demoblaze.com/');
  await this.page.click(LoginLocators.loginLink); // agora funciona!
}

  async login(email: string, senha: string) {
    await this.page.fill(LoginLocators.username, email);
    await this.page.fill(LoginLocators.password, senha);
    await this.page.click(LoginLocators.loginButton);
  }

  async assertWelcome(email: string) {
    await this.page.getByText(`Welcome ${email}`).click();
  }

  async assertDialog(message: string) {
    const dialogPromise = this.page.waitForEvent('dialog');
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe(message);
    await dialog.accept();
  }
}