const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");

yesButton.addEventListener("click", () => {
  alert("Great! I like you too!");
});

noButton.addEventListener("click", () => {
  var randomX = Math.floor(Math.random() * 100) - 50;
  var randomY = Math.floor(Math.random() * 100) - 50;

  noButton.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
});
