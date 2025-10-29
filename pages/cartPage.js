exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('#checkout');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
};