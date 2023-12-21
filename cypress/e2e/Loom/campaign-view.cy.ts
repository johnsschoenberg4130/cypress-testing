import { contains } from "cypress/types/jquery";

describe('Campaign View', () => {
  // create a session here to login 
  beforeEach(() => {
    cy.LOGINDEV();
    cy.visit('https://localhost:8081/home/');
  });
    // it('updates campaign in menu when content is updated', () => {
    //   // Your Cypress test code here
    //     // 
    // });
  
    it('can create a cadence using the menu', () => {
      // helper function 
      // user navigates to the home page 
      // user clicks drop down arrow/  
      cy.get(':nth-child(1) > .el-submenu__title > .el-submenu__icon-arrow').click();
      cy.get('[style=""] >:nth-child(1) > .menu_tree__actions > :nth-child(2) > .loom-dropdown > .el-tooltip > .el-icon-edit-outline')
      .click();
       // user selects from drop down "Create Cadence"
       cy.get(' [id^="dropdown-menu"] > :nth-child(2)').contains('Create Cadence').click({force:true});
    
      // input cadence feilds for the following 
        // Name
        cy.get('.el-form-item__content > .el-input > .el-input__inner').should('contain.text="Cadence Name"').type('Cadence Three');
        // Description
        // check all selects can toggle on and off 
        // select event data one.
      // Create new treatment 
        // select new cadence
        // select brand 
        // Treatement Name 
        // segment 
        // description
        // select subject 
        // select PreHeader
        // create
      // delete the cadence after its been created to ensure we can delete it. 
    });
  
    // it('updates cadence name in sidebar menu when updated in modal', () => {
    //   // Your Cypress test code here
    // });

    // it('users with "Freeze Campaign" permission can freeze/unfreeze campaigns', () => {
    //   // Your Cypress test code here
    // });
  
    // it('when campaign is frozen, users cannot edit, lock, or delete the campaign', () => {
    //   // Your Cypress test code here
    // });
  
    // it('when campaign is frozen, users cannot use bulk edit buttons', () => {
    //   // Your Cypress test code here
    // });
  
    // it('when campaign is frozen, campaign analytics fields cannot be updated', () => {
    //   // Your Cypress test code here
    // });
  
    // it('when campaign is frozen, it cannot be unarchived or archived', () => {
    //   // Your Cypress test code here
    // });
  
    // it('campaign analytics tab loads, and user can open "Update Tactics" modal', () => {
    //   // Your Cypress test code here
    // });
  
    // it('users can update analytics tactics for a campaign', () => {
    //   // Your Cypress test code here
    // });
  });
  