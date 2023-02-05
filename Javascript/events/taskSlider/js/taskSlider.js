// var slider_img = document.querySelector(".slider-img");
// var images = ["aa.jpg", "bb.jpg"];
// var i = 0;

// function prev() {
//   if (i <= 0) i = images.length;
//   i--;
//   return setImg();
// }

// function next() {
//   if (i >= images.length - 1) i = -1;
//   i++;
//   return setImg();
// }

// function setImg() {
//   return slider_img.setAttribute("src", "images/" + images[i]);
// }
// img

// var images = document.querySelectorAll("#slider img");

// var currentImageIndex = 0;

// for (var i = 1; i < images.length; i++) {
//   images[i].style.display = "none";
// }

// function nextImage() {
//   for (var i = 0; i < images.length; i++) {
//     if (i === currentImageIndex) {
//       images[i].style.display = "none";
//       if (i === images.length - 1) {
//         currentImageIndex = 0;
//       } else {
//         currentImageIndex++;
//       }
//     } else if (i === currentImageIndex) {
//       images[i].style.display = "block";
//     }
//   }
//   updateButtons();
// }

// function prevImage() {
//   for (var i = 0; i < images.length; i++) {
//     if (i === currentImageIndex) {
//       images[i].style.display = "none";
//       if (i === 0) {
//         currentImageIndex = images.length - 1;
//       } else {
//         currentImageIndex--;
//       }
//     } else if (i === currentImageIndex) {
//       images[i].style.display = "block";
//     }
//   }
//   updateButtons();
// }

// function updateButtons() {
//   // If the current image is the first one, disable the previous button
//   if (currentImageIndex === 0) {
//     document.getElementById("prev-button").disabled = true;
//   } else {
//     document.getElementById("prev-button").disabled = false;
//   }
//   // If the current image is the last one, disable the next button
//   if (currentImageIndex === images.length - 1) {
//     document.getElementById("next-button").disabled = true;
//   } else {
//     document.getElementById("next-button").disabled = false;
//   }
// }

// document.getElementById("next-button").addEventListener("click", nextImage);
// document.getElementById("prev-button").addEventListener("click", prevImage);

// updateButtons();

var images = document.querySelectorAll("#slider img");

var currentImageIndex = 0;

var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("prev-button");

for (var i = 1; i < images.length; i++) {
  images[i].style.display = "none";
}

function nextImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = "block";
  updateButtons();
}

function prevImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].style.display = "block";
  updateButtons();
}

function updateButtons() {
  if (currentImageIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentImageIndex === images.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

updateButtons();
