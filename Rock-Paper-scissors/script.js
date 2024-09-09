// here in random function 0 = rock , 1 = paper , 2 = scissor
let btns = document.querySelectorAll(".clicker");
let result = document.querySelector(".move");

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
      result.style.background = "red";
    } else {
      result.innerHTML = "You Won!!";
      result.style.background = "darkseagreen";
    }
  });
});
