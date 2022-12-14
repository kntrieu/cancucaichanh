function scrollToAnchor(aid) {
    const destination = $(aid);
    $('html,body').animate({
        scrollTop: destination.offset().top - 50
    }, 'slow');
}