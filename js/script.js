$(document).ready(function() {    
    $(".g-img").attr("onclick", "zoomImage(this)");
})

window.onload = function() {
    $('h1').add('.hint').addClass('animate__animated animate__fadeInUp');
    $('.photo-gallery').addClass('animate__animated animate__fadeIn');

    $('body').prepend('<div class="showed-photo-full"></div>');
    $('.showed-photo-full').append('<img class="showed-photo">', '<p class="btn-exit">x</p>')

    $('.preloader').addClass('animate__animated animate__zoomOutLeft').one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $(this).removeClass('animate__zoomOutLeft').css('display', 'none');
    });
}

function zoomImage(el) {
    if (el.naturalWidth > el.naturalHeight) {
        $(".showed-photo").addClass('showed-photo-width');
        if ($(".showed-photo").hasClass('showed-photo-height'))
            $(".showed-photo").removeClass('showed-photo-height');
    }
    else {
        $(".showed-photo").addClass('showed-photo-height');
        if ($(".showed-photo").hasClass('showed-photo-width'))
            $(".showed-photo").removeClass('showed-photo-width');
    }

    $(".showed-photo").attr('src', el.src).attr('alt', el.alt);
    $(".showed-photo-full").css('display', 'flex').addClass('animate__animated animate__fadeIn').one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $(".showed-photo-full").removeClass('animate__fadeIn');
    });

    $(".btn-exit").click(function(){
        $(".showed-photo-full").addClass('animate__fadeOut').one('animationend webkitAnimationEnd oAnimationEnd', function () {
            $(this).removeClass('animate__fadeOut').css('display', 'none');
        });
    })
}