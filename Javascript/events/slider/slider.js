var paraVar = document.querySelector("#imageId");
let count = 1;
function nextImage() {
  count++;
  if (count < 16) {
    paraVar.src = "images/" + count + ".jpg";
  } else {
    count = 1;
    paraVar.src = "images/" + count + ".jpg";
  }
}

function prevImage() {
  count--;
  if (count > 0) {
    paraVar.src = "images/" + count + ".jpg";
  } else {
    count = 15;
    paraVar.src = "images/" + count + ".jpg";
  }
}

setInterval(() => {
  prevImage();
}, 2000);
