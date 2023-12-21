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

// -- This is a parent command for dev login --
Cypress.Commands.add('LOGINDEV', () => { 
    cy.visit("https://localhost:8081/");
    cy.get('[data-testid="userid"]').type("dev");
    cy.get('[data-testid= "password"]').type("dev");
    cy.get('[data-testid="login-button"]').contains("Login").click();
    cy.url().should("eq", "https://localhost:8081/home/");
    });
declare global{
    namespace Cypress {
        interface Chainable {
            LOGINDEV():Chainable<Element>
        }
      } 
}
Cypress.Commands.add('LOGINEDIT', () => { 
  cy.visit("https://localhost:8081/");
  cy.get('[data-testid="userid"]').type("editor");
  cy.get('[data-testid= "password"]').type("editor");
  cy.get('[data-testid="login-button"]').contains("Login").click();
  cy.url().should("eq", "https://localhost:8081/home/");
  });
declare global{
  namespace Cypress {
      interface Chainable {
          LOGINEDIT():Chainable<Element>
      }
    } 
}
Cypress.Commands.add('LOGINREV', () => { 
  cy.visit("https://localhost:8081/");
  cy.get('[data-testid="userid"]').type("reviewer");
  cy.get('[data-testid= "password"]').type("reviewer");
  cy.get('[data-testid="login-button"]').contains("Login").click();
  cy.url().should("eq", "https://localhost:8081/home/");
  });
declare global{
  namespace Cypress {
      interface Chainable {
          LOGINREV():Chainable<Element>
      }
    } 
}
// -- This is a child drag command --
   
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