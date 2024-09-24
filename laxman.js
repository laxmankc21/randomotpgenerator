// // // let password = "";
// // // let length = 12;
// // // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // // password += upperCase[Math.floor(Math.random())];

// // // console.log(password);
// // let password = "";
// // let length = 12;
// // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // // Generate a random uppercase letter
// // for (let i = 0; i < 5; i++) {
// //   password += upperCase[Math.floor(Math.random() * upperCase.length)];
// // }
// // console.log(password);
// let password = "";
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i < 5; i++) {
//   // Generate a random number between 0 and 25 (for the alphabet index)
//   let randomNumber = Math.floor(Math.random() * upperCase.length);

//   // Get the letter corresponding to the random number
//   let randomLetter = upperCase[randomNumber];

//   // Add the letter to the password
//   password += randomLetter;

//   // Show the random number and the corresponding letter
//   console.log(`Random Number: ${randomNumber}, Letter: ${randomLetter}`);
// }

// console.log(`Final Password: ${password}`);

let password = "";
let uppercase = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 5; i++) {
  let randomnumebr = Math.floor(Math.random() * uppercase.length);
  let randomlettr = uppercase[randomnumebr];
  password += randomlettr;
  console.log(`equivalent ${randomnumebr}, ${randomlettr}`);
}

console.log(password);
