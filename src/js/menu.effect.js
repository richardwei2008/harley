$(window).load(function() {
    $(".menuitem-harley").each(function(i) {
        $(this).delay(i*300 - 240).animate({opacity : 1}, 10).animate({top : -36}, 140).animate({top : 0}, 150, function() {
            $(this).children(".menuitem-shadow").fadeIn(20);
        });
    })

    setTimeout(function() {
        $(".scroll-hint").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000);
    }, 1800);

});