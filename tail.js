import 'boxicons'


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("no-skew");
    } else {
      navbar.classList.remove("no-skew");
    }
  });