import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
});

test('login usuario valido', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('fabioavilamacedo@gmail.com', 'Eir4784eir@');
  await login.assertWelcome('fabioavilamacedo@');
});

test('login usuario invalido', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('fabioavlmacedo@gmail', 'Eir4784eir@');
  await login.assertDialog('User does not exist.');
});

test('login senha invalido', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('fabioavilamacedo@gmail.com', 'senha_errada');
  await login.assertDialog('Wrong password.');
});