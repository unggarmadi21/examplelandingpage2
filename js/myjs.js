// event pada saat di klik
$('.page-scroll').on('click', function (e) {

    /// ambil isi href
    var hrefTarget = $(this).attr('href');
    // tangkap isi elemen yg bersangkutan
    var elementHref = $(hrefTarget);

    // console.log(elementHref.offset().top);

    // console.log($('body').scrollTop());

    $('body').animate({
        scrollTop: elementHref.offset().top - 50
    }, 1250, 'swing');

    // jquery easing selain linear dan swing


    e.preventDefault();

});