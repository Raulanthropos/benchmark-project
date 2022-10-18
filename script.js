const checkbox = document.getElementById("checkbox-play");
const proceedButton = document.getElementById("proceed-button");

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        proceedButton.disabled = false;
        proceedButton.classList.remove("no-click")
    } else {
        proceedButton.disabled = true;
    }
})
