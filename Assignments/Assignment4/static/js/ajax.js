/* Bradford Smith (bsmith8)
 * CS 546 Assignment 4 ajax.js
 * 05/09/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

(function($) {
    var addMovieForm = $("#add-movie-form"),
        movieTitle = $("#add-movie-title"),
        movieRating = $("#add-movie-rating");

    //handler for all link clicks
    $("a").click(function(event) {
        event.preventDefault();

        var linkHref = $(this).attr("href");

        if (linkHref === "#all") {
            //reload all movies
            //TODO:
        }
        else if (linkHref === "#pop") {
            //reload most popular movies
            //TODO:
        }
    });

    //handler for all button clicks
    $("button").click(function() {
        var btnClass = $(this).attr("class");
        var btnId = $(this).attr("id");
        var movId = btnId.substring(btnId.indexOf("_") + 1);

        if (btnClass === "increment") {
            //it's an increment button
            //TODO:
        }
        else if (btnClass === "decrement") {
            //it's a decrement button
            //TODO:
        }
        else if (btnClass === "delete") {
            //it's a delete button
            //TODO:
        }
    });

    //handler for form submission
    addMovieForm.submit(function(event) {
        event.preventDefault();

        var newTitle = movieTitle.val();
        var newRating = movieRating.val();

        //only proceed if we have the required elements
        if (newTitle && newRating) {
            var requestConfig = {
                method: "POST",
                url: "/api/movies",
                contentType: "application/json",
                data: JSON.stringify({
                    title: newTitle,
                    rating: newRating
                })
            };

            $.ajax(requestConfig).then(function(responseMessage) {
                //trigger a page reload
                window.location.reload();
            });
        }
    });
})(window.jQuery);
