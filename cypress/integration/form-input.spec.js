describe("Form input", () => {
  beforeEach(() => {
    cy.seedAndVisit([]);
  });

  it("Visits the app", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it.only("Accepts input", () => {
    const typedText = "New todo";

    cy.get(".new-todo")
      .type(typedText)
      .should("have.value", typedText);
  });
});
