$(document).ready();
$("#imageHolder").vegas({
    
    cover : true,
    
    slides: [
        { src: "img/images1.jpg" },
        { src: "img/images2.jpg" },
        { src: "img/images3.jpg" },
        { src: "img/images4.jpg" }
    ]
});
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
