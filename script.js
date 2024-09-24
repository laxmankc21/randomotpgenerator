const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopwrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%*()_+|[]<>/-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
const generatebtn = document.getElementById("generatebtn");
generatebtn.addEventListener("click", createPassword);

function copypassword() {
  passwordBox.select();
  document.execCommand("copy");
  alert("password copy to clipboeard");
}
