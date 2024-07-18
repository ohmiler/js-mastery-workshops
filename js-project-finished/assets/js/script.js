//---------- Toggle Hamburger Icon script ----------//

function toggleHamburgerIcon(el) {
    el.classList.toggle("change");
}

//---------- Toggle mobile menu when hamburgerIcon is clicked script ----------//

let hamburgerIcon = document.getElementById("hamburgerIcon");

if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function() {
        let mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu) {
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "block";
            }
        } else {
            console.error("Element with ID 'mobileMenu' not found.");
        }
    });
} else {
    console.error("Element with ID 'hamburgerIcon' not found.");
}

//---------- Banner slide script ----------//

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner-wrapper");

    if (n > slides.length) {
        slideIndex = 1;
    }    

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "flex";  
}
showSlides(slideIndex);

//---------- Cars Img modal script ----------//

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    })
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//---------- Cars Grid Info script ----------//

let carDesc = document.getElementsByClassName("cars-grid-item-desc");
let carBtn = document.getElementsByClassName("cars-grid-item-btn");
let carCloseDescBtn = document.getElementsByClassName("cars-grid-item-desc-x");

for (let i = 0; i < carBtn.length; i++) {
    carBtn[i].addEventListener("click", function() {
        carDesc[i].style.display = "block";
    });
}

for (let i = 0; i < carCloseDescBtn.length; i++) {
    carCloseDescBtn[i].addEventListener("click", function() {
        carDesc[i].style.display = "none";
    });
}

//---------- Accordion script ----------//

let acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//---------- Back to top script ----------//

// Get the button:
let mybutton = document.getElementById("myBtt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}