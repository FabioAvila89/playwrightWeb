import {test, expect} from '@playwright/test';


test('login usuario valido', async ({page}) => {
 
await page.goto('https://demoblaze.com/');

await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').click();
await page.locator('#loginusername').fill('fabioavilamacedo@gmail.com');
await page.locator('#loginpassword').click();
await page.locator('#loginpassword').fill('Eir4784eir@');
await page.getByRole('button', { name: 'Log in' }).click();
await page.getByRole('link', { name: 'Welcome fabioavilamacedo@' }).click();
})