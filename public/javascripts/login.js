const formRegistre = document.getElementById("registration");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const confirmaEmail = document.getElementById("confirma-email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("password-two");

const btnCadastrar = document.querySelector(".button-resgitrer");

//abrir janela do formulário de cadastro para login
formRegistre.addEventListener("click", () => {
  containerRegistre.style.display = "block";
  username.value = "";
  email.value = "";
  confirmaEmail.value = "";
  password.value = "";
  passwordtwo.value = "";
});

//fecha janela do formulário
bntClose.addEventListener("click", () => {
  containerRegistre.style.display = "none";
});

//Logica para validação do cadastro
form.addEventListener("submit", (e) => {

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const confirmEmailValue = confirmaEmail.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordtwo.value.trim();

  if (usernameValue === "") {
    // mostrar erro
    // add classe  
    setErrorFor(username, "Preencha seu nome");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Minimo de 3 caracteres");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(username, "Aceito");
  };

  if (emailValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(email, "Preencha seu e-mail");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(email);
  };

  if (confirmEmailValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(confirmaEmail, "Preencha seu e-mail");
  } else if (confirmEmailValue !== confirmEmailValue) {
    setErrorFor(confirmaEmail, "Os e-mails não correpondem");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(confirmaEmail);
  };

  if (passwordValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(password, "Preencha sua senha");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Senha deve ter mais que 8 caracteres");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(password);
  };

  if (passwordtwoValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(passwordtwo, "Confirma sua senha");
  } else if (passwordValue !== passwordtwoValue) {
    setErrorFor(passwordtwo, "Senhas não correspondem");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(passwordtwo);
  };
};

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
};

function setSuccessFor(input) {
  const formControl = input.parentElement;

  /*   small.innerText = message; */

  formControl.className = "form-control success";
};

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
};

//Informa a quantidade de caracteres digitados
/* password.addEventListener("input", (event) => {
  const inputLength = event.target.value.length;
  const charsLeft = 8 - inputLength;

  if (charsLeft > 0) {
    spanPassword.innerText = "Curto demais";
    spanPassword.style.color = "#bababa";
    passwordColor.style.background = "#d74646";
    return;
  }

  if (inputLength >= 8 && inputLength <= 12) {
    spanPassword.innerText = "Bom trabalho";
    spanPassword.style.color = "#146fd6";
    passwordColor.style.background = "#146fd6";
    return;
  }

  if (inputLength >= 13) {
    spanPassword.innerText = "Perfeito";
    spanPassword.style.color = "#00b45d";
    passwordColor.style.background = "#00b45d";
    return;
  }
}); */
