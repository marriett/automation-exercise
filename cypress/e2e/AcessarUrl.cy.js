/// <reference types = "Cypress"/>

import user_fac from "../Factorires/user_fac"
import password_fac from "../Factorires/password_fac"
import homePage from "../support/pages/homePage"
import loginPage from "../support/pages/loginPage"
import CadastroPage from "../support/pages/CadastroPage"


describe('Validação Login', () => {
  let newUser = user_fac.createUser()
  let newPassword = password_fac.password()

  beforeEach(() => {
    homePage.acessarUrl()
    homePage.validarLogoHome()
  })

  // alert(
  //   `
  //   NEW USER DATA: 
  //     ${JSON.stringify(newUser)}

  //   ==============

  //   NEW USER PASSWORD:
  //     ${newPassword}
  //   `
  // )

  it('Acessar URL com sucesso', () => {
    // cy.visit('https://automationexercise.com')
    // cy.get('div[class="logo pull-left"]').should('be.visible')
    // cy.title().should('be.eq', 'Automation Exercise')

    homePage.acessarUrl()
    homePage.validarLogoHome()
    homePage.validarTituloDaPagina()
  })
  it.only('Cadastrar novo usuário', () => {
    // cy.visit('https://automationexercise.com')
    // cy.get('div[class="logo pull-left"]').should('be.visible')
    // cy.title().should('be.eq', 'Automation Exercise')
    // cy.get('a').contains('Signup / Login').click()
    homePage.clicarEmLogin()
    // cy.get('input[name = "name"]').should('be.visible').type(`${newUser.firstName} ${newUser.lastName}`)
    // cy.get('input[data-qa = "signup-email"]').should('be.visible').type(newUser.email)
    // cy.get('button[data-qa = "signup-button"]').should('be.visible').click()
    loginPage.preencherNome(`${newUser.firstName} ${newUser.lastName}`)
    loginPage.preencherEmail(newUser.email)
    loginPage.clicarEmSignup()
    cy.get('h2').contains('Enter Account Information').should('be.visible')
    cy.get('#id_gender2').click()
    cy.get('#name').should('have.value', `${newUser.firstName} ${newUser.lastName}`)
    cy.get('#email').should('have.value', newUser.email)

    // cy.get('#password').type(newPassword)
    // cy.get('#days').select(newUser.birthDay)
    // cy.get('#months').select(newUser.birthMonth)
    // cy.get('#years').select(newUser.birthYear)
    CadastroPage.preencherPassword(newPassword)
    CadastroPage.preencherData(newUser.birthDay, newUser.birthMonth, newUser.birthYear)
    

    // cy.get('#first_name').type(newUser.firstName)
    // cy.get('#last_name').type(newUser.lastName)
    // cy.get('#address1').type(newUser.address)
    // cy.get('#country').select(newUser.country)
    // cy.get('#state').type(newUser.state)
    // cy.get('#city').type(newUser.city)
    // cy.get('#zipcode').type(newUser.zipcode)
    // cy.get('#mobile_number').type(newUser.phone)
    CadastroPage.preencherFirstName(newUser.firstName)
    CadastroPage.preencherLastName(newUser.lastName)
    CadastroPage.preencherAddress(newUser.address, newUser.country, newUser.state, newUser.city, newUser.zipcode)
    CadastroPage.preencherMobileNumber(newUser.phone)
    
    cy.get('button').contains('Create Account').click()
    // Validação
    cy.get('h2[data-qa="account-created"]').should('be.visible')
    cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.get('[href="/logout"]').should('be.visible')

  })
})