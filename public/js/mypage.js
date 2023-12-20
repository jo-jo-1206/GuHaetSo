function loadFile(event) {
  var imageShow = document.getElementById('image-show');
  // 이미지가 이미 존재한다면 삭제
  if (imageShow.querySelector('img')) {
    imageShow.removeChild(imageShow.querySelector('img'));
  }
  
  var image = document.createElement('img');
  image.src = URL.createObjectURL(event.files[0]);
  imageShow.appendChild(image);
}

// profile-info 요소와 그 하위 요소들을 찾기
const submitbutton = document.querySelector('input[type="submit"]');
const inputs = document.querySelectorAll('input, textarea, select');

// 수정이 발생했을 때를 감지하는 함수
function handleInputChange() {
  document.querySelector('input[type="submit"]').classList.add('active');
  document.querySelector('input[type="submit"]').value = '수정 완료';
}

// 입력값이 변경될 때마다 handleInputChange 함수 실행
inputs.forEach(input => {
  input.addEventListener('change', handleInputChange);
});

const profile = document.querySelector('.modify-profile');
const post = document.querySelector('.post');

//게시글 관리 버튼 클릭 시 작동하는 함수 
function managePost(){ 
  profile.classList.add('deactive');
  post.classList.remove('deactive');
}

//프로필 수정 버튼 클릭 시 작동하는 함수 
function modifyProfile(){
  profile.classList.remove('deactive');
  post.classList.add('deactive');
}

function modifyPost(){
  window.location.href = "add.html";
  
  // 수정할 게시글 정보 불러오기 
}

function deletePost(){
  //게시글 삭제 
  if(confirm("정말로 삭제하시겠습니까?")){
		alert("삭제되었습니다.");
    
  const postToDelete = event.target.closest('.one-post');
  postToDelete.remove();
	}
  
}