(function($) {
	var Testimonialstab = function(element) {
		$(element).each(function(i, el) {
			var el = $(el),
			tabs = el.find("li"),
			times = 500,
			boxheight=0,
			carrynumber=0,
			tabmode = el.attr("data-Position") ? el.attr("data-Position") : "fade",
			arrows = el.attr("data-display-arrows") ? el.attr("data-display-arrows") : "true",
			navigation = el.attr("data-display-navigation") ? el.attr("data-display-navigation") : "true",
			heightauto = el.attr("data-autoheight") ? el.attr("data-autoheight") : "true",
			autoplay = el.attr("data-autoplay") ? el.attr("data-autoplay") : "2000",
			mark,
			i = 0,
			x = 0;
			
			
			var maxheight=function(i){
				
					if(heightauto!="true"){
						if(carrynumber==0){
							for(h=0;h<tabs.length;h++){
								boxheight = boxheight > parseInt(tabs.eq(h).outerHeight()) ? boxheight:parseInt(tabs.eq(h).outerHeight());
							}
							el.height(boxheight);
							carrynumber=1;
						}
						
					}
					else{
						el.height(tabs.eq(i).height());
					}
			}
			$(window).resize(function(){
				boxheight=0;
				carrynumber=0;
				maxheight(i);
			})
			var showtabplus = function(i) {
				if (tabmode == "fade") {
					tabs.eq(i).css({
						opacity: 1
					}).fadeIn().siblings("li").css({
						opacity: 0
					}).fadeOut();
					maxheight(i);
				}
				if (tabmode == "roll-left") {
					tabs.eq(i).css({
						left: tabs.eq(i).width(),
						opacity: 0,
						display: "block"
					});
					tabs.eq(i).animate({
						left: "0",
						opacity: 1
					},
					{
						easing: "linear"
					}).siblings("li").animate({
						left: "-100%",
						opacity: 0
					},
					{
						easing: "linear"
					});
					maxheight(i);		

				}
				if (tabmode == "roll-vertical") {
					tabs.eq(i).css({
						top: tabs.eq(i).height(),
						opacity: 0,
						display: "block"
					});
					maxheight(i);
					tabs.eq(i).animate({
						top: "0",
						opacity: 1
					},
					{
						easing: "linear"
					}).siblings("li").animate({
						top: "-100%",
						opacity: 0
					},
					{
						easing: "linear"
					});
				}
			}
			var showtabminus = function(i) {
				if (tabmode == "fade") {
					tabs.eq(i).css({
						opacity: 1
					}).fadeIn().siblings("li").css({
						opacity: 0
					}).fadeOut();
					maxheight(i);
				}

				if (tabmode == "roll-left") {
					tabs.eq(i).css({
						left: -tabs.eq(i).width(),
						opacity: 0,
						display: "block"
					});
					tabs.eq(i).animate({
						left: "0",
						opacity: 1
					},
					{
						easing: "linear"
					}).siblings("li").animate({
						left: "100%",
						opacity: 0
					},
					{
						easing: "linear"
					});
					maxheight(i);
				}
				if (tabmode == "roll-vertical") {
					tabs.eq(i).css({
						top: -tabs.eq(i).height(),
						opacity: 0,
						display: "block"
					});
					maxheight(i);
					tabs.eq(i).animate({
						top: "0",
						opacity: 1
					},
					{
						easing: "linear"
					}).siblings("li").animate({
						top: "100%",
						opacity: 0
					},
					{
						easing: "linear"
					});
				}
			}
			showtabplus(i);
			if (arrows== "true") {
				el.append("<a  href='javascript:;' class='last_page'><</a><a  href='javascript:;' class='next_page'>></a>");
				el.find(".last_page").click(function() {
					if (x == 0) {
						i = i - 1 < 0 ? tabs.length - 1 : i - 1;
						showtabminus(i);
						x = 1;
						var tabtime = setInterval(function() {
							x = 0;
							clearTimeout(tabtime);
						},
						times);
					}
				});
				el.find(".next_page").click(function() {
					if (x == 0) {
						i = i + 1 >= tabs.length ? 0 : i + 1;
						showtabplus(i);
						x = 1;
						var tabtime = setInterval(function() {
							x = 0;
							clearTimeout(tabtime);
						},
						times);
					}
				})
			}
			if (navigation== "true") {
				el.append("<div class='dot'></div>");
				for (y = 1; y <= tabs.length; y++) {
					el.find(".dot").append("<a href='javascript:;'>" + y + "</a>")
				}

				el.find(".dot a").eq(i).addClass("actived");
				el.find(".dot a").click(function() {
					var index = $(this).text() - 1;

					if (x == 0) {

						if (i < index) {
							showtabplus(index);

						}
						if (i > index) {
							showtabminus(index);

						}
						i = index;
						$(this).addClass("actived").siblings().removeClass("actived");
						x = 1;
						var tabtime = setInterval(function() {
							x = 0;
							clearTimeout(tabtime);
						},

						times);
					}
				})
			}
			if (autoplay > 0) {

				var play = setInterval(function() {
					i = i + 1 >= tabs.length ? 0 : i + 1;
					showtabplus(i);
					el.find(".dot a").eq(i).addClass("actived").siblings().removeClass("actived");
				},
				autoplay);

			
			el.mouseover(function() {
				clearTimeout(play);
			}).mouseout(function() {
				play = setInterval(function() {
					i = i + 1 >= tabs.length ? 0 : i + 1;
					showtabplus(i);
					el.find(".dot a").eq(i).addClass("actived").siblings().removeClass("actived");
				},
				autoplay)
			})
			
			}
			

		});
	}

	$(window).load(function() {
		Testimonialstab('.Testimonials_tab');
	});
})(jQuery);