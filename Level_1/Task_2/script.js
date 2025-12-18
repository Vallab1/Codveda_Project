// GET FORM ELEMENTS
const form = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const togglePass = document.getElementById("togglePass");

// SHOW / HIDE ERROR MESSAGE
function showError(input, message) {
    const error = input.parentElement.querySelector(".error");
    error.innerText = message;
    error.style.visibility = "visible";
    input.style.border = "1px solid red";
}

function clearError(input) {
    const error = input.parentElement.querySelector(".error");
    error.innerText = "";
    error.style.visibility = "hidden";
    input.style.border = "1px solid #ccc";
}

// VALIDATION FUNCTIONS
function validateName() {
    if (nameInput.value.trim().length < 3) {
        showError(nameInput, "Enter the proper name.");
        return false;
    }
    clearError(nameInput);
    return true;
}

function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value.trim())) {
        showError(emailInput, "Enter the valid email.");
        return false;
    }
    clearError(emailInput);
    return true;
}

function validatePhone() {
    if (!/^[0-9]{10}$/.test(phoneInput.value.trim())) {
        showError(phoneInput, "Enter the valid  contact number.");
        return false;
    }
    clearError(phoneInput);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;

    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    if (value.length < 8 || !(hasUpper && hasLower && hasNumber && hasSpecial)) {
        showError(passwordInput, "Enter the valid password.");
        return false;
    }
    clearError(passwordInput);
    return true;
}

// REAL-TIME VALIDATION
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
passwordInput.addEventListener("input", validatePassword);

// SHOW / HIDE PASSWORD
togglePass.addEventListener("click", () => {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
});

// FORM SUBMIT 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    if (!validateName()) errors.push("Name");
    if (!validateEmail()) errors.push("Email");
    if (!validatePhone()) errors.push("Phone Number");
    if (!validatePassword()) errors.push("Password");

    if (errors.length > 0) {
        alert("Fill the all required input " + errors.join(", "));
        return;
    }

    alert("Form submitted successfully!");
    form.reset();
});
