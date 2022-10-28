// TODO: Which element is the following line of code selecting?

var carousel = document.querySelector(".carouselbox");

// <div> element with carouselbox class


// TODO: Which element is the following line of code selecting?

// it is selecting the <button> elements

var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.

// registers a click on the image

carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.

// registers a click on the direction pressed (next, prev)

next.addEventListener("click", function(event) {

  // TODO: What is the purpose of the following line of code?
  
  // stops propagation for the 'next' button
 
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.

// stops propagation for the 'previous' button

prev.addEventListener("click", function(event) {

    // TODO: What would happen if we didn't add the following line of code?

    // the function would continue to propagate

  event.stopPropagation();

  navigate(-1);
});

navigate(0);
