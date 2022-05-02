$(function(){

    $('.nav-link').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

})