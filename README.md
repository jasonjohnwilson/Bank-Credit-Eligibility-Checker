## BCA Eligibility Checker

The BCA eligibility checker code is located at the following path within the application:  **src/app/eligibility**

The main class for encapsulating the validation is the **BusinessCashAdvanceService**.  This delegates the validation checks to a number of validators that implement **IEligibilityRule**.  These are wrapped in an array and the user input file is passed through each validator.

The code has also been wrapped with an angular application to demonstrate how it works further.

This has also been deployed to azure at the following URL: https://bca-eligibility-demo.azurewebsites.net

### Unit Tests

I've made a start on unit tests as I was going through but as I was short on time I have just given a couple of basic examples.  Normally I would unit test as I was developing following TDD and also have tests to cover all the specifications.



