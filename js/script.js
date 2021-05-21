const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


var glide = new Glide('.glide', {
  type: 'carousel',
  perView: 2.5,
  focusAt: 1,
  startAt: 0,
  dragDistance: false,
  touchDistance:false,
  breakpoints: {
    768: {
      perView: 1,
      focusAt: 1
    }
  }
})

glide.mount()