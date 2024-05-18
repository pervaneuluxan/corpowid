//Lang Menu
const langBtn=$('.langMenu__btn');
const langDrp=$('.langMenu__drp');

langBtn.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    $(this).toggleClass('active');
    langDrp.fadeToggle();
})

$('*').on('click',function(e){
    if(!$(e.target).is('.langMenu__drp') && !$(e.target).is('.langMenu__drp *'))
    if(!$(e.target).is('.langMenu__btn') && !$(e.target).is('.langMenu__btn *')){
        langDrp.fadeOut();
       
    }

   });


//Flickty slider
document.addEventListener('DOMContentLoaded', function () {
    var flkty = new Flickity('.mainCarousel',{
        wrapAround: true,
        autoPlay:5000,
        adaptiveHeight: true, 
        fade: true,
        draggable: false 
    }
    );
    var dots = document.querySelectorAll('.mainCarousel-btns .custom-dot');

 
    // Event listeners for custom dots
    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        flkty.select(index);
        $('.custom-dot').removeClass('active');
        $(this).addClass('active');

      });
    });
  });


//OfferModal

const modal=$('.offerModal');
const modalOpen=$('.modalOpen');
const modalClose=$('.offerModal__close');

modalOpen.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    modal.addClass('active');
    $('.offerModal__center').fadeIn();
})

function playVideo() {
    var videoPlayer = document.getElementById('vimeo');
    var playerOrigin = '*'; // For security, restrict this to the domain of your site
    var data = { method: 'play' };

    videoPlayer.contentWindow.postMessage(JSON.stringify(data), playerOrigin);
}

// Video play

const videoPlay=$('.videoBtn1');
const videoLayer=$('.offer.videoLayer');
var video=$('#video')

videoPlay.on('click',function(){
    playVideo();
})

modalClose.on('click',function(){
    $(this).attr('href','javascript:void(0)');
    modal.removeClass('active')
    $('.offerModal__center').fadeOut();
    $('.videoPlayar #video').pause();
})

//Fixed header

const num = 0;

$(window).on('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('sticky');
        $('.banner').addClass('sticky');
        $('.aboutTop__imgBig').addClass('active');
    } else {
        $('.header').removeClass('sticky');
        $('.banner').removeClass('sticky');
        $('.aboutTop__imgBig').removeClass('active');
    }
});

const num2 = 300; 
$(window).on('scroll', function () {
    if ($(window).scrollTop() > num2) {

        $('.aboutTop__imgBig').addClass('active');
    } else {

        $('.aboutTop__imgBig').removeClass('active');
    }
});

//Hmaburger menu

const menuBtn=$('.menu-icon');
const nav=$('nav')
menuBtn.on('click',function(){
    $(this).toggleClass('active');
    nav.toggleClass('active');

    $('body').toggleClass('no-scroll')
})

$('.openWidget').on('click',function(){
    $('.wiuwidgetBox').addClass('active');
})

$('.accordion-item').on('click',function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
})

var fixedBanner=$('.fixedBanner');
var fixedBannerClose=$('.fixedBanner__close');

setTimeout(() => {
    fixedBanner.addClass('active');
}, 3000);


function scrollImage() {
    const container = document.querySelector('.widgetMain__in');
    const scrollImage = document.getElementById('scrollImage');
    const fixedImages = document.querySelectorAll('.fixed-image');

    const containerRect = container.getBoundingClientRect();
    const imageRect = scrollImage.getBoundingClientRect();

    const maxScrollY = imageRect.height - containerRect.height;

    const scrollY = container.scrollTop;

    const imageY = -maxScrollY * (scrollY / (container.scrollHeight - containerRect.height));

    scrollImage.style.top = imageY + 'px';

   
}




$(document).ready(function() {
    var itemKey = 'banner';

    if (localStorage.getItem(itemKey)) {
        $('.fixedBanner').hide();
    } else {
        $('.fixedbanner').show();
    }

   
    $('.fixedBanner__close').on('click', function() {
        $(this).attr('href','javascript:void(0)')
        localStorage.setItem(itemKey, 'stored');
        $('.fixedBanner').removeClass('active');
    });

    var storedTime = localStorage.getItem(itemKey + '_time');
    if (storedTime && (Date.now() - parseInt(storedTime) > 24 * 60 * 60 * 1000)) {
        localStorage.removeItem(itemKey);
        localStorage.removeItem(itemKey + '_time');
        $('.fixedBanner').hide();
    } else if (!storedTime) {
        localStorage.setItem(itemKey + '_time', Date.now());
    }
});



$('.videoBtn2').on('click',function(){
    $('.videoLayer').fadeOut();

    playVideo();
})

$(document).ready(function() {
    // Initialize color picker
    updateColorPreview(0);
  
    // Event listener for hue slider change
    $('#hue-slider').on('input', function() {
      var hue = $(this).val();
      updateColorPreview(hue);
    });
    
    // Function to update color preview
    function updateColorPreview(hue) {
        const colorTop=document.getElementById('colorBox__top');
    const colorMain=$('.colorBox__main .item .color');
      var color = 'hsl(' + hue + ', 100%, 50%)';
      colorTop.style.backgroundColor = color; // Set background color as an example
        colorMain.css({
            'background':color
        })
    }
  });