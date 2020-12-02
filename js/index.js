function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

ativaScrollSuave('a[href*=painelSobre]');
ativaScrollSuave('a[href*=painelPalestrantes]');
ativaScrollSuave('a[href*=painelInscricao]');