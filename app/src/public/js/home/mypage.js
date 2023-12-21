var uploadedFileName = ""; // 업로드된 파일 이름을 저장하는 변수
var uploadCheck = true; // 파일 업로드 여부를 확인하는 변수
function fileUpload(event) { 
  var fileUploaded = document.getElementById('fileUpload');

  if(uploadedFileName == ""){
    uploadedFileName = event.files[0].name;
  }
  else {
    uploadedFileName = uploadedFileName + ", " + event.files[0].name;
  }
  fileUploaded.textContent = uploadedFileName;

  var label = document.getElementById('fileLabel')
  // 파일이 업로드되었을 때 active 클래스를 추가하여 스타일을 변경
  label.classList.add('active');

  if (uploadCheck) {
  // label 하위의 svg 태그 제거
  var svgElement = label.querySelector('svg');
    svgElement.remove();
    var svgCode = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.1582 5.36816H1.34462L1.71212 6.09402L4.05731 10.726L4.19611 11.0001H4.50339H13.8842H14.1914L14.3302 10.726L16.6754 6.09402L17.0429 5.36816H16.2294H2.1582Z" stroke="white"/><path d="M1 3.96777H17.3872L13.9677 10.5H4.41946L1 3.96777Z" fill="black"/><path d="M9.35355 0.646488C9.15829 0.451225 8.84171 0.451225 8.64645 0.646488L5.46447 3.82847C5.2692 4.02373 5.2692 4.34031 5.46447 4.53557C5.65973 4.73084 5.97631 4.73084 6.17157 4.53557L9 1.70715L11.8284 4.53558C12.0237 4.73084 12.3403 4.73084 12.5355 4.53558C12.7308 4.34031 12.7308 4.02373 12.5355 3.82847L9.35355 0.646488ZM9.5 8.5L9.5 1.00004L8.5 1.00004L8.5 8.5L9.5 8.5Z" fill="white"/></svg>';

    var parser = new DOMParser();
    var svgElementToAdd = parser.parseFromString(svgCode, 'text/html').body.firstChild;
    label.appendChild(svgElementToAdd);
    uploadCheck = false;
  }

  // 서버에 이미지 전송해야함 
}


//프로필 사진 변경 
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


// Aform 내의 submit 버튼 선택
const submitButtonA = document.querySelector('#Aform input[type="submit"]');
const inputsA = document.querySelectorAll('#Aform input, #Aform textarea, #Aform select');

// Bform 내의 submit 버튼 선택
const submitButtonB = document.querySelector('#Bform input[type="submit"]');
const inputsB = document.querySelectorAll('#Bform input, #Bform textarea, #Bform select');

// A form 수정 감지 함수
function handleInputChangeA() {
  submitButtonA.classList.add('active');
}

// B form 수정 감지 함수
function handleInputChangeB() {
  submitButtonB.classList.add('active');
}

// A form 입력값 변경 시
inputsA.forEach(input => {
  input.addEventListener('change', handleInputChangeA);
});

// B form 입력값 변경 시
inputsB.forEach(input => {
  input.addEventListener('change', handleInputChangeB);
});




const profile = document.querySelector('.modify-profile');
const post = document.querySelector('.post');
const addPost = document.querySelector('.add-post');
//게시글 관리 버튼 클릭 시 작동하는 함수 
function managePost(){ 
  profile.classList.add('deactive');
  post.classList.remove('deactive');
  addPost.classList.add('deactive');
}

//프로필 수정 버튼 클릭 시 작동하는 함수 
function modifyProfile(){
  profile.classList.remove('deactive');
  post.classList.add('deactive');
  addPost.classList.add('deactive');
}

function postAdd(){
  profile.classList.add('deactive');
  post.classList.add('deactive');
  addPost.classList.remove('deactive');
}

function modifyPost(){
  profile.classList.remove('deactive');
  post.classList.add('deactive');
  addPost.classList.add('deactive');

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



// 조성우
window.onload = function() {
    
};