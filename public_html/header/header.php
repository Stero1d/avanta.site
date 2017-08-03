<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Avanta</title>
    <link rel="stylesheet" href="../js/vendors/jquery.arcticmodal-0.3/jquery.arcticmodal-0.3.css">
    <link rel="stylesheet" href="../css/fonts.css">
    <!--<link rel="stylesheet" href="../css/font-awesome.css">-->
    <link rel="stylesheet" href="../js/vendors/slick-1.6.0/slick/slick.css">
    <link rel="stylesheet" href="../js/vendors/jquery-ui-1.12.1/jquery-ui.css">
    <link rel="stylesheet" href="../js/vendors/bootstrap-3.3.7/css/bootstrap.css">
    <link rel="stylesheet" href="../css/main.css?v=6">
    <!--<link rel="stylesheet" href="../css/960wide-portrait-screen.css?v=6" media="(max-width:1109px)">-->

</head>
<body>
<header>
    <div class="bgw_head">
        <div class="container head">
            <div class="row">
                <div class="col_head">
                    <div class="logo_header"><div class="logo_icon"></div><p class="logo_text">Магазин автотоваров<br>
                        и автозапчастей</p></div>
                </div>
                <div class="col-lg-4 col-md-4 col_head flex">
                    <div class="search flex">
                        <input class="search_text" type="text" placeholder="Поиск по товарам">
                        <button class="btn btn_search">
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col_head flex"">
                <a href="#map" class="map_header flex">
                    <img src="../img/icon_map.png" alt="Pl">
                    <p class="place_text">г.Пермь, ул.Ленина, 34 а,<br>
                        Авторынок на Н. Островского</p>
                </a>
                </div>
                <div class="col-lg-3 col-md-3 col_head flex flex_end" id="col_phone">
                    <a href="tel:+73422999999" class="phone_header flex">
                        <img src="../img/icon_phone.png" alt="Ph">
                        <p class="phone_text">+7 (342) <span> 299-99-99</span></p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div  class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <div class="logo_mobile"></div>
                <div class="mobile_menu_phone">
                    <div class="call_request"></div>
                    <div class=" navbar-toggle"> <!--data-toggle="collapse" data-target="#responsive-menu"-->
                        <span class="sr-only">Открыть навигацию</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>

                </div>
                <div class="clouse_mobile_menu disable"></div>
            </div>
            <div class="collapse navbar-collapse"   id="responsive-menu" >
                <div class="btn btn-catalog dropdown-toggle in flex" data-toggle="dropdown">
                    <div class="icon_responsive_menu"></div><span>Каталог</span></span>
                </div>
                <ul class="dropdown-menu disable">
                    <li><div class="title_dropdown_submenu"><a href="#">Автозвук</a><div class="arrow_choice arrow"></div></div></li>
                    <li class="dropdown-submenu-active ">
                        <div class="title_dropdown_submenu title_dropdown_submenu_active"><a href="#">Автоаксессуары</a><div class="arrow_choice arrow"></div></div>
                        <div class="dropdown-submenu mobile-dropdown-submenu disabled">
                            <div>
                                <img class="img_submenu " src="../img/submenu_img_1.png" alt="Img_menu">
                                <a href="#">Коврики</a>
                                    <div class="arrow_choice_submenu  arrow"></div>
                            </div>
                            <div>
                                <img class="img_submenu " src="../img/submenu_img_2.png" alt="Img_menu">
                                <a href="#">Брелоки</a>
                                <div class="arrow_choice_submenu  arrow"></div>
                            </div>
                            <div>
                                <img class="img_submenu " src="../img/submenu_img_3.png" alt="Img_menu">
                                <a href="#">Зеркала</a>
                                <div class="arrow_choice_submenu  arrow"></div>
                            </div>
                            <div>
                                <img class="img_submenu " src="../img/submenu_img_4.png" alt="Img_menu">
                                <a href="#">Оплетки руля</a>
                                <div class="arrow_choice_submenu  arrow"></div>
                            </div>
                        </div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Автогаджеты </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Автомасла </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Автохимия </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Компрессоры </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Шины </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Диски </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Автозапчасти </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Сумки </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Одежда </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Автокресла </a><div class="arrow_choice arrow"></div></div></li>
                    <li><div class="title_dropdown_submenu"><a href="#">Распродажа </a><div class="arrow_choice arrow"></div></div></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class="element_menu flex"><a href="#">О нас</a></li>
                    <li class="element_menu flex"><a href="#">Оплата и доставка</a></li>
                    <li class="element_menu flex"><a href="#">Установка</a></li>
                    <li class="element_menu flex"><a href="#">Контакты</a></li>
                </ul>
                <div class="cart flex"><p>Корзина</p><div class="icon_cart"></div><input type="text" class="number_purchases" value="0" readonly></div>
            </div>
        </div>
    </div>
</header>