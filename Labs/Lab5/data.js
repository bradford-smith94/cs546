/* Bradford Smith (bsmith8)
 * CS 546 Lab 4 data.js
 * 02/27/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var exports = module.exports = {};

// You can now add export properties to the exports object to be accessible from outside this file

exports.retirementAmountIfSavingPerMonth = function (yearsUnitlRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment) {
    if (isNaN(yearsUnitlRetirement) || yearsUnitlRetirement < 0
            || isNaN(amountSavingPerMonth) || amountSavingPerMonth < 0
            || isNaN(yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0)) {
        throw "Invalid Inputs!";
    }

    var runningTotal = 0;
    var i = 0;
    for (; i < (yearsUnitlRetirement * 12); i++) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
    }

    if (isNaN(runningTotal))
        throw "Result too small!";

    return runningTotal;
};

exports.investedAmountAfterSomeYears = function (yearsInvesting, initialAmount, yearlyInterestRateOfInvestment) {
    if (isNaN(yearsInvesting) || yearsInvesting < 0
            || isNaN(initialAmount) || initialAmount < 0
            || isNaN(yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0)) {
        throw "Invalid Inputs!";
    }

    var runningTotal = initialAmount;
    var i = 0;
    for (; i < yearsInvesting; i++) {
        runningTotal *= (1 + yearlyInterestRateOfInvestment);
    }
    return runningTotal;
};

exports.monthsToPayOffLoan = function (monthlyPaymentAmouynt, initialLoanAmount, yearlyInterestRateOfLoan) {
    if (isNaN(monthlyPaymentAmouynt) || monthlyPaymentAmouynt < 0
            || isNaN(initialLoanAmount) || initialLoanAmount < 0
            || isNaN(yearlyInterestRateOfLoan || yearlyInterestRateOfLoan < 0)) {
        throw "Invalid Inputs!";
    }

    var leftToPay = initialLoanAmount;
    var months = 0;
    for (; leftToPay > 0; months++) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmouynt;
    }
    return months;
};

