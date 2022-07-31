let bars = document.querySelector("header .bars");

let ul = document.querySelector("header ul ");
let head = document.querySelector("header");

let lis = ul.querySelectorAll("li");


lis.forEach((e) => {
  e.addEventListener('click', () => {
    console.log(e.parentElement)
    e.parentElement.classList.remove('active')
    bars.classList.remove('active')
  })
})

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
