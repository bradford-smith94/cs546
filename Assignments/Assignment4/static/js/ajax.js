/* Bradford Smith (bsmith8)
 * CS 546 Assignment 4 ajax.js
 * 05/08/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

(function($) {
    var addMovieForm = $("#add-movie-form"),
        movieTitle = $("#add-movie-title"),
        movieRating = $("#add-movie-rating");

    addMovieForm.submit(function(event) {
        event.preventDefault();
        console.log("Click");

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
                console.log("Things happened");
                //TODO: something with responseMessage
            });
        }
    });
})(window.jQuery);
