class GearPage {
  getGearDropDownMenuTitles = () => cy.get(".nav-4 ul span");
  getFirstStringTitle = () => cy.get("div.title:first-of-type strong");
  getSecondStringTitle = () => cy.get("#narrow-by-list2 dt");
  getBagsCategoryQuantity = () => cy.get("ol.items li:first-child span");
  getFitnessEquipmentCategoryQuantity = () =>
    cy.get("ol.items li:nth-child(2) span");
  getWatchesCategoryQuantity = () => cy.get("ol.items li:last-child span");
  getBagsLink = () => cy.get(".columns dd li:first-child a");
  getFitnessEquipmentLink = () => cy.get(".columns dd li:nth-child(2) a");
  getWatchesLink = () => cy.get(".columns dd li:last-child a");
  getCategoryMenuTitles = () => cy.get("dl#narrow-by-list2 a");
  getBackToGearPage = () => cy.get(".breadcrumbs li:nth-child(2) a");
  getItemsQuantity = () =>
    cy.get("#authenticationPopup+div p.toolbar-amount span:last-child");

  clickCategoryMenuTitles(itemName, index) {
    this.getCategoryMenuTitles().eq(index).as("item");
    cy.get("@item").contains(itemName);
    cy.get("@item").click();

    return this;
  }

  clickBackToGearPage() {
    this.getBackToGearPage().click();

    return this;
  }
}

export default GearPage;
