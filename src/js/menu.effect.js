(function() {
    $(".menuitem-harley").each(function(i) {
        $(this).delay(i*300 - 100).animate({top : -12}, 200).animate({top : 0}, 100);
    })
})();