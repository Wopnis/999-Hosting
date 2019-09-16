$(document).ready(function() {

    /* scroll 
    ============================================*/

    $('.js-get-started').on('click', function(e){
        e.preventDefault();
        let plansOffset = $('#js-plans').offset().top;
        
        $('html,body').animate({
            scrollTop: plansOffset
        }, 1000);
    });

    $('#learnMore').on('click', function(e){
        e.preventDefault();
        let featTop = $('#js-features').offset().top;
        $('html,body').animate({
            scrollTop: featTop - 140
        },1000); 
    });


    /* fixed header
    ============================================*/

    let headerH = $('#js-header').innerHeight(),
        navH = $('#js-nav-container').height();
        
    $(document).on('scroll', function(){
        let documentScroll = $(this).scrollTop();
        if (documentScroll > headerH) {
            $('#js-nav-container').addClass('fixed');
            // $('#js-header').addClass('nav-fixed');
            $('#js-nav-container').css({
                paddingTop: navH 
            });
        }else{
            $('#js-nav-container').removeClass('fixed');
            // $('#js-header').removeClass('nav-fixed');
            $('#js-nav-container').removeAttr('style');
        }  
    });

    /* scroll to blockes
    ============================================*/

    $('#js-nav a').on('click', function(e){
        e.preventDefault();
        let currentBlock = $(this).attr('href'),
            currentBlockOffset = $(currentBlock).offset().top;

        $('html,body').animate({
            scrollTop: currentBlockOffset - 30
        }, 1000);
    });


    /* modals
    ============================================*/
    $('.js-show-modal').on('click', function(e){
        e.preventDefault();
        let currentModal = $(this).attr('href');
        $(currentModal + ', #js-overlay').fadeIn(500);
        $('body').addClass('open-modal');
    });
    
    $('#js-overlay, .js-modal-close').on('click', function(e){
        e.preventDefault();
        $('.js-modal, #js-overlay').fadeOut(100);
        $('body').removeClass('open-modal');
    });

    /* faq
    ============================================*/
  
    // $('.js-faq-title').on('click', function(e){
    //     e.preventDefault();
    //     let $this = $(this);

    //     if(!$this.hasClass('active')){
    //         $('.js-faq-content').slideUp();
    //         $('.js-faq-title').removeClass('active');
    //     }

    //     $this.toggleClass('active');
    //     $this.next().slideToggle('fast');
    // });



    $('.js-faq-title').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            answerId = $this.attr('href');

        if (!$this.hasClass('active')) {
            $('.js-faq-content').slideUp();
            $('.js-faq-title').removeClass('active');
        }

        $this.toggleClass('active');
        $(answerId).slideToggle('fast');
    });

        /* popup
        ============================================*/

        $('.js-popup-hover').hover(function(){

                let $this = $(this),
                    popupId = $this.attr('href');
            // console.log(popupId); 

                    $(popupId).fadeIn();
        }, function(){

            $('.js-popup').fadeOut();

        });


        /* company blog text toggle
        ============================================*/


        $('.js-read-more').on('click', function(e){
            e.preventDefault();
            let $this = $(this),
                text = $this.text();
                
            if (text === 'Read More') {
                $this.text('Hide');
            }else {
                $this.text('Read More');
            }
            $(this).prev('.js-blog-content').toggleClass('hidden-slide');
        });



        /* slick.js   https://kenwheeler.github.io/slick/
                ============================================*/

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    

/* live chat
 ============================================*/

    $('#chat-start').on('click', function (e) {
        e.preventDefault();
        // Запуск чата. Передаём ему элемент в котором надо создать окно чата.
        $('#html-chat').fadeIn(500);
    });

    $('.btn-chat').on('click', function (e){
        e.preventDefault();
        $('#html-chat').fadeOut(100);
    });


    
/* wow.js  https://github.com/graingert/WOW.git
 ============================================*/

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,      // reset animation on end (default is true)
        }
    );
    wow.init();

/* counter Up     https://github.com/bfintal/Counter-Up.git
============================================*/

    $('.js-counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.js-counter-comment').counterUp({
        delay: 20,
        time: 3000
    });


/* Typed js     https://github.com/mattboldt/typed.js.git
============================================*/

  

    var options = {
        strings: ["", "Couple of words about this section"],
        typeSpeed: 120,
        startDelay: 60,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
    };

    var typed = new Typed(".js-typed", options);

/* iCheck js    https://github.com/fronteed/icheck.git
============================================*/

    $('input').iCheck();














});


// console.log()