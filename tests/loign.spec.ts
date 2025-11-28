import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
});


test('login usuario valido', async ({page}) => {
 
await page.locator('#loginusername').click();
await page.locator('#loginusername').fill('fabioavilamacedo@gmail.com');
await page.locator('#loginpassword').click();
await page.locator('#loginpassword').fill('Eir4784eir@');
await page.getByRole('button', { name: 'Log in' }).click();
await page.getByRole('link', { name: 'Welcome fabioavilamacedo@' }).click();
})

test('login usuario invalido', async ({page}) => {
 
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('fabioavlmacedo@gmail');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('Eir4784eir@');
 // Aguarda o dialog aparecer ANTES de clicar no botão
  const dialogPromise = page.waitForEvent('dialog');

  await page.getByRole('button', { name: 'Log in' }).click();

  // Agora captura o dialog real
  const dialog = await dialogPromise;

  // Valida o texto
  expect(dialog.message()).toBe('User does not exist.');

  await dialog.accept();
});

test('login senha invalido', async ({page}) => {
 
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('fabioavilamacedo@gmail.com');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('Eir4784eir');
 // Aguarda o dialog aparecer ANTES de clicar no botão
  const dialogPromise = page.waitForEvent('dialog');

  await page.getByRole('button', { name: 'Log in' }).click();

  // Agora captura o dialog real
  const dialog = await dialogPromise;

  // Valida o texto
  expect(dialog.message()).toBe('Wrong password.');

  await dialog.accept();
});