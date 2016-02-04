/* Bradford Smith (bsmith8)
 * CS 546 Lab 1 cs546_lab1.js
 * 02/04/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */


// make this a module for easy testing
var m = {};

m.retirementAmountIfSavingPerMonth = function (yearsUnitlRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment) {
    if (isNaN(yearsUnitlRetirement) || yearsUnitlRetirement < 0
            || isNaN(amountSavingPerMonth) || amountSavingPerMonth < 0
            || isNaN(yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0)) {
        return -1;
    }

    var runningTotal = 0;
    var i = 0;
    for (; i < (yearsUnitlRetirement * 12); i++) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
    }
    return runningTotal;
};

m.investedAmountAfterSomeYears = function (yearsInvesting, initialAmount, yearlyInterestRateOfInvestment) {
    if (isNaN(yearsInvesting) || yearsInvesting < 0
            || isNaN(initialAmount) || initialAmount < 0
            || isNaN(yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0)) {
        return -1;
    }

    var runningTotal = initialAmount;
    var i = 0;
    for (; i < yearsInvesting; i++) {
        runningTotal *= (1 + yearlyInterestRateOfInvestment);
    }
    return runningTotal;
};

m.monthsToPayOffLoan = function (monthlyPaymentAmouynt, initialLoanAmount, yearlyInterestRateOfLoan) {
    if (isNaN(monthlyPaymentAmouynt) || monthlyPaymentAmouynt < 0
            || isNaN(initialLoanAmount) || initialLoanAmount < 0
            || isNaN(yearlyInterestRateOfLoan || yearlyInterestRateOfLoan < 0)) {
        return -1;
    }

    var leftToPay = initialLoanAmount;
    var months = 0;
    for (; leftToPay > 0; months++) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmouynt;
    }
    return months;
};

// export the module
module.exports = m;

