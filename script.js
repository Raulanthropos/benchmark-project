const checkbox = document.getElementById("checkbox-play");
const proceedButton = document.getElementById("proceed-button");

checkbox.addEventListener('click', function(e) {
    console.log(e.currentTarget.value);
    const onEnable = e.currentTarget.value;
    if (onEnable === "on") {
        proceedButton.disabled = false;
    } else {
        proceedButton.disabled = true;
    }
})
