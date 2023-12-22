const tabList = document.querySelectorAll(".Extab .tab li");
const contents = document.querySelectorAll(".Extab .cont_area .cont");
let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

document.addEventListener("DOMContentLoaded", function () {
  updateImages();

  // URL의 해시 값을 가져와서 해당 탭을 활성화
  const hash = window.location.hash.substr(1);
  const activeTab = document.getElementById(hash);
  const lastCharacter = hash[hash.length - 1];
  if (activeTab) {
    for (var j = 0; j < tabList.length; j++) {
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove("is_on");

      // 나머지 컨텐츠 display:none 처리
      contents[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }

    activeTab.classList.add("is_on");
    activeTab.style.display = "inherit";
    tabList[lastCharacter - 1].classList.add("is_on");
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

function updateImages() {
  var eleproject_image = document.getElementById("eleproject_img");
  var midproject_image = document.getElementById("midproject_img");
  var project_image = document.getElementById("project_img");
  var mission_image = document.getElementById("mission_img");
  var debut_midtable = document.getElementById("debut_midtable");
  var repeat_ele = document.getElementById("repeat_ele");
  var repeat_mid = document.getElementById("repeat_mid");

  if (window.innerWidth <= 768) {
    eleproject_image.src = "./image/m_ele_project.png"; // Mobile image path
    midproject_image.src = "./image/m_mid_project.png";
    project_image.src = "./image/m_project.png";
    mission_image.src = "./image/m_mission.png";
    debut_midtable.src = "./image/m_debut_mid_table.png";
    repeat_ele.src = "./image/m_repeat_ele.png";
    repeat_mid.src = "./image/m_repeat_mid.png";
  } else {
    eleproject_image.src = "./image/ele_project.png"; // Mobile image path
    midproject_image.src = "./image/mid_project.png";
    project_image.src = "./image/project.png";
    mission_image.src = "./image/mission.png";
    debut_midtable.src = "./image/debut_mid_table.png";
    repeat_ele.src = "./image/repeat_ele.png";
    repeat_mid.src = "./image/repeat_mid.png";
  }
}

function toDebut() {
  window.location.href = "./debut.html";
}

function toComparing() {
  window.location.href = "./comparing.html";
}

window.addEventListener("resize", function () {
  updateImages();
});
