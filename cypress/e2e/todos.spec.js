describe("Name of the group", () => {
  //   it("easy test", () => {
  //     expect(true).to.equal(true)
  //   })

  // before(() => {
  //   cy.request("POST", "http://localhost:5000/api/v1/auth/register", {
  //     name: "test",
  //     email: "yosrisamm7@gmail.com",
  //     password: "123456",
  //     role: "admin",
  //   })
  //     .its("body")
  //     .as("currentUser")
  // })
  it("login", function () {
    // destructuring assignment of the this.currentUser object
    const email = "yosrisamm1@gmail.com"
    const password = "123456"

    cy.visit("/login")
    cy.get(":nth-child(1) > input").type(email)
    cy.get(":nth-child(2) > input").type(password)
    cy.findByTestId("submit").click()
    cy.url().should("include", "/teacher")
  })

  it("successfully loads", () => {
    // cy.visit("http://localhost:3000")
    // cy.visit("/")
    // cy.get("a").click()
    cy.contains(/tasks/i).click()
    cy.url().should("include", "/task-page")
    cy.wait(1000)
    cy.findByLabelText(/title/i).clear().type("learn react")
    // cy.get('[data-testid="submit"]').click()
    cy.findByTestId("submit").click()

    // cy.get(".task:last-child .title").should("contain", "learn react")
    cy.get(".task:last-child .title").should("have.text", "learn react")
    cy.get('[aria-label="Title"]').should("have.value", "")

    // cy.url().should("include", "/task-page")
    // cy.wait(3000)
    // cy.get("a").click()
    // cy.contains(/tasks/i).click()
    // // cy.get('[aria-label="Title"]').clear().type("learn react")
    // cy.findByLabelText(/title/i).clear().type("learn react")
    // // cy.get('[data-testid="submit"]').click()
    // cy.findByTestId("submit").click()
    // cy.get('[aria-label="Title"]').should("have.value", "")
    // // cy.get(".task:last-child .title").should("contain", "learn react")
  })
  // it("should show an error message if there's an error in adding task", () => {
  //   cy.server()
  //   cy.route({
  //     method: "POST",
  //     url: "http://localhost:5000/api/v1/tasks/",
  //     status: 500,
  //     response: {},
  //   })
  //   cy.visit("/")
  //   // cy.wait(3000)
  //   // cy.get("a").click()
  //   cy.contains(/tasks/i).click()
  //   cy.url().should("include", "/task-page")
  //   // cy.get('[aria-label="Title"]').clear().type("learn react")
  //   cy.findByLabelText(/title/i).clear().type("learn react")
  //   // cy.get('[data-testid="submit"]').click()
  //   cy.findByTestId("submit").click()

  //   // cy.findByText(/an error occurred.* add task/i)
  // })
})
