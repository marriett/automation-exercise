const { da } = require('@faker-js/faker');

const elem = require('./elements').ELEMENTS;

class Cadastro {

    validarTitulodaPagina(){
        cy.get(elem.titulo).contains('Enter Account Information').should('be.visible')
    }

    selecionarGeneroFemino(){
        cy.get(elem.radioBtn_generoFem).click()
    }

    selecionarGeneroMasculino(){
        cy.get(elem.radioBtn_generoMasc).click()
    }

    validarEmailPreenchido(email) {
        cy.get(elem.input_email).should('have.value', email)
    }

    preencherPassword(password) {
        cy.get(elem.input_password).type(password)
    }

    preencherData(day, month, year) {
        cy.get(elem.select_days).select(day)
        cy.get(elem.select_month).select(month)
        cy.get(elem.select_year).select(year)
    }

    preencherFirstName(firstName) {
        cy.get(elem.input_firstName).type(firstName)
    }
    
    preencherLastName(lastName) {
        cy.get(elem.input_lastName).type(lastName)
    }

    preencherAddress(addres1, country, state, city, zipcode) {
        cy.get(elem.input_address).type(addres1)
        cy.get(elem.select_country).select(country)
        cy.get(elem.input_state).type(state)
        cy.get(elem.input_city).type(city)
        cy.get(elem.input_zipcode).type(zipcode)
    }

    preencherMobileNumber(mobileNumber) {
        cy.get(elem.input_mobileNumber).type(mobileNumber)
    }
}

export default new Cadastro();