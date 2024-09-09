// here in random function 0 = rock , 1 = paper , 2 = scissor
let btns = document.querySelectorAll(".select");
let result = document.querySelector(".result");
let c = 0;
let y = 0;
let com_number = document.querySelector("#com_number");
let You = document.querySelector("#You");
com_number.innerHTML = c;
You.innerHTML = y;
btns.forEach((btn, index) => {
  btn.addEventListener("mouseover", () => {
    btn.style.border = "5px solid orange";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.border = "none";
  });

  btn.addEventListener("click", () => {
    let computer_move = Math.floor(Math.random() * 3);
    console.log(`Button ${index} clicked`);
    console.log(`Computer move: ${computer_move}`);

    if (index === computer_move) {
      result.innerHTML = "It's a draw";
      result.style.background = "orange";
    } else if (
      (index === 0 && computer_move === 1) ||
      (index === 1 && computer_move === 2) ||
      (index === 2 && computer_move === 0)
    ) {
      result.innerHTML = "Computer won!!, You Lose";
      console.log("Computer won");
      com_number.innerHTML = parseInt(com_number.innerHTML) + 1;
      result.style.background = "red";
    } else {
      result.innerHTML = "You Won!!";
      console.log("You won");
      result.style.background = "darkseagreen";
      You.innerHTML = parseInt(You.innerHTML) + 1;
    }
  });
});
