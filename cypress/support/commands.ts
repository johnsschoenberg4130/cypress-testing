/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'

// -- This is a parent command for dev login --
Cypress.Commands.add('LOGINDEV', () => { 
    cy.visit("https://localhost:8081/");
    cy.get('[data-test-id="userid"]').type("dev");
    cy.get('[data-test-id= "password"]').type("dev");
    cy.get('[data-test-id="login-button"]').contains("Login").click();
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

Cypress.Commands.add('AEMLOGIN', () =>{
  cy.visit('https://damstage.vailresorts.com/libs/granite/core/content/login.html?resource=%2F&$$login$$=%24%24login%24%24&j_reason=unknown&j_reason_code=unknown')
  cy.get('#username').type('john.s.schoenberg@vailresorts.com');
  cy.get('#password').type('?ON2}32xGogV');
  cy.get('#submit-button').click();
});
declare global{
  namespace Cypress {
      interface Chainable {
          AEMLOGIN():Chainable<Element>
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