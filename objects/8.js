//Top:
jQuery(document).ready(function($) {
	jQuery('#to_top').click(function() {
		jQuery('body,html').animate({
			scrollTop: 0
		},
		800);
	});
	
	var backtop=function(){
	Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop)>245?jQuery('#to_top').fadeIn(300):jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function(){
		backtop();
	})
	$(window).scroll(function(){
		backtop();
	})
	
});
	jQuery(document).ready(function($) {		
	
		animatedcollapse.addDiv('search', 'fade=1,speed=200,group=mobile,hide=1')
		animatedcollapse.addDiv('mobile_menu', 'fade=1,speed=200,group=mobile,hide=1')
		animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
			//$: Access to jQuery
			//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
			//state: "block" or "none", depending on state
		}		
		animatedcollapse.init()
	});
	
	jQuery(document).ready(function($) {
	$(window).scroll(function() {
		});	 
		jQuery('#to_top').click(function() {
			jQuery('body,html').animate({scrollTop:0},800);
		});	
	});
	

//roll_menu
jQuery('#roll_nav').clingify({
    breakpoint: 0,  // in pixels
    extraClass: '',
    throttle: 100,  // in milliseconds
    distanceUp:250,
    // Callback functions:
    detached: $.noop,
    locked: $.noop,
    resized: $.noop
});


 //Google Map
jQuery(document).ready(function($){
	if(document.getElementById('gmap')){
		jQuery('#gmap').gMap({
			address:'Bear city, ny ',
			maptype:'hybrid',
			zoom:8,
			scrollwheel:true,
			scaleControl:true,
			navigationControl:true,
			markers:[
				{address:'Bear city, ny ',html:'marker 1'},
				{address:' 579 Allen Road Basking Ridge, NJ 07920 ',html:'marker 1'},
				{address:' Mount Arlington, NJ 07856',html:'marker 1'}
				]
		}); 
	}	
});
	
	
	
		
	jQuery(document).ready(function($){
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		  var msViewportStyle = document.createElement("style");
		  msViewportStyle.appendChild(
			document.createTextNode(
			  "@-ms-viewport{width:auto!important}"
			)
		  );
		  document.getElementsByTagName("head")[0].
			appendChild(msViewportStyle);
		}
	});
	
	//chart 
$(window).load(function() {
	"use strict";
	var e_1 = $(".percentage");
	e_1.easyPieChart({
		animate: 2000,
		barColor: e_1.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 5,
		lineCap: 'round',
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	});
	var e_2 = $(".percentage2");
	e_2.easyPieChart({
		animate: 2000,
		barColor: e_1.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 16,
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	})

});


//source_code 
jQuery(document).ready(function($) {
var $source=$(".source_code");
 $source.find("a").click(
 function(){
	   $(this).siblings("pre").css("display")=="none" ? $(this).siblings("pre").slideDown(200):$(this).siblings("pre").slideUp(200);
	   return false;
})
})