/// <reference types="Cypress" />


describe("Verify Login Form", () => {
    it.only("automate the login form and assert that you are logged in", () => {
        cy.visit("https://dev.partner.rejareja.app/auth/login")
        cy.get('input#username').type('254701234561');
        cy.get('.form-width > :nth-child(2) > .form-control').type('1122');
        cy.get('.btn').click({ force: true })
        //cy.contains('Submit').click
        //cy.url().should('include', '/dashboard')

        //"Create a supplier and assert the new supplier creation
        // cy.get('div:nth-of-type(2) > p').invoke('removeAttr', 'target').click();
        // cy.get('.btn.btn-primary.ng-star-inserted').click;
        // cy.get('.btn.btn-primary.ng-star-inserted').type('john');
        // cy.get('.btn.btn-primary.ng-star-inserted').type('distributor');
        // cy.get('input#mat-chip-list-input-0').type('lagos');
        // cy.get('div:nth-of-type(2) > input[name="fakeFirstName"]').type('mark');
        // cy.get('div:nth-of-type(3) > input[name="fakeFirstName"]').type('Doe');
        // cy.get('div:nth-of-type(3) > input[name="fakeFirstName"]').type('mark@gmail.com');
        // cy.get('div:nth-of-type(3) > input[name="fakeFirstName"]').type('08060763292');
        // cy.get('[class="w-100 ng-touched ng-dirty ng-valid"] .btn-primary').click();
        // cy.title().should('include', 'dashboard')
    })
    it("verify login page using a negative scenario", () => {
        cy.visit("https://dev.partner.rejareja.app/auth/login")
        cy.get('input#username').type('70123456126366363');
        cy.get('.form-width > :nth-child(2) > .form-control').type('2101');
        cy.get('.btn').click();
       
    })

    });
    describe("Create a supplier and assert the new supplier creation", () => {
        it("verify user can create supplier", () => {
            cy.visit("https://dev.partner.rejareja.app/dashboard")
            // cy.get('input#username').type('701234561');
            // cy.get('.form-width > :nth-child(2) > .form-control').type('1122');
            // cy.get('.form-width.mx-auto.ng-dirty.ng-submitted.ng-touched.ng-valid > .btn.btn-block.btn-primary').click();
        })
        it("verify login page using a negative scenario", () => {
            cy.visit("https://dev.partner.rejareja.app/auth/login")
            cy.get('input#username').type('70123456126366363');
            cy.get('.form-width > :nth-child(2) > .form-control').type('2101');
            cy.get('.btn').click();
        })
    
        });
