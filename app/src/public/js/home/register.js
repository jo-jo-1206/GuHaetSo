console.log("hello register");

const input_name = document.querySelector("#name");
const input_category = document.querySelector("#category");
const input_phoneNumber = document.querySelector("#phone-number");
const input_email = document.querySelector("#email");
const input_id = document.querySelector("#id");
const input_password = document.querySelector("#password");
const input_confirmPassword = document.querySelector("#confirm-password");

const btnRegister = document.querySelector("#btn_register");

btnRegister.addEventListener("click", function(event) {
    event.preventDefault();
    register();
});

function register() {
    if (!input_id.value || !input_category.value || !input_phoneNumber.value || !input_email.value) {
        return alert("모든 정보를 입력해주세요.");
    }
    
    if (input_password.value != input_confirmPassword.value) {
        return alert("비밀번호를 확인해주세요.");
    }

    const req = {
        name: input_name.value,
        category: input_category.value,
        phoneNumber: input_phoneNumber.value,
        email: input_email.value,
        id: input_id.value,
        password: input_password.value,
    };

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
            location.href = "/login";
        } else {
            // 회원가입 실패
            alert(res.msg);
        }
        })
        .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생", err));
    });
}