function toDebut() {
  window.location.href = "./debut.html";
}

function toComparing() {
  window.location.href = "./comparing.html";
}

let isDragging = false;
let startX;
let currentX;
let translateX = 0;
const image = document.getElementById("table");
const imageWidth = 60 * parseFloat(getComputedStyle(image).fontSize); // 이미지의 넓이를 60rem으로 설정

image.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  currentX = startX;
});

image.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const deltaX = e.touches[0].clientX - currentX;
  currentX = e.touches[0].clientX;

  translateX += deltaX;

  // 드래그 범위 제한
  translateX = Math.max(-imageWidth / 2, Math.min(imageWidth / 2, translateX));
  if(window.innerWidth <= 768){
    image.style.transform = `translateX(${translateX}px)`;
  }
  else {
    image.style.transform = `translateX(0px)`;
  }
});

image.addEventListener("touchend", () => {
  isDragging = false;
});
