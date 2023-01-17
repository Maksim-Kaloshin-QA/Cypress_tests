describe("Тестируем форму логина", function () {
  it("Позитивный тест на верный логин и пароль", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("german@dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Авторизация прошла успешно");
    cy.get("#exitMessageButton > .exitIcon");
    cy.get("#exitMessageButton > .exitIcon").click();
    cy.contains("Форма логина");
  });
});
