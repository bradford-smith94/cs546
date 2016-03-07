/* Bradford Smith (bsmith8)
 * CS 546 Lab 5 validators.js
 * 03/06/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

//IIFE being passed jQuery global variable
(function ($) {
    //store forms and their error-message paragraphs
    var form1 = $("#ret-form");
    var err1 = $("#ret-error-message");
    var form2 = $("#inv-form");
    var err2 = $("#inv-error-message");
    var form3 = $("#loa-form");
    var err3 = $("#loa-error-message");

    //handle form submission, use e.preventDefault() to prevent submission and
    //err1.text("Text") to update the text of the error message
    form1.submit(function (e) {
        form1.find("input").each(function(index, child) {
            if (child.type != "submit") {
                var value = child.value;
                if (value === "") {
                    e.preventDefault();
                    err1.text("All inputs are required!");
                    err1.css("color", "white");
                    err1.css("background-color", "red");
                }
                else if (value < 0) {
                    e.preventDefault();
                    err1.text("Negative inputs are invalid!");
                    err1.css("color", "white");
                    err1.css("background-color", "red");
                }
            }
        });
    });

    //handle form submission, use e.preventDefault() to prevent submission and
    //err2.text("Text") to update the text of the error message
    form2.submit(function (e) {
        form2.find("input").each(function(index, child) {
            if (child.type != "submit") {
                var value = child.value;
                if (value === "") {
                    e.preventDefault();
                    err2.text("All inputs are required!");
                    err2.css("color", "white");
                    err2.css("background-color", "red");
                }
                else if (value < 0) {
                    e.preventDefault();
                    err2.text("Negative inputs are invalid!");
                    err2.css("color", "white");
                    err2.css("background-color", "red");
                }
            }
        });
    });

    //handle form submission, use e.preventDefault() to prevent submission and
    //err3.text("Text") to update the text of the error message
    form3.submit(function (e) {
        form3.find("input").each(function(index, child) {
            if (child.type != "submit") {
                var value = child.value;
                if (value === "") {
                    e.preventDefault();
                    err3.text("All inputs are required!");
                    err3.css("color", "white");
                    err3.css("background-color", "red");
                }
                else if (value < 0) {
                    e.preventDefault();
                    err3.text("Negative inputs are invalid!");
                    err3.css("color", "white");
                    err3.css("background-color", "red");
                }
            }
        });
    });
})(jQuery);
