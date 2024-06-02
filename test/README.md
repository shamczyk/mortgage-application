# Mortgage Calculator Automation

This project serves as a home for the Zillow Mortgage Automation Calculator. Currently focusing on the interest rate field.

These tests are being run using the automation tool, Cypress. (https://www.cypress.io/)

## Running automated tests

> The Cypress tests are located in the `test` directory.

-   Switch to the Cypress project directory `cd test`

-   If running for the first time, make sure to run `npm install` before running the tests.

-   Run `npx cypress open` to execute the end-to-end tests in the browser.
-   Run `npx cypress run` to execute the end-to-end tests from the terminal. (Currently not connected to a recorder, such as TestRail)

-   Select 'E2E Testing'
-   Choose a browser and click 'Start E2E Testing in ' + [browser selected]
-   Once the Cypress Test Runner has opened, click on ` interestRate.cy.ts` to start executing tests.

### As of 31 MAY 2024:

- '1 - Manual Entry of Custom Values' test script in ` interestRate.cy.ts` currently fails when run. This is expected. Currently these steps should pass, but there is an existing defect on this website regarding the interest rate field being tested.

#### Automation Opportunities

- Being given access to API calls, would provide an opportunity to use cy.intercept and confirm API responses are providing correct information back to the application/website

- I created a selector.ts file in order to more easily identify elements within the test repo. This will allow easier readability, quicker access to lists of elements on a certain page, and overall better organization. Also should the definition of a selector change, the change only needs to occur in the selector.ts file and not every individual instance where that element is called.

- In the future, it would be helpful and best practice to add data-cy attributes to elements instead of depending on other HTML attributes like id, class, name or role. This will help decrease confusion in the scripts as the website is built out more.