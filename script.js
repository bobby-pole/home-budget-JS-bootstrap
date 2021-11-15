document.addEventListener("DOMContentLoaded", () => {
  const incomeList = document.querySelector("#incomes-list");
  const incomeForm = document.querySelector("#incomes-form");
  const incomeName = incomeForm.querySelector("#income-name");
  const incomeValue = incomeForm.querySelector("#income-amount");

  function addIncome(text) {
    console.log("Dodaj przychód");
  }

  incomeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (incomeName.value !== "") {
      addIncome(incomeName.value);
      incomeName.value = "";
    }
  });
});
