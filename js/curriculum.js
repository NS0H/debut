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
