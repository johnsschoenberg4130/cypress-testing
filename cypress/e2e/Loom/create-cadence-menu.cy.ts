describe("Campagin View Main", () => {
  // create a session here to login
  beforeEach(() => {
    cy.LOGINDEV();
    cy.visit("https://localhost:8081/home/");
  });

  const warReqsCadence = [
    "Treatement groups require weather for their own resort",
    "Treatment groups require event data for their own resort",
    "Treatement groups require trail data for their own resort",
    "Treatment groups require weather for multiple resorts",
    "Treatment groups require event data for multiple resorts",
    "Treatment groups require trail data for multiple resorts"
  ];

  describe("When updating a campaign in the content area, the campaign in the menu updates", () => {
    // it('updates campaign in menu when content is updated', () => {
    //   // Your Cypress test code here
    //     //
    // });
  });

  describe("You can create a cadence using the aside menu", () => {
    it.only("can create a cadence using the menu", () => {
      cy.get(
        ":nth-child(1) > .el-submenu__title > .el-submenu__icon-arrow"
      ).click();
      cy.get(
        '[data-test-id="menu-tree-more-options"]'
      ).eq(0).click();
      // // creates cadence.
      cy.get('[data-test-id="dropdown-create-caden"]')
        .contains("Create Cadence")
        .click({force:true});
      cy.get(
        ":nth-child(3) > .el-form-item__content > .el-input > .el-input__inner"
      ).type("Cadence Six");
      cy.get(".el-textarea__inner").type(
        "Testing out this cool feature to make sure everything works as expected!!"
      );

      //cy.get('[data-test-id="cadence-reqs-menu-checks"] > input').contains('Treatment groups require event data for their own resort').check();
      // // proper testing would toggle each check box on and off, need to establish some data-test ids for this radio box.

      // cy.get(".cadence_modal__footer > .el-button--primary")
      //   .contains("Create")
      //   .click();
    });
  });
  // need a clearer outline of data-ids to actaully test this.
  it("updates cadence name in sidebar menu when updated in modal", () => {
    cy.get(
      ':nth-child(2) > [style="padding-left: 20px;"] > .el-submenu__icon-arrow'
    ).click();
    cy.get(
      '[style=""] > :nth-child(1) > .menu_tree__actions > :nth-child(2) > .loom-dropdown > .el-tooltip > .el-icon-edit-outline'
    ).click();
    cy.get(
      ' #global_campaign_management_aside [id^="dropdown-menu"] > :nth-child(3)'
    )
      .contains("Create Treatment")
      .click({ force: true });
  });

  it("Refresh a Campaign in Campaign view", () => {
    cy.visit("https://localhost:8081/campaigns/1/");
    cy.get(":nth-child(3) > .el-tooltip").click();
    // pop up message
  });

  it("Lock Campaign in Menu and Content Updates (Campaign View)", () => {
    cy.visit("https://localhost:8081/campaigns/1/");
    cy.get(":nth-child(2) > .el-button").click();
    // pop up message
  });

  it("Searching  an archived Campaign on pageload works", () => {
    cy.visit("https://localhost:8081/home/");
    cy.get('[id^= "el-collapse-head"]').contains("Browse Archive").click();
    cy.get(".el-input__inner").type("Archived");
    cy.get(".el-form-item__content > .el-button--primary > span")
      .contains("Search")
      .click();
    cy.get("#campaign-menuitem-48D40F2A-3F4B-46C0-8844-DD52569D4DCC").contains(
      "Archived Campaign"
    );
  });

  it("Loading an unarchived Campaign on pageload works", () => {
    cy.visit("https://localhost:8081/home/");
    cy.get(".loom-button").click();
    cy.get(".email-search-form > :nth-child(2) > input").type(
      "88BAF5F4-B09B-4668-BB45-74E4E1AA6067"
    );
    cy.get(".email-search-form > button").contains("Search").click();
  });
  // need to confirm that searching by name works
  // check and uncheck archived search

  it("Navigating to a different Campaign with the side menu works (and updates the side menu)", () => {
    cy.get(
      ":nth-child(2) > .el-submenu__title > .el-submenu__icon-arrow"
    ).click();
    cy.get(
      '[style=""] > :nth-child(1) > .menu_tree__actions > :nth-child(2) > .loom-dropdown > .el-tooltip > .el-icon-edit-outline'
    ).click();
    cy.get(
      '#global_campaign_management_aside [id^="dropdown-menu"] > :nth-child(1)'
    )
      .contains("View Campaign")
      .click({ force: true });
  });

  it("Navigating to a different Campaign with the url works (and updates the side menu)", () => {
    // Your Cypress test code here
  });

  it("Creating a campaign redirects you to the campaign you just created", () => {
    cy.get(
      ":nth-child(5) > :nth-child(1) > :nth-child(1) > .el-button"
    ).click();

    cy.get(
      ".campaign_modal__content__input.is-required > .el-form-item__content > .el-input > .el-input__inner"
    )
      .click()
      .type("Treatment Seven");

    cy.get(".el-textarea__inner")
      .click()
      .type(
        "Testing out this cool feature to make sure everything works as expected!!"
      );
    cy.get(
      ":nth-child(3) > .el-form-item__content > .el-select > .el-input > .el-input__inner"
    ).click();
    // need better solultion for selecting drop down options. 
  
  });

  it("You should be able to copy a campaign", () => {
    cy.visit("https://localhost:8081/campaigns/1/");
    cy.get(":nth-child(2) > .el-button").contains("Lock Campaign").click();
    cy.get(".el-button--info > span").contains("Copy").click();
    cy.get(
      ":nth-child(2) > .el-form-item__content > .el-input > .el-input__inner"
    )
      .clear()
      .type("Test-Copy");
    cy.get(".footer > .el-button--primary").contains("Copy Campaign").click();
  });

  it("Double clicking the campaign lock icon does not result in an additional lock request. No error message is shown.", () => {
    cy.get(
      ':nth-child(1) > .el-submenu__title > .el-submenu__icon-arrow'
      ).click();
    cy.get(
      '[style=""] > :nth-child(1) > .menu_tree__actions > :nth-child(1) > .el-tooltip > .el-icon-unlock'
      ).dblclick();
  });

  it("Deleting a cadence will delete the treatments", () => {
    cy.visit("https://localhost:8081/campaigns/1003/");
    cy.get('.loom-view-action-buttons > :nth-child(2) > .el-button').contains('Lock Campaign').click();
    cy.get(
      '.loom-view-action-buttons > :nth-child(3) > .el-button--primary'
      ).contains('Edit').click();
    cy.get(':nth-child(1) > .el-table_2_column_10 > .cell > .el-button--danger').click();
    cy.get('.el-message-box__btns > .el-button--primary').contains('Yes').click();
    cy.get('.campaign_modal__footer > .el-button--primary').contains('Update').click();
  });

  it("Deleting a cadence will update the side menu", () => {
    // Your Cypress test code here
  });

  it('campaign analytics tab loads, and user can open "Update Tactics" modal', () => {
    // Your Cypress test code here
  });

  it("users can update analytics tactics for a campaign", () => {
    // Your Cypress test code here
  });

  it("Update the cadence name in the campaign modal and the cadence name in the sidebar menu updates", () => {
    // Your Cypress test code here
  });

  it("Unarchiving a campaign adds it to the main side menu", () => {
    // Your Cypress test code here
  });

  it("Trying to copy a cadence with a name that already exists will fail", () => {
    // Your Cypress test code here
  });

  it("After deleting a campaign, the user is taken to the home screen, and the campaign is removed", () => {
    // Your Cypress test code here
  });

  it("Only users with the FREEZE CAMPAGIN permission can freeze/unfreeze campaigns", () => {
    // Your Cypress test code here
  });

  it("When the campaign is frozen, all users cannot edit, lock, or delete the campaign", () => {
    // Your Cypress test code here
  });

  it("When the campaign is frozen, users cannot not use the bulk edit buttons", () => {
    // Your Cypress test code here
  });

  it("When the campaign is frozen, the  campaign analytics fields cannot be updated", () => {
    // Your Cypress test code here
  });

  it("When a campaign is frozen it cannot be unarchived or archived", () => {
    // Your Cypress test code here
  });

  it("The campaign analytics tab loads, and the user can open the UPDATE TACTICS modal", () => {
    // Your Cypress test code here
  });

  it("Users can update the analytics tactics for a campaign", () => {
    // Your Cypress test code here
  });
});
