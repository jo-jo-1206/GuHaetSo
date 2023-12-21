function assignButtonClickEvent(menu) {
    document.querySelectorAll('.' + menu).forEach(function (button) {
        button.addEventListener('click', function () {
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
let carRepair = [['부품교체', '타이어', '오일', '필터', '브레이크 패드'], ['자동차 검사', '전체 검사', '부분 검사'], ['세차 및 도색', '세차', '도색']]
let making = [['디자인', '명함', '전단지', '메뉴판', '현수막'], ['핸드메이드', '뜨개질', '쥬얼리', '3D 프린팅']]
let lesson = [['운동', '필라테스', 'PT', '요가', '크로스핏'], ['음악', '댄스', '보컬', '악기연주'], ['그림', '수채화', '유화', '디지털', '크로키', '서예']]
let interior = [['인테리어', '필름,타일 시공', '도배, 장판', '조명', '줄눈, 코킹', '견적 상담']]
let pet = [['펫시터', '탁묘, 탁견', '방문 돌봄', '산책', '훈련'], ['미용', '방문 미용', '미용실']]
let clean = [['방문청소', '에어컨 청소', '입주청소', '일반 청소', '하수구 청소'], ['방역', '바퀴벌레', '개미', '그 외']]
let sports = [['스포츠 용역', '축구', '농구', '야구', '배구', '배드민턴', '기타']]
// category-list div 요소 찾기

const categoryContainer = document.querySelector('.category-list');

//category-list의 항목을 바꾸는 함수 
function addNewCategory(categoryTitle, categoryList) {

    categoryContainer.innerHTML = '';

    const mainTitle = document.createElement('h3');
    mainTitle.textContent = categoryTitle;
    categoryContainer.appendChild(mainTitle);

    const select = document.createElement('select');
    select.classList.add('category-list');

    for (let i = 0; i < categoryList.length; i++) {

        const newCategory = document.createElement('div');
        newCategory.classList.add('category-list');

        const title = document.createElement('h4');
        title.classList.add("category-big")
        title.textContent = categoryList[i][0];
        newCategory.appendChild(title);

        const categorySmall = document.createElement('div');
        categorySmall.classList.add('category-small');
        newCategory.appendChild(categorySmall);

        const option = document.createElement('option');
        option.value = categoryList[i][0];
        option.textContent = categoryList[i][0];
        option.disabled = true;
        select.appendChild(option);

        for (let j = 1; j < categoryList[i].length; j++) {
            const element = document.createElement('button');
            element.textContent = categoryList[i][j];
            categorySmall.appendChild(element);

            const option = document.createElement('option');
            option.value = categoryList[i][j];
            option.textContent = categoryList[i][j];
            select.appendChild(option);
        }

        const option2 = document.createElement('option');
        option2.value = "blank";
        option2.textContent = "ーーーー";
        option2.disabled = true;
        select.appendChild(option2);

        categoryContainer.appendChild(select);
        categoryContainer.appendChild(newCategory);
    }
}


// category 매개변수에 따라서 적절한 배열을 사용하여 요소 추가
switch (category) {
    case 'clean':
        addNewCategory('청소 / 방역', clean);
        break;
    case 'car-repair':
        addNewCategory('자동차 정비', carRepair);
        break;
    case 'making':
        addNewCategory('제작의뢰', making);
        break;
    case 'lesson':
        addNewCategory('취미 레슨', lesson);
        break;
    case 'interior':
        addNewCategory('인테리어', interior);
        break;
    case 'dog':
        addNewCategory('돌보미', pet);
        break;
    case 'sport':
        addNewCategory('스포츠 용역', sports);
        break;
    default:
        alert('잘못된 접근입니다.');
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

// 이벤트 위임을 사용하여 버튼 클릭 시 처리
categoryContainer.addEventListener('click', function (e) {
    const target = e.target;
    // category-small 클래스를 가진 요소 안의 버튼을 클릭했을 때만 작동하도록
    if (target.parentElement.classList.contains('category-small')) {

        if (target.tagName === 'BUTTON') {
            // 기존에 선택된 요소가 있을 경우 선택 해제
            const prevSelected = categoryContainer.querySelector('.selected');
            if (prevSelected) {
                prevSelected.classList.remove('selected');
            }

            // 선택한 요소의 텍스트 색상을 검정으로 변경
            target.classList.add('selected');
        }
    }
});



// card 작성
// 예시로 가져온 데이터
const serverData = {
    imageUrl: 'img/aircon.jpg',
    cardName: '새로운 가게',
    cardTitle: '새로운 제목'
};
//예시 카드 생성 버튼 
function createCardButton() {
// 새로운 카드 생성 및 추가 
const newCard = createCard(serverData);
const cardContainer = document.querySelector('.list'); // 카드를 추가할 컨테이너 선택
cardContainer.appendChild(newCard); // 새로운 카드를 컨테이너에 추가
}
function createCard(data) {
    // 새로운 div 요소 생성
    const newCard = document.createElement('div');
    newCard.classList.add('Card');
    // 이미지 요소 생성
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('sample-image', 'item1');
    const image = document.createElement('img');
    image.src = data.imageUrl;
    image.alt = 'content-img';
    image.addEventListener('load', function() {
        alert("로딩완료")
        image.width = '100%';
        image.height = '100%';
        // 이미지가 로드되면 이벤트 핸들러가 실행되어 크기가 설정될 것입니다.
    });
    imageDiv.appendChild(image);
    // card-name 요소 생성
    const cardName = document.createElement('p');
    cardName.classList.add('card-name');
    cardName.textContent = data.cardName;
    // card-title 요소 생성
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = data.cardTitle;
    // 생성한 요소들을 새로운 Card에 추가
    newCard.appendChild(imageDiv);
    newCard.appendChild(cardName);
    newCard.appendChild(cardTitle);
    return newCard;
}
