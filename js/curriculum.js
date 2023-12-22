const tabList = document.querySelectorAll(".twin_tab .tab li");
const contents = document.querySelectorAll(".cont_area .cont");
let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

document.addEventListener("DOMContentLoaded", function () {
  // URL의 해시 값을 가져와서 해당 탭을 활성화
  const hash = window.location.hash.substr(1);
  const activeTab = document.getElementById(hash);

  if (activeTab) {
    for (var j = 0; j < tabList.length; j++) {
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove("is_on");

      // 나머지 컨텐츠 display:none 처리
      contents[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }

    if (hash == "element") {
      tab = 0;
    } else if (hash == "middle") {
      tab = 1;
    }

    activeTab.classList.add("is_on");
    activeTab.style.display = "inherit";
    tabList[tab].classList.add("is_on");
  }
});

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove("is_on");

      // 나머지 컨텐츠 display:none 처리
      contents[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add("is_on");

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).classList.add("is_on");
    document.querySelector(activeCont).style.display = "inherit";
  });
}

var currentActiveTab = document.querySelector('.cont.is_on');

if (currentActiveTab) {
  var currentActiveTabId = currentActiveTab.getAttribute('id');
  console.log('현재 활성화된 탭의 ID:', currentActiveTabId);
}


let isDragging1 = false;
let startX1;
let currentX1;
let translateX1 = 0;
let isDragging2 = false;
let startX2;
let currentX2;
let translateX2 = 0;
const ele_table = document.getElementById("ele_table");
const mid_table = document.getElementById("mid_table");
const imageWidth1 = 100 * parseFloat(getComputedStyle(ele_table).fontSize); // 이미지의 넓이를 60rem으로 설정
const imageWidth2 = 100 * parseFloat(getComputedStyle(mid_table).fontSize);

// ele table
ele_table.addEventListener("touchstart", (e) => {
  isDragging1 = true;
  startX1 = e.touches[0].clientX;
  currentX1 = startX1;
});

ele_table.addEventListener("touchmove", (e) => {
  if (!isDragging1) return;

  const deltaX1 = e.touches[0].clientX - currentX1;
  currentX1 = e.touches[0].clientX;

  translateX1 += deltaX1;

  translateX1 = Math.max(-imageWidth1/1.2, Math.min(0, translateX1));
  if(window.innerWidth <= 768){
    ele_table.style.transform = `translateX(${translateX1}px)`;
  }
  else {
    ele_table.style.transform = `translateX(0px)`;
  }
});

ele_table.addEventListener("touchend", () => {
  isDragging1 = false;
});

// mid table
mid_table.addEventListener("touchstart", (e) => {
  isDragging2 = true;
  startX2 = e.touches[0].clientX;
  currentX2 = startX2;
});

mid_table.addEventListener("touchmove", (e) => {
  if (!isDragging2) return;

  const deltaX2 = e.touches[0].clientX - currentX2;
  currentX2 = e.touches[0].clientX;

  translateX2 += deltaX2;

  // 드래그 범위 제한
  translateX2 = Math.max(-imageWidth2/1.2, Math.min(0, translateX2));
  if(window.innerWidth <= 768){
    mid_table.style.transform = `translateX(${translateX2}px)`;
  }
  else {
    mid_table.style.transform = `translateX(0px)`;
  }
});

mid_table.addEventListener("touchend", () => {
  isDragging2 = false;
});