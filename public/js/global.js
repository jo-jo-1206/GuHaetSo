if (window.location.href.indexOf('mypage.html') === -1) {
  document.getElementById("logout").style.display = "none";

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
}

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



//로그아웃
function logout() {
  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none";
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


//search-button (돋보기) 클릭 시 form 제출
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function(event) {
    // 기본 동작(여기서는 form 제출)을 막습니다.
    event.preventDefault();
    // form 요소를 선택합니다.
    const form = document.querySelector('.search-container');

    const inputField = form.querySelector('.search-input');

    // 입력 필드의 값이 비어 있는지 확인합니다.
    if (inputField.value.trim() === '') {
        // 값이 비어 있다면 알림창을 띄웁니다.
        alert('검색어를 입력해주세요.');
    } else {
        // 값이 비어 있지 않다면 form을 제출합니다.
        form.submit();
    }
});
