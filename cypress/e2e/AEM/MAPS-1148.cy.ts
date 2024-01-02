/// <reference types="@testing-library/cypress" />
describe('cofirming that GTM content direcotory has its updates accordingly', () => {
    it('should navigate to the GTM location', () => {
       cy.AEMLOGIN();
        cy.get( 
        '[data-foundation-collection-item-id="/mnt/overlay/cq/core/content/nav/assets"] > .foundation-collection-navigator'
        ).click().get(
        '[data-foundation-collection-item-id="/mnt/overlay/cq/core/content/nav/assets/files"] > .foundation-collection-navigator'
        ).click();
        cy.get('[data-foundation-collection-item-id="/content/dam/gtm-content"]').contains('GTM Content').click();
    }); 
    it.only('Select the GTM contnet section to navigate to Assets', () => {
        cy.AEMLOGIN();
        cy.visit('https://damstage.vailresorts.com/assets.html/content/dam/gtm-content');
        cy.get('coral-card-title').contains('Epic Pass').should('exist').click();
    });
});