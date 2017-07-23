$(document).ready(function(){
	//var allslider = [];
	var allslider = $('.slider');
	[].forEach.call(allslider,function(elem){
		//	console.log($(elem));
		var slides = $(elem).children('.slides').children().length;
		//console.log(slides);
		//var countSlides = $(this).children('.slides').children('li').length;
		//alert(countSlides);
		

		var slidesImg = $('.slide_item').children();

		//console.log(slidesImg);
		var prev = $(elem).children('.prev');
		//$('.prev');
		var next = $(elem).children('.next');
		// $('.next');
		

		var count = 0;

		var allHeight = [];
		slidesImg.each(function(i,val){
			var height= $(this).height();
			allHeight.push(height);
		});


		var minheight = Math.min.apply(Math,allHeight);
		$('.slider').height(minheight);

		next.click(function(){
			
			
			var currentSlide=$(elem).children('ul').children('li:eq('+count+')');
			//console.log($(elem).children('ul'));
			if(count < slides){
				$(currentSlide).removeClass('active');

				count++;
				$(currentSlide).next().addClass('active');
			}
			if(count > 0){
				if(count == slides - 1){
					$(this).attr("disabled", true)
				}
				$(prev).attr("disabled", false)
			}
		});
		prev.click(function(){
			var currentSlide = $(elem).children('ul').children('li:eq('+count+')');
			if(count >= 1){
				$(currentSlide).removeClass('active');

				count--;
				$(currentSlide).prev().addClass('active');
			}
			if(count < slides - 1){
				if(count == 0){
					$(this).attr("disabled", true)
				}
				$(next).attr("disabled", false)
			}
		});
	});
});