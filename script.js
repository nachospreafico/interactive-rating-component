const ratingBtns = document.querySelectorAll(".rating-num");
const submitBtn = document.querySelector("#submit");

submitBtn.disabled = true;

const thankYouMsg = document.querySelector(".success-container");

let selectedBtn = null;

ratingBtns.forEach((btn) => {
  btn.onclick = (e) => {
    if (selectedBtn !== null) {
      selectedBtn.style.backgroundColor = "";
      selectedBtn.style.color = "hsl(217, 12%, 63%)";
    }
    selectedBtn = e.target;
    selectedBtn.style.backgroundColor = "hsl(25, 97%, 53%)";
    selectedBtn.style.color = "white";
    submitBtn.disabled = false;
    document.querySelector("#selected-rating").innerHTML =
      selectedBtn.getAttribute("data-value");
  };
});

submitBtn.onclick = () => {
  setTimeout(() => {
    thankYouMsg.style.display = "flex";
  }, 3000);
};
