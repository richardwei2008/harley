$(window).load(function() {
    $(".menuitem-harley").each(function(i) {
        $(this).delay(i*300 - 240).animate({top : -36}, 150).animate({top : 0}, 150, function() {
            $(this).children(".menuitem-shadow").fadeIn(20);
        });
    })

});