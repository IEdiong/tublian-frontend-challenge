const firstNameInput = '[id="first-name"]';
const lastNameInput = '[id="last-name"]';

describe('Multistep Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the page loads correctly', () => {
    cy.contains('Get Started');
    cy.get(firstNameInput).should('be.visible');
    cy.get(lastNameInput).should('be.visible');

    cy.get(firstNameInput).type('John');
    cy.get(lastNameInput).type('Doe');
    cy.get('[type="button"]').click();

    cy.contains('Create Account');
  });

  it('handles error properly', () => {
    cy.get(firstNameInput).click();
    cy.get(lastNameInput).click();

    cy.get('[data-cy="error-message"]').should('be.visible');
  });
});
