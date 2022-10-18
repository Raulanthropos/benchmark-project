const blackStar = document.querySelectorAll(".star-image-black");
console.log(blackStar);

for (let i = 0; i < blackStar.length; i++) {
blackStar[i].addEventListener('mouseover', function() {
    blackStar[i].classList.add("star-image");
})

blackStar[i].addEventListener('mouseleave', function() {
    blackStar[i].classList.remove("star-image");
})
}