$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('.text-column').offset();
        $('.info').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
            //find new/changing description
                var newTitle = $(this).find('.description > h2:first').text();
                //p
                var newP = $(this).find('.description > p:first').text();

              //find old description
                var oldTitle = $( ".text-column > h2:first").html();
                //p
                var oldP = $( ".text-column > p:first").html();

              //replace old with new
                $('.text-column > h2:first').html(newTitle);
                //p
                $('.text-column > p:first').html(newP);

            // animation
                // if(newDescr !== oldDescr) {
                //     $( ".text-column" ).css('opacity', 0.4).animate({ 'opacity': '1',}, 200);
                // return;
                // }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
});
