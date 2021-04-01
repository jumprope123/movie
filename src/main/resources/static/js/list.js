$(document).ready(function () {

    $.ajax({
        method: "GET",
        url: "https://yts.mx/api/v2/list_movies.json?sort=rating&limit=20",
        data: { sort: "rating", limit: "20" }
    })
        .done(function( msg ) {
            for(var i = 0; i < msg.data.movies.length; i++) {
                $('#list').append(
                    '<div class="row mt-1" style="border: 1px solid black;">'+
                    '<div class="col-6">'+
                    '<img src="' + msg.data.movies[i].small_cover_image + '"/><span>' +
                    msg.data.movies[i].title + '</span></div></div>');

            }
        });

})
