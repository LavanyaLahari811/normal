const yesShop = document.querySelector("#yesShop");
const noButton = document.querySelector("#no");

yesShop.addEventListener("click", () => {
  window.location.href = "./index3.html";
});

noButton.addEventListener("click", () => {
  var randomX = Math.floor(Math.random() * 100) - 50;
  var randomY = Math.floor(Math.random() * 100) - 50;

  noButton.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
});
