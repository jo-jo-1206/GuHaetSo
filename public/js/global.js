document.getElementById("logout").style.display = "none";

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
}


function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 제출 방지
  const id = this.querySelector('input[name="id"]').value;
  const pw = this.querySelector('input[name="pw"]').value;

  // 여기에 로그인 검증 코드 (일단은 ID와 PW가 빈 값이 아닌 경우에만 변경됨)

  if (id && pw) {
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    closePopup(); // 로그인 후 팝업 닫기
  } else {
    alert('아이디와 비밀번호를 입력하세요.');
  }
});

//로그아웃
function logout() {
  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none";
}

// 마이페이지로 이동 
function goToProfile(){ 
  window.location.href = 'mypage.html';
}

/*햄버거 버튼 활성화, 비활성화 */ 
const navbarBurger = document.querySelector('.navbar_burger');
const navbarburgerback = document.querySelector('.navbar_burger_back');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarOverlay = document.querySelector('.navbar_overlay');

navbarBurger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
});

navbarburgerback.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  navbarOverlay.classList.remove('active');
});

navbarOverlay.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  navbarOverlay.classList.remove('active');
});

/* 모바일 카테고리 onclick */
const categoryButton = document.querySelector('.big-category');
const categoryMobile = document.querySelector('.category-container-mobile');
const svgPaths = document.querySelectorAll('.svg-category path');

categoryButton.addEventListener('click', () => {
  svgPaths.forEach(svgPath => {
    if (categoryMobile.classList.contains('active')) {
      svgPath.setAttribute('d', 'M2 2 L12 10 L22 2');
      categoryMobile.classList.remove('active');
    } else {
      svgPath.setAttribute('d', 'M2 10 L12 2 L22 10');
      categoryMobile.classList.add('active');
    }
  });
});
