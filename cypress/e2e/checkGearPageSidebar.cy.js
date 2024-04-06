//<reference types="cypress"/>

import GearPage from "../pageObjects/GearPage.js";
import gearPageData from "../fixtures/gearPageData.json";

describe("checkGearPageSidebar", () => {
  const gearPage = new GearPage();

  beforeEach(() => {
    cy.visit(gearPageData.ExampleUrl);
  });

  it("TC_009.001.001 | Gear page > Shop by category > Visibility of sidebar title", () => {
    gearPage
      .getFirstStringTitle()
      .should("contain", gearPageData.FirstStringTitle)
      .and("be.visible");
    gearPage
      .getSecondStringTitle()
      .should("contain", gearPageData.SecondStringTitle)
      .and("be.visible");
  });

  gearPageData.dropDownMenu.forEach((item, index) => {
    it("TC_009.001.001 | Gear page > Shop by category > Visibility of categories", () => {
      gearPage.clickCategoryMenuTitles(item, index);
      cy.contains(gearPageData.categoryMenu[index]);
    });
  });

  it("TC_009.002.001 | Gear page > Shop by category > Quantity of products", function () {
    gearPage
      .getBagsCategoryQuantity()
      .invoke("text")
      .then((text1) => {
        gearPage.getBagsLink().click();
        gearPage
          .getItemsQuantity()
          .invoke("text")
          .then((text2) => {
            expect(text1).equal(text2);
          });
        gearPage.clickBackToGearPage();
      });

    gearPage
      .getFitnessEquipmentCategoryQuantity()
      .invoke("text")
      .then((text1) => {
        gearPage.getFitnessEquipmentLink().click();
        gearPage
          .getItemsQuantity()
          .invoke("text")
          .then((text2) => {
            expect(text1).equal(text2);
          });
        gearPage.clickBackToGearPage();
      });

    gearPage
      .getWatchesCategoryQuantity()
      .invoke("text")
      .then((text1) => {
        gearPage.getWatchesLink().click();
        gearPage
          .getItemsQuantity()
          .invoke("text")
          .then((text2) => {
            expect(text1).equal(text2);
          });
      });
  });
});
