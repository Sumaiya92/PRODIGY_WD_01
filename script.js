const nav = document.querySelector("nav");
console.log("nav", nav);
function scroll() {
  console.log("scroll");
  if (window.scrollY > 0) {
    console.log("scroll is greater");
    nav.style.position = "fixed";
    nav.style.backgroundColor = "#0096c7";
    nav.style.color = "white";
  } else {
    nav.style.position = "fixed";
    nav.style.backgroundColor = "transparent";
    nav.style.color = "black";
  }
}
scroll();
window.addEventListener("scroll", scroll);

// 
