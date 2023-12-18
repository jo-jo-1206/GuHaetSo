// URL에서 쿼리 매개변수(category) 가져오기
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

//보여줄 카테고리 리스트
let clean = ['청소', '에어컨 청소', '침대 청소', '소파 청소', '이사, 입주 청소', '세탁기 청소'];
let noBug = ['방충망', '방충망 청소', '방충망 교체', '방충망 설치', '방충망 수리'];

// category-list div 요소 찾기
const categoryContainer = document.querySelector('.category-list');

//category-list의 항목을 바꾸는 함수 
function addNewCategory(categoryTitle, arr) {
    const newCategory = document.createElement('div');
    newCategory.classList.add('category-list');

    const title = document.createElement('h3');
    title.classList.add("category-big")
    title.textContent = categoryTitle;
    newCategory.appendChild(title);

    const categorySmall = document.createElement('div');
    categorySmall.classList.add('category-small');
    newCategory.appendChild(categorySmall);

    for (let i = 1; i < arr.length; i++) {
        const element = document.createElement('button');
        element.textContent = arr[i];
        categorySmall.appendChild(element);
    }

    categoryContainer.appendChild(newCategory);
}


// category 매개변수에 따라서 적절한 배열을 사용하여 요소 추가
if (category === 'clean') {
    categoryContainer.innerHTML = '';
    addNewCategory('청소', clean);
    addNewCategory('방충망', noBug);
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