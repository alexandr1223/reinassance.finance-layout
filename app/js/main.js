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
    calc();

    function firstScreenSlider() {
        console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth < 767) {
            $('.first__nums').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                
                prevArrow: "<img src='../images/svg/arrow.svg' class='prev' alt=''>",
                nextArrow: "<img src='../images/svg/arrow.svg' class='next' alt=''>",
            });
        } 
    }
    firstScreenSlider();
});