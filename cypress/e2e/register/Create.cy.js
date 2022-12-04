/// <reference types="cypress"/>

import registerLocators from "../../support/locators/register"; 

context('Create', () =>  {

    before(() => {
        cy.fixture('./persona').as('persona');
    });
    
    it.only('Valid data', () => {

        cy.get('@persona').then(data => {
        
            cy.get(registerLocators.INPUT_FIST_NAME).type(data.first_name).as('First Name');
            cy.get(registerLocators.INPUT_FIST_NAME).should('have.value', data.first_name);

            cy.get(registerLocators.INPUT_LAST_NAME).type(data.last_name).as('Last Name');
            cy.get(registerLocators.INPUT_LAST_NAME).should('have.value',data.last_name);

            cy.get(registerLocators.TEXTAREA_ADRESS).type(data.adress).as('Address');
            // TODO: Ver depois porque esse trem tá vindo quebrado; 
            // cy.get('.form-control').contains(data.adress); 
            
            cy.get(registerLocators.INPUT_EMAIL).type(data.email).as('Email');
            cy.get(registerLocators.INPUT_EMAIL).should('have.value',data.email);
            
            cy.get(registerLocators.INPUT_PHONE).type(data.phone).as('Phone');
            cy.get(registerLocators.INPUT_PHONE).should('have.value',data.phone);

            cy.get(registerLocators.FUNC_INPUT_GENDER(data.gender)).type(data.gender).as('Gender');
            cy.get(registerLocators.FUNC_INPUT_GENDER(data.gender)).check();
        });

    });

});