const checkbox = document.getElementById("checkbox-play");
const proceedButton = document.getElementById("proceed-button");
const buttonLink = document.querySelector(".no-pointer");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    proceedButton.disabled = false;
    proceedButton.classList.toggle("no-click");
    buttonLink.classList.toggle("no-pointer");
  } else {
    proceedButton.disabled = true;
    proceedButton.classList.toggle("no-click");
    buttonLink.classList.toggle("no-pointer");
  }
});
