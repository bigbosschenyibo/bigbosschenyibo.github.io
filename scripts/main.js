let head = document.querySelector("h1");
head.textContent = "前端练手记录";

let image = document.querySelector("img");
image.addEventListener("click", (s, e) => {
  let imag_src = image.getAttribute("src");
  if (imag_src === "images/header.jfif") {
    image.src = "images/firefox-icon.png";
  } else {
    image.src = "images/header.jfif";
  }
});

function sayHello() {
  alert("hello");
}
