describe("Тестируем форму логина", function () {
  it("Негативный кейс валидации", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("germandolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Нужно исправить проблему валидации");
    cy.get("#exitMessageButton");
    cy.get("#exitMessageButton").click();
  });
});
