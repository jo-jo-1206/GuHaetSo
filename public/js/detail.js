const reviewscore = document.getElementById("number");
const reviewStar = document.querySelector(".review-button");
let number = reviewscore.innerText;
let chk = false;
console.log(reviewStar.innerText);

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
      window.location.href = 'category.html?category=' + menu;
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

// URL에서 쿼리 매개변수(category) 가져오기
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

//보여줄 카테고리 리스트
let carRepair = [['부품교체','타이어','오일','필터','브레이크 패드'],['자동차 검사','전체 검사','부분 검사'],['세차 및 도색','세차','도색']]
let making = [['디자인','명함','전단지','메뉴판','현수막'],['핸드메이드','뜨개질','쥬얼리','3D 프린팅']]
let lesson = [['운동','필라테스','PT','요가','크로스핏'],['음악','댄스','보컬','악기연주'],['그림','수채화','유화','디지털','크로키','서예']]
let interior = [['인테리어','필름,타일 시공','도배, 장판','조명','줄눈, 코킹','견적 상담']]
let pet = [['펫시터','탁묘, 탁견','방문 돌봄','산책','훈련'], ['미용','방문 미용','미용실']]
let clean = [['방문청소','에어컨 청소','입주청소','일반 청소','하수구 청소'],['방역','바퀴벌레','개미','그 외']]
let sports = [['스포츠 용역','축구','농구','야구','배구','배드민턴','기타']]
// category-list div 요소 찾기

const categoryContainer = document.querySelector('.category-list');

//category-list의 항목을 바꾸는 함수 
function addNewCategory(categoryTitle, categoryList) {
  
  categoryContainer.innerHTML = '';

  const mainTitle = document.createElement('h3');
  mainTitle.textContent = categoryTitle;
  categoryContainer.appendChild(mainTitle);

  for (let i = 0; i < categoryList.length; i++){

      const newCategory = document.createElement('div');
      newCategory.classList.add('category-list');

      const title = document.createElement('h4');
      title.classList.add("category-big")
      title.textContent = categoryList[i][0];
      newCategory.appendChild(title);

      const categorySmall = document.createElement('div');
      categorySmall.classList.add('category-small');
      newCategory.appendChild(categorySmall);

      for (let j = 1; j < categoryList[i].length; j++) {
          const element = document.createElement('button');
          element.textContent = categoryList[i][j];
          categorySmall.appendChild(element);
      }

      categoryContainer.appendChild(newCategory);
  }
}


// category 매개변수에 따라서 적절한 배열을 사용하여 요소 추가
switch (category){
  case 'clean' : 
      addNewCategory('청소 / 방역', clean);
      break;
  case 'car-repair' :
      addNewCategory('자동차 수리', carRepair);
      break;
  case 'making' :
      addNewCategory('제작의뢰', making);
      break;
  case 'lesson' :
      addNewCategory('취미 레슨', lesson);
      break;
  case 'interior' :
      addNewCategory('인테리어', interior);
      break;
  case 'dog' :
      addNewCategory('돌보미', pet);
      break;
  case 'sport' :
      addNewCategory('스포츠 용역', sports);
      break;
  default :
      alert ('잘못된 접근입니다.');
      break;
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
      window.location.href = 'detail.html'; // 현재 클릭한 Card에 대한 상세 페이지 URL로 이동
  });
});