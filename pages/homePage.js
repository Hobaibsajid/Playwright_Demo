exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
  }

  async verifyLogin() {
    await this.inventoryList.waitFor({ state: 'visible' });
  }

  // ✅ Add specific products by name
  async addSpecificProducts(productNames) {
    for (const name of productNames) {
      const addBtn = this.page.locator(
        `xpath=//div[text()="${name}"]/ancestor::div[@class="inventory_item"]//button`
      );
      await addBtn.click();
    }
  }
};
