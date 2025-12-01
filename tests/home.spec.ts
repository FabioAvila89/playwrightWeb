import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login('fabioavilamacedo@gmail.com', 'Eir4784eir@');
  await login.assertWelcome('fabioavilamacedo@');
});

test.only('compra notbook', async ({ page }) => {
  
    
await page.getByRole('link', { name: 'Laptops' }).click();
await expect(page).toHaveTitle(/STORE/);
await page.getByRole('link', { name: 'Sony vaio i5' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
await expect(page.getByText('Add to cart')).toHaveText('Add to cart');
await page.getByRole('link', { name: 'Add to cart' }).click();
await page.getByRole('link', { name: 'Cart', exact: true }).click();
await expect(page.getByText('Products')).toHaveText('Products');
await page.getByRole('button', { name: 'Place Order' }).click();
await page.locator('#name').click();
await page.locator('#name').fill('teste');
await page.getByRole('textbox', { name: 'Country:' }).click();
await page.getByRole('textbox', { name: 'Country:' }).fill('BR');
await page.getByRole('textbox', { name: 'City:' }).click();
await page.getByRole('textbox', { name: 'City:' }).fill('Tets');
await page.getByRole('textbox', { name: 'Credit card:' }).click();
await page.getByRole('textbox', { name: 'Credit card:' }).fill('123456789');
await page.getByRole('textbox', { name: 'Month:' }).click();
await page.getByRole('textbox', { name: 'Month:' }).fill('12');
await page.getByRole('textbox', { name: 'Year:' }).click();
await page.getByRole('textbox', { name: 'Year:' }).fill('30');
await page.getByRole('button', { name: 'Purchase' }).click();
await expect(page.getByText('Thank you for your purchase!')).toHaveText('Thank you for your purchase!');
await page.getByRole('button', { name: 'OK' }).click();

}); 


