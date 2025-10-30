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

  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await homePage.verifyLogin();

//   await page.pause();
  // Add to cart
  await homePage.addSpecificProducts([
  'Sauce Labs Backpack',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Bike Light',
  'Sauce Labs Onesie'
]);

// Open cart
await cartPage.openCart();
await expect(page.locator('.cart_item')).toHaveCount(4);

  // Checkout
  await cartPage.proceedToCheckout();

  // Fill info
  await checkoutPage.fillCheckoutInfo('Hobaib', 'Shah', '25000');

  // checkout
  await checkoutPage.finishOrder();

  // Verify success message
  await checkoutPage.verifyOrderSuccess();
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Go back home and logout
  await checkoutPage.goBackHome();
  await checkoutPage.logout();

  // Verify logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
