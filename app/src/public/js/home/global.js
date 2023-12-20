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

function logout(){
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";
  }