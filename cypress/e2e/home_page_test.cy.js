describe("Got to Loom home page and login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Enter user name and password", () => {
    const userName = "Editor";
    const pasWrd = "Editor";
    // enter values
    cy.get('[placeholder="Login"]').type(`${userName}`);
    cy.get('[placeholder="Password"]').type(`${pasWrd}`);

    // click submit
    cy.get('[type="button"]').contains("Login").click();
  });

});
