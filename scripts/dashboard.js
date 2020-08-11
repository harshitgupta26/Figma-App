$(document).ready(function() {
    $('.dash-sub-links').hide();
    $('.dash-link').click(function(e) {
        $('.dash-sub-links').hide(200);
        var link = $(this).next();
        link.show(200);
        link.children().first().addClass('sub-li-active');
        $('.dash-link').removeClass('li-active');
        $(this).addClass('li-active');
    });
    $('.dash-sub-links li').click(function() {
        $('.dash-sub-links li').removeClass('sub-li-active');
        $(this).addClass('sub-li-active');
    });
    
})