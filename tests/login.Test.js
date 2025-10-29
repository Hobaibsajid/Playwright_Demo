const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');

test('User can add product to cart, checkout, and logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await homePage.verifyLogin();

  await page.pause();
  // Step 2: Add item to cart
  await homePage.addSpecificProducts([
  'Sauce Labs Backpack',
  'Sauce Labs Bolt T-Shirt'
]);


// Step 3: Open cart
await cartPage.openCart();
await expect(page.locator('.cart_item')).toHaveCount(2);

  // Step 4: Checkout
  await cartPage.proceedToCheckout();

  // Step 5: Fill info and continue
  await checkoutPage.fillCheckoutInfo('Hobaib', 'Shah', '25000');

  // Step 6: Finish checkout
  await checkoutPage.finishOrder();

  // Step 7: Verify success message
  await checkoutPage.verifyOrderSuccess();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Step 8: Go back home and logout
  await checkoutPage.goBackHome();
  await checkoutPage.logout();

  // Step 9: Verify logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
