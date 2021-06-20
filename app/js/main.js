$(function () {

    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
        }, 'xml');
    }); 

    function calc(){
        let currency = document.querySelector('.calc__currency select'),
        sumInput = document.querySelector('.calc__input input'),
        plan = document.querySelector('.calc__plan select'),
        line = document.querySelector('.calc__lineItem'),
        hour = document.querySelector('.calc__period--hour'),
        day = document.querySelector('.calc__period--day'),
        week = document.querySelector('.calc__period--week'),
        month = document.querySelector('.calc__period--month'),
        percent = document.querySelector('.calc__percentCount span');

        function takeSumValue() {
            let sum = (currency.value * sumInput.value * plan.value) / 100 * line.value;
            
            hour.textContent = sum.toFixed(8);
            day.textContent = (sum*24).toFixed(8);
            week.textContent = (sum*24*7).toFixed(8);
            month.textContent = (sum*24*30).toFixed(8);
        }

        if (document.querySelector('.calc')) {
            sumInput.addEventListener('input', (e) => {
                takeSumValue();
            })
            currency.addEventListener('change', (e) => {
                takeSumValue();
            })
            plan.addEventListener('change', (e) => {
                takeSumValue();
            })
            line.addEventListener('input', () => {
                takeSumValue();
                percent.textContent = line.value;
            })
        }
    }
    calc();

    function firstScreenSlider() {
        console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth < 767) {
            $('.first__nums').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: "<img src='../img/icons/mobile-m/first-left.png' class='prev' alt=''>",
                nextArrow: "<img src='../img/icons/mobile-m/first-right.png' class='next' alt=''>",
            });
            $('.min-investment__block--mobile').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: "<img src='../img/icons/mobile-m/horizontal-left.png' class='prev' alt=''>",
                nextArrow: "<img src='../img/icons/mobile-m/horizontal-right.png' class='next' alt=''>",
            });
        } 
    }
    firstScreenSlider();

    function menu(menuBtn, block, close) {
        if (document.querySelector(menuBtn)) {
            document.querySelector(menuBtn).addEventListener('click', () => {
                document.querySelector(block).style.cssText = 'top: 0';
                document.body.style.overflow = "hidden"
            })
            document.querySelector('.login__subtitle span').addEventListener('click', () => {
                document.querySelector('.registration').style.cssText = 'top: 0%';
                setTimeout(function () {
                    document.querySelector('.login').style.cssText = 'top: -150%';
                }, 700)
            })            
            document.querySelector(close).addEventListener('click', () => {
                document.body.style.overflow = "auto"
                document.querySelector(block).style.cssText = 'top: -150%';
            })
        }
    } 
    menu('.header__menu', '.menu', '.menu__close');
    menu('.header__support', '.support', '.support__close');
    menu('.header__login', '.login', '.login__close');
    menu('.registration__close', '.registration', '.registration__close');
    menu('.question__img', '.support', '.support__close')

    function menuMobile(menuBtn, block, close) {
        if (document.querySelector(menuBtn)) {
            document.querySelector(menuBtn).addEventListener('click', () => {
                document.querySelector(block).style.cssText = 'top: 0';
            })
            document.querySelector('.menu__support').addEventListener('click', () => {
                document.querySelector('.support').style.cssText = 'top: 0%';
                setTimeout(function () {
                    document.querySelector('.menu').style.cssText = 'top: -150%';
                }, 700)
            })            
            document.querySelector(close).addEventListener('click', () => {
                console.log(close)
                document.querySelector(block).style.cssText = 'top: -150%';
            })
        }
    }
    menuMobile();
    menuMobile('.menu__support', '.support', '.support__close')
    
});