const hamb = document.querySelector(".burger");
const list = document.querySelector(".header-items");

hamb.addEventListener("click", () => {
  list.classList.toggle("active");
});
list.addEventListener("click", () => {
  list.classList.toggle("active");
});
