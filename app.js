const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
btn.addEventListener("click", (e) => {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    // const randomNum = getRandomNumber();
    hex += hexColor[getRandomNumber()];
  }
  document.body.style.backgroundColor = hex;
  color.textContent = hex;
  //   document.body.style.backgroundColor = colors[randomNum];
  //   color.textContent = colors[randomNum];
});
function getRandomNumber() {
  //   return Math.floor(Math.random() * colors.length);
  return Math.floor(Math.random() * hexColor.length);
}
