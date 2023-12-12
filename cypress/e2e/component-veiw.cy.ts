describe("Component View", () => {
    const dragComponentToWorkSpace = (componentName: string) => {
        cy.get(".component_editor__tool_box")
          .find("b")
          .contains(componentName)
          .drag(".component_editor__work_space");
      };
  beforeEach(() => {
    cy.session("LOGIN", () => {
      cy.visit("/");
      cy.get('[data-testid ="userid"]').type("dev");
      cy.get('[data-testid = "password"]').type("dev");
      cy.get('[data-testid="login-button"]').contains("Login").click();
      cy.url().should("eq", "https://localhost:8081/home/");
    });
  });
 // Compoent build out (top, middle, bottom)
  it('should drag the body compoent type (top)', () => {
    cy.visit("https://localhost:8081/treatments/1/components");
    // if statment to check for unlocked/locked state.
    cy.get("button.el-button.el-button--success.el-button--small")
    .find("span")
    .contains("Lock Treatment")
    .click().wait(500); // wait for 1
    dragComponentToWorkSpace('Header', {
      source: { x:300 , y: 400 },
      target: { position: 'left' },
      force: true,
    });
    dragComponentToWorkSpace('Single Text', {
      source: { x:350 , y: 400 },
      target: { position: 'left' },
      force: true,
    });
    dragComponentToWorkSpace('Footer', {
      source: { x:375 , y: 400 },
      target: { position: 'left' },
      force: true,
    });
  });
});

