
$(document).ready(function () {
/**Нажатие на элемент навигации**/
$('.element_menu').click(function () {
    var $elMenu = $(this);


    if ($('.element_menu').hasClass('active_element_menu')) {
        $('.element_menu').removeClass('active_element_menu');
    }
    else
        $('.element_menu').removeClass('active_element_menu');
    $elMenu.addClass('active_element_menu');
});
/**Нажатие на кнопку каталога в навигации**/
$('.btn-catalog').click(function () {
    var $btnCat = $(".dropdown-menu");


    if ($btnCat.hasClass('enable')) {
        $btnCat.removeClass('enable');
        $btnCat.addClass('disable');
    }
    else
    {$btnCat.removeClass('disable');
        $btnCat.addClass('enable');}

});
/**Нажатие на страницу навигации**/
$('.page_number').click(function () {
    var $elMenu = $(this);


    if ($('.page_number').hasClass('page_block_navigation_active')) {
        $('.page_number').removeClass('page_block_navigation_active');
    }
    else
        $('.page_number').removeClass('page_block_navigation_active');
    $elMenu.addClass('page_block_navigation_active');
});
/**Слайдер цены фильтра**/
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100000,
        values: [ 300, 99000 ],
        slide: function( event, ui ) {
            $( "#amount_min" ).val( ui.values[ 0 ]);
            $( "#amount_max" ).val( ui.values[ 1 ]);
            $( ".amount_min" ).val( ui.values[ 0 ]);
            $( ".amount_max" ).val( ui.values[ 1 ]);
        }
    });
    $( "#amount_min" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount_max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
    $( ".amount_min" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( ".amount_max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
} );
/**Скрыть блок уточнить цену**/
$('.block_pricing').click(function () {
    var $this = $(this);
    var $pricingClick = $(".pricing_click", $this);
    var $pricingHidden = $(".block_pricing_hidden", $this);

    $pricingClick.addClass('hidden_pricing');
    $pricingHidden.addClass('visible_pricing');

});
/**Выбор изображения продукта**/
$('.product_block_small_img').click(function () {
    var $prSmallImg = $(this);


    if ($('.product_block_small_img').hasClass('active_product_small_img')) {
        $('.product_block_small_img').removeClass('active_product_small_img');
    }
    else
        $('.product_block_small_img').removeClass('active_product_small_img');
    $prSmallImg.addClass('active_product_small_img');
});

$('.navbar-toggle').click(function () {
    var $clouseMenu = $(".clouse_mobile_menu");
    var $DisableMenu = $(".navbar-collapse");
        $clouseMenu.addClass('enable');
        $clouseMenu.removeClass('disable');
        $DisableMenu.removeClass('disable');
        $DisableMenu.addClass('enable');
        $(".dropdown-menu").removeClass('disable');

});

$('.clouse_mobile_menu').click(function () {
    var $clouseMenu = $(".clouse_mobile_menu");
    var $DisableMenu = $(".navbar-collapse");
        $clouseMenu.removeClass('enable');
        $clouseMenu.addClass('disable');
        $DisableMenu.addClass('disable');

    });

$('.title_dropdown_submenu').click(function () {
    var $this = $(this);
    var $thisElMenu =  $(this);
    var $elementMenu = $('.title_dropdown_submenu');
    var $elementMenuOpen = $('.dropdown-menu li div', $this);

    if ($elementMenu.hasClass('dropdown-menu-border-active')) {
        $elementMenu.removeClass('dropdown-menu-border-active');
        $elementMenuOpen.removeClass('arrow_choice');
        $thisElMenu.addClass('dropdown-menu-border-active');
        $elementMenuOpen.addClass('arrow_choice_open');
    }
    else
        $elementMenu.removeClass('dropdown-menu-border-active');
        $elementMenuOpen.removeClass('arrow_choice');
        $thisElMenu.addClass('dropdown-menu-border-active');
        $elementMenuOpen.addClass('arrow_choice_open');

});

    $('.dropdown-menu > li').click(function () {
        var $this = $(this);
        var $elementMenuOpen = $(".arrow", $this);

        if ($elementMenuOpen.hasClass('arrow_choice')) {
            $elementMenuOpen.removeClass('arrow_choice');
            $elementMenuOpen.addClass('arrow_choice_open');
        }
        else
            {$elementMenuOpen.removeClass('arrow_choice_open');
             $elementMenuOpen.addClass('arrow_choice');
            }

    });

    $('.dropdown-menu > li').click(function () {
        var $this = $(this);
        var $elementMenuOpenClouse = $(".dropdown-submenu", $this);

        if ($elementMenuOpenClouse.hasClass('disabled')) {
            $elementMenuOpenClouse.removeClass('disabled');
            $elementMenuOpenClouse.addClass('enable');
        }
        else
            {$elementMenuOpenClouse.removeClass('enable');
             $elementMenuOpenClouse.addClass('disabled');
        }

    });


    $('.dropdown-menu > li').hover(function() {
        var $this = $(this);
        if($('.arrow_choice', $this ).hasClass('visible')){

        }
        else{ $('.arrow_choice', $this ).addClass('visible');}
    });

    $('.item').click(function () {
        var $elSlick = $(this);


        if ($('.slick-slide').hasClass('visible_slider')) {
            $('.slick-slide').removeClass('visible_slider');
            $elSlick.addClass('visible_slider');
        }
        else
            $('.slick-slide').removeClass('visible_slider');
        $elSlick.addClass('visible_slider');
    });

    $('.product_block_small_img').click(function () {
        var $self = $(this);
        var $section = $self.closest('.product_block_big_img');
        var bgwId = $self.attr('data-bgw-id');
        var selector = '.product_block_big_img_passive[data-bgw-id='+bgwId+']';
        var $bgw = $(".product_block_big_img").find(selector);
        if ($bgw.hasClass('product_block_big_img_active')) {
            return;
        }
        var $activeBgw = $('.product_block_big_img_active');
        $activeBgw.removeClass('product_block_big_img_active');
        $bgw.addClass('product_block_big_img_active');
    });
/**Слайдер, можно включить вместо простого банера**/
    $('.aautoplay_banner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
    });
    $('.slide_brands').slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }

            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }

        ]
    })

    /*маска телефона*/
    $(".phone_field").mask("+7 (999) 999-99-99");
    $(".phone_field_pricing").mask("+7 (999) 999-99-99");

    /*плавная прокрутка*/
    /*$('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 40;
        $('html, body').stop().animate( { scrollTop: destination }, 1100 );
        return false;
    });*/

    //модалка заказать звонок
    $('.js-recall').click(function () {
        $('.js-recall-form').arcticmodal();
        return false;
    });
    //обработка отправки данных с формы
    $('form').on('submit', sendEmail);

    //отправка данных на сервер
    function sendEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;

        var formAction = $form.attr('data-form-action') || 'Неизвесная фоома';
        var formActionId = $form.attr('data-form-action-id');

        var $nameInput = $form.find('input[data-name="name"]');
        var $phoneInput = $form.find('input[data-name="phone"]');
        var $emailInput = $form.find('input[data-name="email"]');
        var $messageInput = $form.find('textarea[data-name="message"]');

        var valName = $nameInput.length > 0 ? $nameInput.val() : '';
        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valEmail = $emailInput.length > 0 ? $emailInput.val() : '';
        var valMessage = $messageInput.length > 0 ? $messageInput.val() : '';

        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($emailInput.val() && !pattern.test(valEmail)){
            $emailInput.val('');
            $emailInput.attr("placeholder", "Пример test@test.ru");
            $emailInput.addClass('invalid_text_field');
            hasError = true;
        }
        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }
        if (valName == '') {
            $nameInput.addClass('invalid_text_field');
            hasError = true;
        }
        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);

        if (hasError) {
            return false;
        }
        var obj = {
            phone: valPhone,
            name: valName,
            mail: valEmail,
            message: valMessage,
            formAction: formAction
        };
        $.ajax({
            type: "POST",
            url: "mailpost.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                //счетчик яндекса

                setTimeout(function() {
                    $.arcticmodal('close');
                    $nameInput.val("");
                    $phoneInput.val("");
                    $emailInput.val("");
                    $messageInput.val("");
                }, 1000);
            }
        });
    }

});


