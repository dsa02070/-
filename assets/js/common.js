$(function () {
    // mobile menu event
    $('.mobile_btn').click(function () {
        $('.mobile_menu').addClass('on')
        $('body').css('overflow', 'hidden')
    })

    $('.mobile_menu .close').click(function () {
        $('.mobile_menu').removeClass('on');
        $('body').css('overflow', 'visible')
    })

    //search menu event
    $('.search').click(function () {
        $('.search_menu').addClass('on')
        $('body').css('overflow', 'hidden');
    })

    $('.search_menu .close').click(function () {
        $('.search_menu').removeClass('on')
        $('body').css('overflow', 'visible')
    })

    // header fixed event
    $(window).scroll(function () {
        var scTop = $(this).scrollTop()
        if (scTop > 50) {
            $('.hbottom').addClass('fixed')
            $('.htop').css('margin-bottom', '44px')
        } else {
            $('.hbottom').removeClass('fixed')
            $('.htop').css('margin-bottom', '0px')
        }
    })
})