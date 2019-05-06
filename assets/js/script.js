
/*Carousel change div*/

$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    if(e.relatedTarget.id == 'firstSlide'){
 		$("#carousect1").css('display', 'block');
 		$('#carousect2').css('display', 'none');
 		$('#carousect3').css('display', 'none');

 		$('#smlcarou1').css('opacity', 1);
 		$('#smlcarou2').css('opacity', 0.5);
 		$('#smlcarou3').css('opacity', 0.5);
  	}
  	else if(e.relatedTarget.id == 'secondSlide'){
  		$("#carousect1").css('display', 'none');
 		$('#carousect2').css('display', 'block');
 		$('#carousect3').css('display', 'none');

 		$('#smlcarou1').css('opacity', 0.5);
 		$('#smlcarou2').css('opacity', 1);
 		$('#smlcarou3').css('opacity', 0.5);
  	}
  	else if(e.relatedTarget.id == 'thirdSlide'){
  		$("#carousect1").css('display', 'none');
 		$('#carousect2').css('display', 'none');
 		$('#carousect3').css('display', 'block');

 		$('#smlcarou1').css('opacity', 0.5);
 		$('#smlcarou2').css('opacity', 0.5);
 		$('#smlcarou3').css('opacity', 1);
  	}
  	else{
  		$("#carousect1").css('display', 'block');
  		$("#carousect2").css('display', 'none');
  		$('#carousect3').css('display', 'none');

  		$('#smlcarou1').css('opacity', 1);
  		$('#smlcarou2').css('opacity', 0.5);
 		$('#smlcarou3').css('opacity', 0.5);
  	}

});