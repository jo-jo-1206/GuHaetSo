console.log("hello register");

const input_name = document.querySelector("#name");
const input_email = document.querySelector("#email");
const input_id = document.querySelector("#id");
const input_password = document.querySelector("#password");
const input_confirmPassword = document.querySelector("#confirm-password");

const btnRegister = document.querySelector("#btn_register");

function register() {
    const errorMessages = document.querySelectorAll('.error-message');
    const submitButton = document.querySelector('.submit-button');

    console.log(submitButton.classList.contains('filled'));
    if (errorMessages.length > 0 || !submitButton.classList.contains('filled')) {
        alert('입력 항목을 확인해주세요.');
        return;
    }

    if (input_password.value != input_confirmPassword.value) {
        return alert("비밀번호를 확인해주세요.");
    }

    const req = {
        user_id: input_id.value,
        user_name: input_name.value,
        user_password: input_password.value,
        user_email: input_email.value,
    };

    console.log(req);
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                // 회원가입 성공
                // 회원가입 완료 창을 보여줍니다.
                const successDialog = document.createElement('div');
                successDialog.innerHTML = `
        <div class="complete-signup">
            <h2>회원가입이 완료되었습니다!</h2>
            <button id="okButton">메인 페이지로 이동</button>
        </div>
    `;
                document.body.appendChild(successDialog);
                const okButton = document.getElementById('okButton');
                okButton.addEventListener('click', function () {
                    location.href = '/login';
                });

            } else {
                // 회원가입 실패
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생", err));
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.submit-button');
    const form = document.getElementById('signup-form');

    // 입력 필드의 blur 이벤트에 유효성 검사 함수를 추가
    form.querySelectorAll('.input-box').forEach(input => {
        input.addEventListener('blur', validateInput);
    });

    // 입력 필드에 입력이 있을 때마다 실행되는 이벤트
    form.addEventListener('input', toggleSubmitButton);

    // Submit 버튼을 활성화/비활성화 하는 함수
    function toggleSubmitButton() {
        const inputs = form.querySelectorAll('.input-box');
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });

        if (allFilled) {
            submitButton.classList.add('filled');
        } else {
            submitButton.classList.remove('filled');
        }
    }

    //입력 필드에서 입력이 끝날 때 마다 실행되는 함수
    function validateInput(event) {
        const input = event.target;
        const value = input.value.trim();
        const errorElement = input.nextElementSibling;

        switch (input.name) {
            case 'email':
                if (!isValidEmail(value)) {
                    showError(input, '올바른 이메일 형식이 아닙니다.');
                } else {
                    if (errorElement && errorElement.classList.contains('error-message')) {
                        errorElement.remove();
                    }
                }
                break;
            case 'pw':
                if (!isValidPassword(value)) {
                    showError(input, '비밀번호는 영문 + 숫자 조합의 8자리 이상이어야 합니다.');
                } else {
                    if (errorElement && errorElement.classList.contains('error-message')) {
                        errorElement.remove();
                    }
                }
                break;
            case 'pw2':
                const pwValue = document.querySelector('input[name="pw"]').value.trim();
                if (value !== pwValue) {
                    showError(input, '비밀번호가 일치하지 않습니다.');
                } else {
                    if (errorElement && errorElement.classList.contains('error-message')) {
                        errorElement.remove();
                    }
                }
                break;
            default:
                // 다른 필드의 추가 유효성 검사가 없는 경우, 입력이 유효할 때 오류 메시지 삭제
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.remove();
                }
                break;
        }
    }


    btnRegister.addEventListener("click", function (event) {
        event.preventDefault();
        register();
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 아무문자 @ 아무문자 . 아무문자 검사 (이메일 정규식)
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // 비밀번호는 영문 + 숫자 조합의 8자리 이상
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 최소하나의 영문자, 숫자가 있어야하며 총 8자 이상이어야함
    return passwordRegex.test(password);
}

function showError(field, message) {
    const nextElement = field.nextElementSibling;
    if (nextElement && nextElement.classList.contains('error-message')) {
        // 오류 메시지가 이미 있다면 추가하지 않고 종료
        return;
    }
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;

    // 입력 필드 바로 아래에 오류 메시지를 추가합니다.
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}