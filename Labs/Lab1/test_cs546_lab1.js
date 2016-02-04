/* Bradford Smith (bsmith8)
 * CS 546 Lab 1 test_cs546_lab1.js
 * 02/04/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

var obj = require('./cs546_lab1.js');

console.log("Testing Lab 1");
console.log("================================================================================\n");

console.log("retirementAmountIfSavingPerMonth:");
console.log("--------------------------------------------------------------------------------\n");
console.log("30 years until retirement saving $5/mo at 3% interest:");
console.log(obj.retirementAmountIfSavingPerMonth(30, 5, 0.03));
console.log("================================================================================\n");

console.log("investedAmountAfterSomeYears:");
console.log("--------------------------------------------------------------------------------\n");
console.log("30 years invested, $30 initial, at 3% interest:");
console.log(obj.investedAmountAfterSomeYears(30, 30, 0.03));
console.log("================================================================================\n");

console.log("monthsToPayOffLoan:");
console.log("--------------------------------------------------------------------------------\n");
console.log("$1000/mo on a $25,000 loan at 8% interest:");
console.log(obj.monthsToPayOffLoan(1000, 25000, 0.08));
console.log("================================================================================\n");
