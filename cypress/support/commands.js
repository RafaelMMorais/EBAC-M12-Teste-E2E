require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario) // <= escrevendo o login na textbox username
    cy.get('#password').type(senha) // <= escrevendo a senha na textbox password
    cy.get('.woocommerce-form > .button').click() // <= Clicando no botão de login
 })

 Cypress.Commands.add('preCadastro' , (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)

    cy.get('.woocommerce-Button').click()
 })

 Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
 })