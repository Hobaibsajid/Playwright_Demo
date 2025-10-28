exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
  }

  async verifyLogin() {
    await this.inventoryList.isVisible();
  }
};
