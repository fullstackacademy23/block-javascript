const btnBackground = document.querySelector(".btn-bc");
const btnTitle = document.querySelector(".btn-title");
const btnCircle = document.querySelector(".btn-circle");
const mainTitle = document.querySelector("#title");
const body = document.querySelector("body");

console.log(btnCircle);

btnBackground.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

btnTitle.addEventListener("click", () => {
    mainTitle.textContent = "I am very hungry !";
});

btnCircle.addEventListener("click", () => {
    const circle = document.createElement("div");
    console.log(circle);
    circle.style.width = "200px";
    circle.style.height = "200px";
    circle.style.borderRadius = "100%";
    circle.style.border = "1px solid red";
    body.append(circle);
});
