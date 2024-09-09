let btns = document.querySelectorAll(".clicker");

btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.border = "5px solid rosybrown";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.border = "none";
  });
});
