/*--
	Main JS file for Greek Startup Universe whole website
--*/

// Add class "scrolled to navbar when user scrolls so that the background & text color can change"
$(window).scroll(function(){

	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);

});

$(document).ready(function() {

	$('.partners-carousel').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 1600,
	  	arrows: false,
	  	slidesToShow: 8,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 2000,
	  	responsive: [
	    	{
		      	breakpoint: 992,
		      	settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		 		breakpoint: 768,
		      	settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		      	breakpoint: 576,
		      	settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
		      	}
	    	},
	    	{
		      	breakpoint: 400,
		      	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		      	}
	    	}
	  ]
	});

	$('.community-partners-carousel').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 800,
	  	arrows: false,
	  	slidesToShow: 8,
	  	slidesToScroll: 1,
	  	autoplay: true,
  		autoplaySpeed: 1000,
	  	responsive: [
	    	{
		      	breakpoint: 992,
		      	settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		 		breakpoint: 768,
		      	settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			    }
	    	},
	    	{
		      	breakpoint: 576,
		      	settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
		      	}
	    	},
	    	{
		      	breakpoint: 400,
		      	settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
		      	}
	    	}
	  ]
	});

});

// Globe spinning with an image on it
let earth;
let img;
let locX;
let locY;
let rotateTheY, rotateTheX;
let mouseIsDown = false;
let theta = 10;
let canvasWrapperWidth = document.getElementById("canvas-wrapper").offsetWidth;
let earthR = canvasWrapperWidth/3;
let sketchWidth = canvasWrapperWidth;
let sketchHeight = sketchWidth;

console.log(sketchWidth, sketchHeight)

function setup() {
	img = loadImage('https://greekstartupuniverse.org/content/img/landing_world.gif');
	let renderer = createCanvas(sketchWidth, sketchHeight, WEBGL);
	renderer.parent("canvas-box");
	cursor('grab');
}

function draw() {
  
  	ambientLight(150);
		locX = mouseX - width / 2;
  		locY = mouseY - height / 2;
	
	if(mouseIsDown == false){
		rotateTheX = rotateX(0);
		rotateTheY = rotateY(millis() / 5000);
	} else {
		rotateTheX = rotateX(-locY/180);
		rotateTheY = rotateY(locX/180);
	}
	
  	pointLight(25, 250, 250, locX, locY, 200);
  	pointLight(255,255,255, 50, 50, 150);
	texture(img);
  	earth = sphere(earthR, 25, 25);
}

function mouseDragged() {
	mouseIsDown = true;	
}

function mousePressed() {
	mouseIsDown = true;
	rotateTheX = rotateX(-locY/180);
	rotateTheY = rotateY(locX/180);
	cursor('grabbing');
}

function mouseReleased() {
  	mouseIsDown = false;
	cursor('grab');
}

function windowResized(){
	let renderer = createCanvas(sketchWidth, sketchHeight, WEBGL);
	renderer.parent("canvas-box");
}