$('a').smoothScroll();
console.log($("div.content#top").index());
$("body").scroll(function(){

});

var $window = $(window);
 
$window.on('scroll', function ( e ) {

	console.log("scrolling");
	$(".content").each(function(index){
		if(isElementInViewport(this)){
			console.log("in viewport: " + index);
			$('.nav li').each(function(i){
				if(index != i)
					$(this).removeClass('active');
			});
			$(".nav li").eq(index).addClass("active");
		}else{
			console.log("NOT in viewport: " + index);
		}
	});
 
});

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top + rect.height/2 >= 0 &&
        rect.left >= 0 &&
        rect.bottom - rect.height/2 <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}