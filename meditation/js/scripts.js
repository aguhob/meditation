$( document ).ready( function () {

    $("#chakras dt").click( function (e) {

        console.log($(this).next().html() );
        if ( $(this).next().css("display") == "none") { 
            $(this).next().fadeIn(2000).show();
        } else {
            $(this).next().css("display", "none");
        }
    });
});

// this code makes all of the items fade in one at a time

