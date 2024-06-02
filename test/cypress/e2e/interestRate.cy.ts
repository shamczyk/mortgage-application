import { CALCULATOR} from '../support/utils/selectors';

describe('Interest Rate Field', () => {

	beforeEach(() => {
		cy.visit('https://www.zillow.com/mortgage-calculator/?_d=true');
	});

	context('Acceptance Tests', () => {
		it('1 - Manual Entry of Custom Values', () => {
      let rate = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
      let interestRate = rate.toString();

      cy.get(CALCULATOR.intRateField)
        .clear()
        .should('have.value', '')
        .type(interestRate)
        .type('{enter}');
      cy.get(CALCULATOR.intRateField)
        .should('have.value', interestRate);
    });
	});

	context('End to End Test', () => {
		it('6 - Manual Interest Rate Entry Adjusts Breakdown Graph', () => {
      let rate = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
      let interestRate = rate.toString();

      cy.get(CALCULATOR.intRateField)
        .clear()
        .should('have.value', '')
        .type(interestRate)
      cy.get(CALCULATOR.pieChartDisplay)
        .click();
      cy.get(CALCULATOR.fullReportButton)
        .contains('Full report')
        .should('have.attr', 'href').and('include', 'rate=' + interestRate);
    });
	});
});