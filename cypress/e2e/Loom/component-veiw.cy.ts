describe("Component View", () => {
  beforeEach(() => {
    cy.LOGINDEV();
    cy.visit("https://localhost:8081/treatments/1/components");

    const lockbutton = "Lock Treatment";
    cy.get(".el-button").contains(lockbutton).click();
  });

  // Compoent build out (top, middle, bottom)
  it("should drag the body compoent type (top)", () => {
    // grab header (top)
    cy.get(".component_editor__tool_box > :nth-child(5)").drag(".draggable", {
      source: { x: 0, y: 0 },
      target: { position: "center" },
      force: true,
    });
  });
  it("should drag the body compoent type (middle)", () => {
    // grab single text (middle)
    cy.get(".component_editor__tool_box > :nth-child(14)").drag(".draggable", {
      source: { x: 0, y: 0 },
      target: { position: "center" },
      force: true,
    });
  });
  it("should drag the body compoent type (bottom)", () => {
    // grab footer (bottom)
    cy.get(".component_editor__tool_box > :nth-child(4)").drag(".draggable", {
      source: { x: 0, y: 0 },
      target: { position: "center" },
      force: true,
    });
  });

  it('Move a component in the component editor (mouse) (to top, to middle, to bottom)', () =>{

  })
  it('Move a component in the component editor (down arrow when focused on handle)', () =>{
    
  });
  it('Move a component in the component editor (up arrow when focused on handle)', () =>{
    
  });
  
  it('Move a component, request fails, the state of the components returns to the previous state', () =>{
    
  });

  it('When the campaign is frozen, users cannot lock the treatment or edit, add, or reposition components', () =>{
    
  });

});
