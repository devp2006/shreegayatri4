$(document).ready(function(){
	$(window).scroll(function(){

		if($(window).scrollTop() > 60)
		{
			$(".top_arow").fadeIn();
			$(".top").addClass("clr_black");
		}
		else
		{
			$(".top_arow").fadeOut();
			$(".top").removeClass("clr_black");
		}
	});

	//////////////////////////////////////
	
	$(".top_arow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});
	
	

$( ".sb-search-submit, .sb-icon-search" ).click(function() {
  $(".ser_temp").toggleClass( "ser_temp_w" );
});


$( "body" ).click(function() {
  $(".ser_temp").removeClass( "ser_temp_w" );
});
	
	
	
    resizeContent();
    $(window).resize(function() {
        resizeContent();
    });
	
	function resizeContent() {
    $height = $(window).height();
    $('body .background-video-equel').height($height);
	}
	
	
});










var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
