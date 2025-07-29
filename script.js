"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".dog-img");
const kittyNo = document.getElementById("kitty-no");


const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

noButton.addEventListener("mouseover", () => {
  if (play) {
    const x = Math.random() * 80 - 40;
    const y = Math.random() * 80 - 40;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Vk iu sinh nhật vui vẻ ạ =(( Ck hứa không baoh dám xạo lồn với vợ nữa ạ =((";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  setTimeout(() => {
    alert("Vk đừng giận ck nữa mà 🥺🥺🥺🥺 Ck ăn năn hối hận lắm rồi ạ");
    showLoveTime();
  }, 800);

  const kitty = document.querySelector(".walking-kitty");
  kitty.src = "img/hello-kitty-walk.gif";
  kitty.classList.add("glow");

  const spark = document.createElement("div");
  spark.innerText = "💘";
  spark.style.position = "fixed";
  spark.style.left = `${yesButton.getBoundingClientRect().left + 30}px`;
  spark.style.top = `${yesButton.getBoundingClientRect().top - 20}px`;
  spark.style.fontSize = "3rem";
  spark.style.animation = "fadeInOut 1.5s ease forwards";
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 1500);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.4;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Có cái cc",
    "Minh biết lỗi rồi mà ạ =((",
    "Mi tha thứ cho Minh nốt lần này đi mòoo =((",
    "Minh biết lừa dối với bỏ rơi Mi là sai rồi mà ạ =((",
    "Mi cho Minh qlai để tạ lỗi và bù đắp cho Mi đi mà ạ =((",
    "Hẹ hẹ hẹ thế là Mi tha cho Minh rồi nhé =(( Hôm nào đi bú bóng đi vk yêu =(( Hẹ hẹ không từ chối đc nx đâu vk yêu =((",
  ];
  noButton.innerHTML = messages[Math.min(noCount, messages.length - 1)] +
    '<img src="img/hello-kitty-walk.gif" class="kitty-around-no" id="kitty-no">' +
    '<div class="think-cloud">TỞM VL !!! CÂM VÀ CÚT</div>';
  
  const kitty = document.getElementById("kitty-no");
  kitty.style.position = "absolute";
  kitty.style.animation = "circleAround 4s linear infinite";

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/dog-${image}.jpg`;
}

// Icon
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "kitty-heart";
  heart.innerText = ["🎉", "💖", "💘", "💗", "💕", "🥰", "😥", "🐶", "🌸"][
    Math.floor(Math.random() * 9)
  ];
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);

// Hẹ hẹ
function showLoveTime() {
  const container = document.createElement("div");
  container.className = "love-time";
  document.body.appendChild(container);

  container.innerHTML = `🥰 Hẹ hẹ hẹ hơn 3 tháng quen vk ck vui lắm ạ =(( 🥰`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
