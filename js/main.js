$( document ).ready(function(){
$( ".homePageImage" ).css( "background-image", "url('img/band/photo1.jpg')");
var i =1;
var timer = setTimeout(slider, 6000);

function slider(){
	i++;
	if(i===1){
		$( ".homePageImage" ).css( "background-image", "url('img/band/photo1.jpg')");$( ".homePageImage" ).css("background-position","30% 60%");
	}else if(i===2){
		$( ".homePageImage" ).css( "background-image", "url('img/band/photo2.jpg')");
	}else if(i===3){
		$( ".homePageImage" ).css( "background-image", "url('img/band/photo3.jpg')");
	}else if(i===4){
		$( ".homePageImage" ).css( "background-image", "url('img/band/photo4.jpg')");$( ".homePageImage" ).css("background-position","60% 20%");
		i=0;
	}
	

var timer = setTimeout(slider, 6000);
}

});