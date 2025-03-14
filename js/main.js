(function($) {
  $.fn.scrollingTo = function(opts) {
    var defaults = {
      animationTime: 1000,
      easing: '',
      callbackBeforeTransition: function() {},
      callbackAfterTransition: function() {}
    };

    var config = $.extend({}, defaults, opts);

    $(this).click(function(e) {
      var eventVal = e;
      e.preventDefault();

      var $section = $(document).find($(this).data('section'));
      if ($section.length < 1) {
        return false;
      };

      if ($('html, body').is(':animated')) {
        $('html, body').stop(true, true);
      };

      var scrollPos = $section.offset().top;

      if ($(window).scrollTop() == scrollPos) {
        return false;
      };

      config.callbackBeforeTransition(eventVal, $section);

      $('html, body').animate({
        'scrollTop': (scrollPos + 'px')
      }, config.animationTime, config.easing, function() {
        config.callbackAfterTransition(eventVal, $section);
      });
    });
  };

  /* ========================================================================= */
  /*   Contact Form Validating
  /* ========================================================================= */

  $('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 4
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: false,
      },
      message: {
        required: true,
      },
    },
    messages: {
      user_name: {
        required: "Please enter your name",
        minlength: "Your name must consist of at least 2 characters"
      },
      email: {
        required: "Please enter your email address",
      },
      message: {
        required: "Please enter your message",
        minlength: "Your message must consist of at least 2 characters"
      },
    },
    submitHandler: function send_mail() {
      window.location.href = 'mailto:villapandovspcs@gmail.com?subject=' + encodeURI(document.getElementById("subject_field").value) +
        '&body=' + encodeURI(document.getElementById("message_field").value)
      return false
    }
    /* submitHandler: function(form) {
        $(form).ajaxSubmit( {
            type:"POST", data: $(form).serialize(), url:"sendmail.php", success: function() {
                $('#contact-form #success').fadeIn();
            }
            , error: function() {
                $('#contact-form #error').fadeIn();
            }
        }
        );
    } */
  });

}(jQuery));

/*
    function send_mail() {
      window.location.href = 'mailto:villapandovspcs@gmail.com?subject=' + encodeURI(document.getElementById("subject_field").value) +
        '&body=' + encodeURI(document.getElementById("message_field").value)
      return false */


jQuery(document).ready(function() {
  "use strict";
  new WOW().init();


  (function() {
    jQuery('.smooth-scroll').scrollingTo();
  }());

});




$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar-brand a").css("color", "#fff");
      $("#top-bar").removeClass("animated-header");
    } else {
      $(".navbar-brand a").css("color", "inherit");
      $("#top-bar").addClass("animated-header");
    }
  });

  $("#clients-logo").owlCarousel({

    itemsCustom: false,
    pagination: false,
    items: 5,
    autoplay: true,

  });


});



// fancybox
$(".fancybox").fancybox({
  padding: 0,

  openEffect: 'elastic',
  openSpeed: 450,

  closeEffect: 'elastic',
  closeSpeed: 350,

  closeClick: true,
  helpers: {
    title: {
      type: 'inside'
    },
    overlay: {
      css: {
        'background': 'rgba(0,0,0,0.8)'
      }
    }
  }
});