import { contains } from "cypress/types/jquery";

describe("Component View", () => {
    const dragComponentToWorkSpace = (componentName) => {
        cy.get(".component_editor__tool_box__component").find('b').contains(componentName).drag('.component_editor__work_space');
      };

  beforeEach(() => {
    // Log in before each test
    cy.visit("/"); // Assuming the login page is at the root URL
    cy.get('[data-testid ="userid"]').type("dev"); // Replace with your actual username field selector
    cy.get('[data-testid = "password"]').type("dev"); // Replace with your actual password field selector
    cy.get('[data-testid="login-button"]').contains("Login").click(); // Replace with your actual login button selector
    cy.url().should("eq", "https://localhost:8081/home/"); // Ensure that you are redirected to the home page after login
    cy.visit("https://localhost:8081/treatments/1/components");
  });

  // Test Case 1: Create a component in the component editor (top, middle, and bottom)
  it("Create a component in the component editor (top, middle, and bottom)", () => {
    //cy.visit('https://localhost:8081/treatments/1/components');

    // async call??
    cy.get("button.el-button.el-button--success.el-button--small")
      .find("span")
      .contains("Lock Treatment")
      .click();
    cy.get("el-button el-button--warning el-button--small")
      .find("spand")
      .contains("Unlock Treatment")
      .should("exist");
  });
//   it("drop in the a header compoent type (top)", () => {
//     const dataTransfer = new DataTransfer();
//     cy.get(".component_editor__tool_box__component")
//       .find("b")
//       .contains("Header")
//       .trigger("dragstart", {
//         dataTransfer,
//       });
//     cy.get(".component_editor__work_space").trigger("dropEffect", {
//       dataTransfer,
//     });
//   });
  it('should drag the body compoent type (top)', () => {
    dragComponentToWorkSpace("Header");
  });
  it('should drag the body compoent type (middle)', () => {
    dragComponentToWorkSpace("Single Text");
  });
  it('should drag the body compoent type (bottom)', () => {
    dragComponentToWorkSpace("Footer");
  });
});

// Notes
// How would dragable compoents be tested in this manner? Is data-testid the best solution?
// How do you test async call in Playwright and cypress
//
