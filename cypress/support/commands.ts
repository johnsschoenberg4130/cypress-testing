/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- drag command -
// -- This is a parent command for dev login --
//  Cypress.Commands.add('LOGIN', () => { 
//     cy.session( LOGIN, () =>{
//         cy.visit("/");
//         cy.get('[data-testid ="userid"]').type('dev'); 
//         cy.get('[data-testid = "password"]').type('dev'); 
//         cy.get('[data-testid="login-button"]').contains("Login").click();
//         cy.url().should("eq", "https://localhost:8081/home/");
//         cy.visit("https://localhost:8081/treatments/1/components");
//     })
   
//  });
//
//
// -- This is a child command --
//  Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { 
//     const { x = 0, y = 0 } = options.source || {};
//     const { position = 'right' } = options.target || {};
//     return cy.wrap(subject).trigger('mousedown', { which: 1, x, y }).trigger('mousemove', { x: 500, y: 300 }).trigger('mouseup');
//  })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export{};