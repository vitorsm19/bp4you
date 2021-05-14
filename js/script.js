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


var glide = new Glide('#glide', {
  type: 'carousel',
  perView: 3.3,
  focusAt: 'center',
  breakpoints: {
    767: {
      perView: 2
    }
  }
})

glide.mount()