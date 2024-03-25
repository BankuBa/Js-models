const openModelElement = document.querySelector("#openModel");

const modelElement = document.querySelector(".model");

const modelContentElement = document.querySelector(".model__content");

openModelElement.addEventListener("click", () => {
  modelElement.classList.add("open");
})

modelContentElement.addEventListener("click", () => {
  modelElement.classList.remove("open")
})