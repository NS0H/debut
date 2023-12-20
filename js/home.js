/*
  div사이즈 동적으로 구하기
*/
const outer = document.querySelector(".outer");
const innerList = document.querySelector(".inner-list");
const inners = document.querySelectorAll(".inner");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

function adjustWidth() {
  inners.forEach((inner) => {
    inner.style.width = window.innerWidth + "px"; // inner의 width를 모두 outer의 width로 만들기
  });
  slides.forEach((slide) => {
    slide.style.width = window.innerWidth + "px"; // inner의 width를 모두 outer의 width로 만들기
  });
}

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? inners.length - 1 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${window.innerWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex = currentIndex >= inners.length ? 0 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${window.innerWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
});

function changeImage1(isHovered) {
  const buttonImage = document.getElementById("bt_img1");
  if (isHovered) {
    buttonImage.src = "./image/big01_over.png"; // 마우스 오버시 이미지 변경
  } else {
    buttonImage.src = "./image/big01.png"; // 마우스 아웃시 이미지 원래대로 변경
  }
}
function changeImage2(isHovered) {
  const buttonImage = document.getElementById("bt_img2");
  if (isHovered) {
    buttonImage.src = "./image/big02_over.png"; // 마우스 오버시 이미지 변경
  } else {
    buttonImage.src = "./image/big02.png"; // 마우스 아웃시 이미지 원래대로 변경
  }
}
function changeImage3(isHovered) {
  const buttonImage = document.getElementById("bt_img3");
  if (isHovered) {
    buttonImage.src = "./image/big03_over.png"; // 마우스 오버시 이미지 변경
  } else {
    buttonImage.src = "./image/big03.png"; // 마우스 아웃시 이미지 원래대로 변경
  }
}
function changeImage4(isHovered) {
  const buttonImage = document.getElementById("bt_img4");
  if (isHovered) {
    buttonImage.src = "./image/big04_over.png"; // 마우스 오버시 이미지 변경
  } else {
    buttonImage.src = "./image/big04.png"; // 마우스 아웃시 이미지 원래대로 변경
  }
}

function toDebut() {
  window.location.href = "../debut.html";
}

function toDebut1() {
  window.location.href = "../debut.html#big1";
}

function toDebut2() {
  window.location.href = "../debut.html#big2";
}

function toDebut3() {
  window.location.href = "../debut.html#big3";
}

function toDebut4() {
  window.location.href = "../debut.html#big4";
}

function toAdmission() {
  window.location.href = "../admission.html";
}

function toCurri1() {
  window.location.href = "../curriculum.html#element";
}

function toCurri2() {
  window.location.href = "../curriculum.html#middle";
}

// 초기 로딩 시
adjustWidth();

// 창의 크기가 변경될 때마다 크기를 조절
window.addEventListener("resize", adjustWidth);
