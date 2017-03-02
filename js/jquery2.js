$(document).ready(function(){
	//when user clicks inside the container
	$('.curtain_wrapper').click(function() {
	
		//..animate the description div by changing its left position to its width but as -ve no.
		$(this).children('.description').animate({'left': -1*$(this).width()});
		
		//..animate the images of 2 curtains to width of 50px with duration of 2sec
		$(this).children('img.curtain').animate({width: 0},{duration: 6000});
		//..remove frill
		$(this).children('.frill').fadeOut(8000);
		
		//..display content behind the curtain with fadeIn funcn(2sec) 
		$(this).children('.content').fadeIn(6000);
		
	});
	
	
	
});


