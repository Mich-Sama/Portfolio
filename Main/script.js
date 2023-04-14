jQuery(() =>
{
    $('.navbar-toggler').on('click', function()
    {
        if($('#contact').hasClass('contact'))
            $('#contact').removeClass('contact');
        else
            $('#contact').addClass('contact');

        if($('#profiles').hasClass('d-flex'))
            $('#profiles').removeClass('d-flex');
        else
            $('#profiles').addClass('d-flex');
    });

    $('#webDeveloper').on('click', function()
    {
        if($('#webImages').css('display', 'none'))
            $('#webDeveloper').toggle('explode');

        if($('#webDeveloper').css('display', 'none'))
            $('#webImages').toggle('puff');
    });
    $('#webButton').on('click', function()
    {
        if($('#webDeveloper').css('display', 'none'))
            $('#webImages').toggle('explode');

        if($('#webImages').css('display', 'none'))
            $('#webDeveloper').toggle('puff');
    });

    $('#gameDeveloper').on('click', function()
    {
        if($('#gameImages').css('display', 'none'))
            $('#gameDeveloper').toggle('explode');

        if($('#gameDeveloper').css('display', 'none'))
            $('#gameImages').toggle('puff');
    });
    $('#gameButton').on('click', function()
    {
        if($('#gameDeveloper').css('display', 'none'))
            $('#gameImages').toggle('explode');

        if($('#gameImages').css('display', 'none'))
            $('#gameDeveloper').toggle('puff');
    });

    $(window).on('scroll', function()
    {
        let distanceFromTop = $(this).scrollTop();

        if(distanceFromTop <= 85)
            $('#Portfolio').css('width', '60%');
        else if(distanceFromTop > 85 && distanceFromTop <= 150)
            $('#Portfolio').css('width', '80%');
        else if(distanceFromTop > 150)
            $('#Portfolio').css('width', '100%');
    });
});