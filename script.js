"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".dog-img");

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

function handleYesClick() {
  titleElement.innerHTML = "Vk iu sinh nhật vui vẻ ạ =(( Ck hứa không baoh dám xạo lồn với vợ nữa ạ =((";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Có cái cc",
    "Minh biết lỗi rồi mà ạ =((    Có cái lồn",
    "Mi tha thứ cho Minh nốt lần này đi mòoo =((    Câm",
    "Minh biết lừa dối với bỏ rơi Mi là sai rồi mà ạ =((    Cút",
    "Mi cho Minh qlai để tạ lỗi và bù đắp cho Mi đi mà ạ =((    Có cái đb",
    "Hẹ hẹ hẹ thế là Mi tha cho Minh rồi nhé =(( Hôm nào đi bú bóng đi vk yêu =(( Hẹ hẹ không từ chối đc nx đâu vk yêu =((",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/dog-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
