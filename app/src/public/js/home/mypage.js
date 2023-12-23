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



// 조성우
window.onload = function() {
    /**
     * 사용자 정보를 불러오기
     */
    const userId = sessionStorage.getItem('user_id');

    fetch(`/userinfo/${userId}`)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.querySelector('input[name="phone"]').value = data.userInfo.user_phone || '';
        document.querySelector('input[name="email"]').value = data.userInfo.user_email || '';
        document.querySelector('textarea[name="introduce"]').value = data.userInfo.user_carrer || '';
        document.querySelector('select[name="country"]').value = data.userInfo.user_region || "Seoul";
      } else {
        console.error(data.msg);
      }
    });

    /**
     * 게시글 데이터 불러오기
     */
    fetchUserPosts();
};

document.querySelector("#btn_updateUser").addEventListener("click", function(event) {
    /**
     * 사용자 정보 수정하기
     */
    event.preventDefault();

    const updatedUserInfo = {
        user_phone: document.querySelector('input[name="phone"]').value,
        user_email: document.querySelector('input[name="email"]').value,
        user_carrer: document.querySelector('textarea[name="introduce"]').value,
        user_region: document.querySelector('select[name="country"]').value,
    };

    const userId = sessionStorage.getItem('user_id');

    fetch(`/updateUser/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUserInfo)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("프로필이 성공적으로 업데이트되었습니다.")
      } else {
        alert("프로필 업데이트에 실패했습니다.");
      }
    })
});

document.querySelector("#btn_registerPoster").addEventListener("click", async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const hashedTitle = await sha256(title);
  const postData = {
    poster_id: hashedTitle,
    user_id: sessionStorage.getItem("user_id"),
    poster_title: title,
    poster_content: document.querySelector('textarea[name="content"]').value,
    poster_category: document.querySelector('#big-category').value,
  };

  fetch("/registerPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert("게시글이 성공적으로 등록되었습니다.");
      location.reload();
      // 페이지 리로드
    } else {
      alert("게시글 등록에 실패했습니다.");
    }
  })
});

async function sha256(str) {
  const buffer = new TextEncoder().encode(str);

  const digest = await crypto.subtle.digest('SHA-256', buffer);

  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function fetchUserPosts() {
  const userId = sessionStorage.getItem('user_id');
  fetch(`/getPostersByUserId/${userId}`)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      displayUserPosts(data.userPosts);
      // alert("게시글 로드 성공");
    } else {
      console.error(data);
    }
  });
}

function displayUserPosts(posts) {
  const postsContainer = document.querySelector('.posts');
  postsContainer.innerHTML = '';
  posts.forEach(function(post, idx) {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
}

function createPostElement(post) {
  const postDiv = document.createElement('div');
  postDiv.className = 'one-post';

  postDiv.innerHTML = `
  <div class="post-image"></div>
  <div class="post-items">
      <p class="post-title">${post.poster_title}</p>
      <p class="post-category">${post.poster_category}</p>
      <div class="heart">
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20 5.14552C20 2.30845 17.6522 0 14.7671 0C12.6496 0 10.8231 1.24294 9.99983 3.02475C9.17695 1.24294 7.35005 0 5.23358 0C2.3471 0 0 2.30845 0 5.14552C0 5.74399 0.104375 6.31795 0.296965 6.85286C0.515816 7.46192 0.847461 8.01801 1.26799 8.49764C1.44745 8.70287 1.64206 8.89353 1.85249 9.06863L9.83485 16.8635C9.88401 16.9119 9.94798 16.936 10.0126 16.936C10.0773 16.936 10.1423 16.9119 10.1917 16.8635L18.4704 8.77734L18.4697 8.77635C19.0064 8.24773 19.4269 7.60591 19.6906 6.88994C19.8906 6.3451 20 5.75756 20 5.14552Z"
                  fill="#FF6C87" />
          </svg>
          <p>0</p>
      </div>
  </div>
  <div class="button-container">
    <button class="modify-post" onclick="modifyPost(${post.poster_id})">수정</button>
    <button class="delete-post" onclick="deletePoster(${post.poster_id})">삭제</button>
  </div>
  `;
  return postDiv;
}

function deletePoster(posterId) {
  if (confirm("정말로 삭제하시겠습니까?")) {
    fetch(`/deletePoster/${posterId}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("게시글이 삭제되었습니다.");
        location.reload();
      } else {
        alert("게시글 삭제에 실패했습니다.");
      }
    })
  }
}