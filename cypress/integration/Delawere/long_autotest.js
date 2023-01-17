describe("Создание длинного автотеста", function () {
  it("Длинный автотест", function () {
    cy.visit("https://testqastudio.me/");
    cy.get(
      ".post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail"
    ).click();
    cy.get(
      ".summary > .cart > .product-button-wrapper > .quantity > .increase > svg"
    ).click();
    cy.get(
      ".summary > .cart > .product-button-wrapper > .quantity > .increase > svg"
    ).click();
    cy.get(
      ".summary > .cart > .product-button-wrapper > .single_add_to_cart_button"
    ).click();
    cy.wait(5000);
    cy.get(
      ".cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg"
    ).click();
    cy.get('[href="https://testqastudio.me"]').click();
    cy.get(
      ".post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail"
    ).click();
    cy.get(
      ".summary > .cart > .product-button-wrapper > .single_add_to_cart_button"
    ).click();
    cy.intercept("POST", "/product/**").as("ajax-product");
    cy.intercept("/?wc-ajax=get_refreshed_fragments").as("ajax-reload");
    cy.get(
      '.product-button-wrapper > button[name="add-to-cart"]:visible'
    ).click();
    cy.wait("@ajax-product");
    cy.wait("@ajax-reload");
    cy.get("#cart-modal").contains("Оформение заказа").click();
    cy.get("#billing_first_name").type("Максим");
    cy.get("#billing_last_name").type("Калошин");
    cy.get("#billing_address_1").type("Москва,123");
    cy.get("#billing_city").type("12345");
    cy.get("#billing_state").type("1234567");
    cy.get("#billing_postcode").type("123456789");
    cy.get("#billing_phone").type("+79296679892");
    cy.get("#billing_email").type("kaloshinm@inbox.ru");
    cy.get("#place_order").click();
  });
});
