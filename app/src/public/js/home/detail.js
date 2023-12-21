const reviewscore = document.getElementById("number");
const reviewscorem = document.getElementById("numberm");
const reviewStar = document.querySelector(".review-button");
const reviewStarm = document.querySelector(".review-button-mobile");
let number = reviewscore.innerText;
let numberm = reviewscorem.innerText;
let chk = false;
let chkm = false;
console.log(reviewStar.innerText);
console.log(reviewStarm.innerText);

function review(){
  if(chk) {
    number = (parseInt(number) - 1);
    reviewStar.innerHTML = `<span id="number">좋아요 ${number}</span>건 🤍`;
  }
  else {
    number = parseInt(number) + 1;
    reviewStar.innerHTML = `<span id="number">좋아요 ${number}</span>건 ❤️`;
  }
  chk = !chk;
}
function reviewm(){
  if(chkm) {
    numberm = (parseInt(numberm) - 1);
    reviewStarm.innerHTML = `<span id="numberm">좋아요 ${numberm}</span>건 🤍`;
  }
  else {
    numberm = parseInt(numberm) + 1;
    reviewStarm.innerHTML = `<span id="numbemr">좋아요 ${numberm}</span>건 ❤️`;
  }
  chkm = !chkm;
}


// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".banner");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".banner-prev-button");
const nextBtn = document.querySelector(".banner-next-button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems = document.querySelectorAll(".banner-item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".banner-pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".banner-pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".banner-item");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
  // 각 페이지네이션마다 클릭 이벤트 추가하기
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    nextMove();
  }
});

// 기본적으로 슬라이드 루프 시작하기
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});

function assignButtonClickEvent(menu) {
  document.querySelectorAll('.' + menu).forEach(function(button) {
    button.addEventListener('click', function() {
      window.location.href = '/category?category=' + menu;
    });
  });
}

//버튼 할당
assignButtonClickEvent('car-repair');
assignButtonClickEvent('interior');
assignButtonClickEvent('lesson');
assignButtonClickEvent('making');
assignButtonClickEvent('dog');
assignButtonClickEvent('clean');
assignButtonClickEvent('sport');

//카테고리 버튼 클릭 시 해당 카테고리로 이동
function assignButtonClickEvent(category) {
  document.querySelectorAll('.' + category).forEach(function(button) {
    button.addEventListener('click', function() {
      window.location.href = '/category?category=' + category;
    });
  });
}

// 전체 카테고리 버튼을 눌렀을 때 카테고리 메뉴 표시 
document.getElementById("submenu").style.display = "none";

function openCategory() {
  var popup = document.getElementById("submenu");
  if (popup.style.display === "block") {
      popup.style.display = "none";
  } else {
      popup.style.display = "block";
      popup.style.opacity = "1";
  }
}


document.querySelectorAll('.Card').forEach(card => {
  card.addEventListener('click', function () {
      window.location.href = '/detail'; // 현재 클릭한 Card에 대한 상세 페이지 URL로 이동
  });
});






// 함수로 데이터를 업데이트하고 해당 정보를 새로운 내용으로 변경하는 함수
function updateInformation(newData) {
  const bannerContainer = document.querySelector('.banner');
  bannerContainer.innerHTML = '';

  newData.images.forEach((imageUrl, index) => {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('banner-item', `item${index + 1}`);
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'banner_img';
      image.width = '100%';
      image.height = '100%';
      imageDiv.appendChild(image);
      bannerContainer.appendChild(imageDiv);
      image.onerror = function() {
        image.src = 'img/Default_image.png'; // 기본 이미지 경로 설정
    };
  });

  const nameElement = document.querySelector('.person-content h3');
  nameElement.textContent = newData.name;

  const profileImage = document.querySelector('.person-img img');
  profileImage.src = newData.profileImage;
  profileImage.onerror = function(){
    profileImage.src = 'img/Default_image.png'; // 기본 이미지 경로 설정
  }

  const infoList = document.querySelector('.person-content ul');
  infoList.innerHTML = `
      <li><h4>전화번호</h4><h5>${newData.phoneNumber}</h5></li>
      <li><h4>이메일</h4><h5>${newData.email}</h5></li>
      ${newData.career.map(career => `<li class="history1">${career}</li>`).join('')}
  `;

  const likeNumber = document.getElementById('number');
  number = newData.likeCount;
  likeNumber.textContent = newData.likeCount + "건 🤍";

  const explainTitle = document.querySelector('.explain-content h2');
  explainTitle.textContent = newData.title;

  const explainContent = document.querySelector('.explain-content');
    const explainContentMobile = document.querySelector('.explain-content-mobile');

    newText = newData.explainText;
    explainContent.innerHTML = `<p>${newText}</p>`;
    explainContentMobile.innerHTML = `<p>${newText}</p>`;
}

// 임시 버튼 클릭 시 데이터 업데이트 및 변경
const tempButton = document.getElementById('tempButton'); // 임시 버튼 선택

tempButton.addEventListener('click', function() {
  // 서버에서 가져온 새로운 데이터 예시
  const newServerData = {
      images: [
          'img/banner1.jpg',
          'img/banner2.jpg',
          'img/banner3.jpg'
          // ...새로운 이미지 URL을 서버에서 가져와 배열에 저장
      ],
      profileImage: 'img/son.jpg',
      name: '새로운 이름',
      phoneNumber: '010-1111-2222',
      email: 'new@naver.com',
      career: [
          '새로운 경력1',
          '새로운 경력2'
          // ...새로운 경력 정보를 서버에서 가져와 배열에 저장
      ],
      likeCount: 20, // 새로운 좋아요 수
      explainText: '새로운 설명 내용입니다.',
      title : '새로운 타이틀'

  };

  // 데이터 업데이트 및 해당 정보 변경 함수 호출
  updateInformation(newServerData);
});
