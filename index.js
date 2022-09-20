const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");
const cost = document.querySelector(".cost");

const checkForm = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Uzupełnij wszystkie pola";
    costInfo.style.display = "none";
  } else {
    error.textContent = "";
    countBill();
  }
};
const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);

  const sum = (newPrice + newPrice * newTip) / newPeople;

  console.log(newPrice);
  console.log(newTip);

  costInfo.style.display = "block";
  cost.textContent = sum.toFixed(2);
};

countBtn.addEventListener("click", checkForm);
