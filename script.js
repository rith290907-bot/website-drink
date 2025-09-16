const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
  question.innerHTML = "តោះចឹង!";
  gif.src = "https://media3.giphy.com/media/iCVzZwwE6QNAV2tEE0/source.gif";
});
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY = "px";
});
