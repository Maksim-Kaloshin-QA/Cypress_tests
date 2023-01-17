describe("Тестируем форму логина", function () {
  it("Негативный кейс авторизации", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("german@dolnikov.ru");
    cy.get("#pass").type("12345");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#exitMessageButton");
    cy.get("#exitMessageButton").click();
  });
});
