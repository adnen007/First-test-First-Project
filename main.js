let bars = document.querySelector("header .bars");

let ul = document.querySelector("header ul ");

let head = document.querySelector("header");

bars.onclick = function () {
  bars.classList.toggle("active");
  ul.classList.toggle("active");
};

window.onscroll = function () {
  if (window.scrollY >= 100) {
    head.style.backgroundColor = "rgb(41 42 39)";
  } else {
    head.style.backgroundColor = "transparent";
  }
};
