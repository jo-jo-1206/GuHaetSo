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

// 조성우 : 로그인 기능
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn_login = document.querySelector("#btn_login");
const btn_logout = document.querySelector("#logout-button");

checkLoginStatus();

btn_login.addEventListener("click", function(event) {
  event.preventDefault();
  login();
});

btn_logout.addEventListener("click", function() {
  logout();
});

function checkLoginStatus() {
  const userId = sessionStorage.getItem('user_id');
  console.log(userId);

  if (userId) {
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
  } else {
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
  }
}

function login() {
  const req = {
    user_id: id.value,
    user_password: password.value,
  };

  // console.log(req);
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      // 로그인 성공
      console.log(res);
      sessionStorage.setItem("user_id", res.user_id);
      checkLoginStatus();
      closePopup(); // 로그인 후 팝업 닫기
    } else {
      // 로그인 실패
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("로그인 중 에러 발생", err));
  });
}

function logout(){
  sessionStorage.removeItem("user_id");
  checkLoginStatus();
}
/*
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지
    const id = this.querySelector('input[name="id"]').value;
    const pw = this.querySelector('input[name="password"]').value;

    // 여기에 로그인 검증 코드 (일단은 ID와 PW가 빈 값이 아닌 경우에만 변경됨)

    if (id && pw) {
      document.getElementById("login").style.display = "none";
      document.getElementById("logout").style.display = "block";
      closePopup(); // 로그인 후 팝업 닫기
    } else {
      alert('아이디와 비밀번호를 입력하세요.');
    }
  });
*/
