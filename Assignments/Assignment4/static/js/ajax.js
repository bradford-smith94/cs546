/* Bradford Smith (bsmith8)
 * CS 546 Assignment 4 ajax.js
 * 05/09/2016
 * "I pledge my honor that I have abided by the Stevens Honor System."
 */

(function($) {
    var addMovieForm = $("#add-movie-form"),
        movieTitle = $("#add-movie-title"),
        movieRating = $("#add-movie-rating");

    //function to add a new movie element to the page
    function appendNewMovie(m) {
        var sec = document.createElement("section");
        sec.setAttribute("class", "movie-listing");
        sec.setAttribute("id", "listing_" + m._id);

        var h = document.createElement("h3");
        h.appendChild(document.createTextNode(m.title));
        h.setAttribute("id", "title_" + m._id);
        sec.appendChild(h);

        var par = document.createElement("p");
        par.appendChild(document.createTextNode("Rating: " + m.rating));
        par.setAttribute("id", "rating_" + m._id);
        sec.appendChild(par);

        var inc = document.createElement("button");
        inc.setAttribute("type", "button");
        inc.setAttribute("class", "increment");
        inc.setAttribute("id", "inc_" + m._id);
        inc.appendChild(document.createTextNode("Increase Rating"));
        sec.appendChild(inc);

        var dec = document.createElement("button");
        dec.setAttribute("type", "button");
        dec.setAttribute("class", "decrement");
        dec.setAttribute("id", "dec_" + m._id);
        dec.appendChild(document.createTextNode("Decrease Rating"));
        sec.appendChild(dec);

        var del = document.createElement("button");
        del.setAttribute("type", "button");
        del.setAttribute("class", "delete");
        del.setAttribute("id", "del_" + m._id);
        del.appendChild(document.createTextNode("Delete"));
        sec.appendChild(del);

        $(".movies").append(sec);
    };

    //handler for all link clicks
    $("a").click(function(event) {
        event.preventDefault();

        var linkHref = $(this).attr("href");

        if (linkHref === "#all") {
            //reload all movies
            var requestConfig = {
                method: "GET",
                url: "/api/movies/all",
                contentType: "application/json"
            };

            $.ajax(requestConfig).then(function(movies) {
                $(".movies").empty();
                movies.forEach(function (m) {
                    appendNewMovie(m);
                });
            });
        }
        else if (linkHref === "#pop") {
            //reload most popular movies
            var requestConfig = {
                method: "GET",
                url: "/api/movies/best",
                contentType: "application/json"
            };

            $.ajax(requestConfig).then(function(movies) {
                $(".movies").empty();
                movies.forEach(function (m) {
                    appendNewMovie(m);
                });
            });
        }
    });

    //handler for all button clicks
    $(document).on("click", ".increment, .decrement, .delete", function() {
        var btnClass = $(this).attr("class");
        var btnId = $(this).attr("id");
        var movId = btnId.substring(btnId.indexOf("_") + 1);
        var movTitle = $("#title_" + movId).text();
        var movRating = parseFloat($("#rating_" + movId).text().replace(/[^0-9\.]/g, ''));

        if (btnClass === "increment") {
            //it's an increment button
            if (movRating < 5) {
                var newRating = (movRating + 0.1).toFixed(1);

                var requestConfig = {
                    method: "PUT",
                    url: "/api/movies/" + movId,
                    contentType: "application/json",
                    data: JSON.stringify({
                        title: movTitle,
                        rating: parseFloat(newRating)
                    })
                };

                //update rating in database
                $.ajax(requestConfig).then(function(responseMessage) {
                    //then update rating text
                    $("#rating_" + movId).text("Rating: " + newRating);
                });
            }
        }
        else if (btnClass === "decrement") {
            //it's a decrement button
            if (movRating > 0) {
                var newRating = (movRating - 0.1).toFixed(1);

                var requestConfig = {
                    method: "PUT",
                    url: "/api/movies/" + movId,
                    contentType: "application/json",
                    data: JSON.stringify({
                        title: movTitle,
                        rating: parseFloat(newRating)
                    })
                };

                //update rating in database
                $.ajax(requestConfig).then(function(responseMessage) {
                    //then update rating text
                    $("#rating_" + movId).text("Rating: " + newRating);
                });
            }
        }
        else if (btnClass === "delete") {
            //it's a delete button

            //if we have the movie id
            if (movId) {
                var requestConfig = {
                    method: "DELETE",
                    url: "/api/movies/" + movId,
                    contentType: "application/json"
                };

                //delete it in the database
                $.ajax(requestConfig).then(function(reponseMessage) {
                    //then remove it from the page
                    $(".movie-listing").remove("#listing_" + movId);
                });
            }
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
                    rating: parseFloat(newRating)
                })
            };

            //create a new movie
            $.ajax(requestConfig).then(function(responseMessage) {
                //then reset the form
                $("#add-movie-form")[0].reset();

                //and append a new movie to the page
                appendNewMovie(responseMessage);
            });
        }
    });
})(window.jQuery);
