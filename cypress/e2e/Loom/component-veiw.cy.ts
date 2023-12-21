describe("Component View", () => {
  beforeEach(() => {
    cy.LOGINDEV();
    cy.visit("https://localhost:8081/treatments/1/components");
    
    const lockbutton = 'Lock Treatment';
    cy.get('.el-button').contains(lockbutton).click()
  });

   // Compoent build out (top, middle, bottom)
   it.only('should drag the body compoent type (top)', () => {
    // grab header (top)
    cy.get('.component_editor__tool_box > :nth-child(5)').drag('.draggable', {
      source:{x:680, y:371},
      target:{position: 'center'},
      force: true,
    });
      // grab single text (middle)
      cy.get('.component_editor__tool_box > :nth-child(14)').drag('.draggable', {
        source:{x:0, y:0},
        target:{position: 'center'},
        force: true,
      });
      // grab footer (bottom)
      cy.get('.component_editor__tool_box > :nth-child(4)').drag('.draggable', {
        source:{x:0, y:0},
        target:{position: 'center'},
        force: true,
      });

  });
  });

