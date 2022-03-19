function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".modalOverlay").style.display = "block";
}
  
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".modalOverlay").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Code for cart details popup
let cartImgBtn = document.querySelector(".cartImageElemWrapper img");
cartImgBtn.onclick = function(e) {
    let cartDetailsPopup = document.querySelector(".cartDetailsPopup");
    if(cartDetailsPopup.style.display != 'block')
        cartDetailsPopup.style.display = 'block';
    else
        cartDetailsPopup.style.display = 'none';
}


// Code for quantity
let plusBtn = document.querySelector('.PlusBtn');
plusBtn.onclick = function(e) {
  let quantityValElem = document.querySelector('.QuantityValue');
  let quantityVal = parseInt(quantityValElem.innerHTML);
  // Putting an upper limit of 100
  if(quantityVal < 100)
    quantityVal++;
  quantityValElem.innerHTML = quantityVal;
}

let negBtn = document.querySelector('.NegBtn');
negBtn.onclick = function(e) {
  let quantityValElem = document.querySelector('.QuantityValue');
  let quantityVal = parseInt(quantityValElem.innerHTML);
  if(quantityVal > 0)
    quantityVal--;
  quantityValElem.innerHTML = quantityVal;
}