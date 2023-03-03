const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const checkName = () => {
  let valid = false;

  const min = 3;
  const max = 26;

  const name = nameInput.value.trim();

  if (isEmpty(name)) {
    showError(nameInput, "El nombre es obligatorio");
  } else if (!isBetween(name.length, min, max)) {
    showError(
      nameInput,
      `El nombre debe tener entre ${min} y ${max} caracteres.`
    );
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  if (isEmpty(emailInput)) {
    showError(emailInput, "El mail es obligatorio");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "Por favor, ingresar un mail valido");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();

  if (isEmpty(password)) {
    showError(passInput, "La contraseña es obligatoria");
  } else if (!isPassSecure(password)) {
    showError(
      passInput,
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo"
    );
  } else {
    showSuccess(passInput);
    valid = true;
  }

  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = phoneInput.value.trim();
  if (isEmpty(phone)) {
    showError(phoneInput, "El telefono es obligatorio");
  } else if (!isPhoneValid(phoneValue)) {
    showError(phoneInput, "Por favor, ingresar un telefono valido");
  } else {
    showSuccess(phoneInput);
    valid = true;
  }
  return valid;
};

const isEmpty = (value) => value === "";

const isBetween = (length, min, max) => {
  return length < min || length > max ? false : true;
};

const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  return re.test(email);
};

const isPassSecure = (pass) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  return re.test(pass);
};

const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;

  return re.test(phone);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const debounce = (fn, delay = 500) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  checkPassword();
  checkPhone();
});
