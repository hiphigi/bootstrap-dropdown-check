
// something else    
$(document).on('click', 'ul.dropdown-menu.stay li a', function (e) {
        // stop the link href action, then stop the menu from closing if it isn't the Close Menu (.close) link
        e.preventDefault();

        if ( $(this).attr('id') == 'navbar-login-submit' )
            AttemptLoginNav();

        if ( $(this).hasClass('dd-close') )
            return;

        e.stopPropagation();
        e.stopImmediatePropagation();
        $(this).parents('ul.dropdown-menu').toggleClass('open');

        var isCheckMenu = ($(this).parents('ul.dropdown-menu').hasClass('check'))?true:false;

        // now handle the click itself
        if ( isCheckMenu ) {
            if ( $(this).parents('li').hasClass('checked') ) {
                $(this).parents('li').removeClass('checked');
            } else {
                $(this).parents('li').addClass('checked');
            }
        }
    });
