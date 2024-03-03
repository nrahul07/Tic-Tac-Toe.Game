// let games = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-button");
// let newGamebtn = document.querySelector(".new-game-button");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector(".msg");

// let turnO = true;

// let winningPattent = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// const resetGame = () => {
//   turnO = true;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// }

// games.forEach((box) => {
//   box.addEventListener(("click"), () => {
//     if (turnO) {
//       box.innerText = "O";
//       turnO=false;
//     }
//     else {
//       box.innerText = "X";
//       turnO=true;
//     }
//     box.disabled = true;

//     checkWinner();
//   });
// });

// const disableBoxes = () => {
//   for (let box of games) {
//     box.disabled = true;
//   }
// }

// const enableBoxes = () => {
//   for (let box of games) {
//     box.disabled = false;
//     box.innerText= "";
//   }
// }

// const showWinner = (winner) => {
//   msg.innerText = `Congrats, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   newGamebtn.classList.remove("hide");
//   disableBoxes();
// }

// let checkWinner = () => {
//   for (let chance of winningPattent) {
//     let val1=games[chance[0]].innerText;
//     let val2=games[chance[1]].innerText;
//     let val3=games[chance[2]].innerText;

// if (val1 != "" && val2!= "" && val3!= "") {
//   if (val1 === val2 && val2 === val3) {
//     console.log("Winner", val1);
//     showWinner(val1);
//   }
// }

//   }
// } 


// newGamebtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

let target = "dad";

let revTarget = () => {
  // let revTar = target.toString().split("").reverse().join("");
  // let realValue = target.toString();
  // if (revTar === realValue){
  //   console.log("Its a Palindrome");
  // }
  // else {
  //   console.log("Not a Palindrome");
  // }
  let revTar = target.toString();
  console.log(revTar);
}

revTarget();