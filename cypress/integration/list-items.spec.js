describe("List item behavior", () => {
  it("Deletes an item", () => {
    cy.server();
    cy.route({
      method: "DELETE",
      url: "/api/todos/*",
      response: {}
    }).as("delete");

    cy.seedAndVisit();

    cy.get(".todo-list li").as("list");

    cy.get("@list")
      .first()
      .find(".destroy")
      .invoke("show")
      .click();
    //.click({ force: true });

    cy.wait("@delete");
    cy.get("@list").should("have.length", 3);
  });
});
