let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let updatePasswordFormEl = document.getElementById("updatePasswordForm");


function validatenewpassword() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }

}

function validatechangepassword() {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else if (confirmPasswordEl.value !== newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "password must be match with the previous";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}
newPasswordEl.addEventListener("blur", validatenewpassword);
confirmPasswordEl.addEventListener("blur", validatechangepassword);
updatePasswordFormEl.addEventListener("submit", function() {
    event.preventDefault();
    validatenewpassword();
    validatechangepassword();
});