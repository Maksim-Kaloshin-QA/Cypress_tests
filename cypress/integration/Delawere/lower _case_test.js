describe("Тестируем форму логина", function () {
  it("Тест на привидение к строчным буквам в логине", function () {
    cy.visit("https://login.qa.studio/");
    cy.get("#mail").type("GerMan@Dolnikov.ru");
    cy.get("#pass").type("iLoveqastudio1");
    cy.get("#loginButton").click();
    cy.get("#messageHeader").contains("Такого логина или пароля нет");
    cy.get("#exitMessageButton > .exitIcon");
    cy.get("#exitMessageButton > .exitIcon").click();
  });
});
