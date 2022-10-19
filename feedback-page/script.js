const blackStar = document.querySelectorAll(".star-image-black");

// for (let i = 0; i < blackStar.length; i++) {
//   blackStar[i].addEventListener("mouseover", function () {
//     blackStar[i].classList.add("star-image");
//   });

//   blackStar[i].addEventListener("mouseleave", function () {
//     blackStar[i].classList.remove("star-image");
//   });
// }

blackStar.forEach((star, index) => {
    star.addEventListener('mouseover', function() {
        blackStar.forEach((otherStars, prevIndex) => {
            if (prevIndex <= index) {
                otherStars.classList.add("star-image");
            }
        })
    })
    star.addEventListener('mouseleave', function() {
        blackStar.forEach((otherStars, prevIndex) => {
            if (prevIndex <= index) {
                otherStars.classList.remove("star-image");
            }
        })
    })

star.addEventListener('click', function() {
        blackStar.forEach((otherStars, prevIndex) => {
            if (prevIndex <= index) {
                otherStars.classList.add("star-image-important");
            } else {
                otherStars.classList.remove("star-image-important");
            }
        })
    })
})