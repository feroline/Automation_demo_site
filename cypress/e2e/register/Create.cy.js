/// <reference types="cypress"/>

import registerLocators from "../../support/locators/register"; 

context('Create', () =>  {
    
    before(() => {
        cy.fixture('./persona').as('persona');
    });
    
    it.only('Valid data', () => {

        cy.get('@persona').then(data => {
        
            cy.get(registerLocators.INPUT_FIST_NAME).type(data.first_name);
            cy.get(registerLocators.INPUT_FIST_NAME).should('have.value', data.first_name);

            cy.get(registerLocators.INPUT_LAST_NAME).type(data.last_name);
            cy.get(registerLocators.INPUT_LAST_NAME).should('have.value',data.last_name);

            cy.get(registerLocators.TEXTAREA_ADRESS).type(data.adress);
            // cy.get(registerLocators.TEXTAREA_ADRESS).type(data.adress);
            cy.get(registerLocators.TEXTAREA_ADRESS).should('have.value',data.adress);
        });

    });

});