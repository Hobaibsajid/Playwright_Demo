exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
    this.successMsg = page.locator('.complete-header');
    this.backHomeBtn = page.locator('#back-to-products');
    this.menuBtn = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async verifyOrderSuccess() {
    await this.successMsg.waitFor({ state: 'visible' });
  }

  async goBackHome() {
    await this.backHomeBtn.click();
  }

  async logout() {
    await this.menuBtn.click();
    await this.logoutLink.click();
  }
};