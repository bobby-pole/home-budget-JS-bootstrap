let balance = 0;
let incomes = 0;
let expenses = 0;
let ENTRY_LIST = [];

let balanceElement = document.querySelector("#balanceAmount");
let incomesTotalElement = document.querySelector(".income-total");
let expensesTotalElement = document.querySelector(".expense-total");
// document.addEventListener("DOMContentLoaded", () => {
//   const balanceEl = document.querySelector("#amountLeft");
//   const incomeEl = document.querySelector("#income");
//   const expenseEl = document.querySelector("#expense");

//   const incomeList = document.querySelector("#incomes-list");
//   const incomeForm = document.querySelector("#incomes-form");
//   const expenseList = document.querySelector("#expensesList");
//   const expenseForm = document.querySelector("#expenses-form");

//   const incomeTotalEl = document.querySelector(".income-total");
//   const expenseTotalEl = document.querySelector(".expense-total");

//   let ENTRY_LIST = [];

//   incomeForm.addEventListener("submit", function () {
//     e.preventDefault();

//     if (!incomeName.value || !incomeAmount.value) return;
//     let income = {
//       type: "income",
//       title: incomeName.value,
//       amount: parseFloat(incomeAmount.value),
//     };

//     ENTRY_LIST.push(income);
//     updateUI();
//     clearInput([incomeName, incomeAmount]);

//     // console.log(e.target.elements.incomeName.value);

//     // const { incomeName, incomeAmount } = e.target.elements;
//     // console.log(incomeAmount.value);

//     // if (incomeName.value !== "") {
//     //   addIncome(incomeName.value);
//     //   incomeName.value = "";
//     // }
//   });

//   expenseForm.addEventListener("submit", function () {
//     e.preventDefault();

//     if (!expenseName.value || !expenseAmount.value) return;
//     let expense = {
//       type: "expense",
//       title: expenseName.value,
//       amount: parseFloat(expenseAmount.value),
//     };

//     ENTRY_LIST.push(expense);
//     updateUI();
//     clearInput([expenseName, expenseAmount]);
//   });

//   function calculateTotal(type, ENTRY_LIST) {
//     ENTRY_LIST.forEach((entry) => {
//       if (entry.type == type) {
//         sum += entry.amount;
//       }
//     });
//     return sum;
//   }

//   income = calculateTotal("income", ENTRY_LIST);

//   outcome = calculateTotal("expense", ENTRY_LIST);

//   balance = calculateBalance(income, outcome);

//   function calculateBalance(income, outcome) {
//     return income - outcome;
//   }

//   function addEntry(list, type, title, amount, id) {
//     const entry = ` <li id="${id}" class="${type} d-flex flex-row list-group-item list-group-item-dark"
//                       <div class="entry">${title}: ${amount}zł</div>
//                       <button class="btn btn-success mb-3 border text-center" name="edit">Edytuj</button>
//                       <button class="btn btn-success mb-3 border text-center" name="delete">Usuń</button>
//                     </li>`;

//     list.innerHTML(entry);
//   }

//   function updateUI() {
//     income = calculateTotal("income", ENTRY_LIST);
//     outcome = calculateTotal("expense", ENTRY_LIST);
//     balance = calculateBalance(income, outcome);

//     incomeTotalEl.innerHTML = `${income}zł`;
//     expenseTotalEl.innerHTML = `${outcome}zł`;
//     balanceEl.innerHTML = `${balance}zł`;

//     clearElement([incomeList, expenseList]);

//     ENTRY_LIST.forEach((entry, index) => {
//       if (entry.type == "income") {
//         showEntry(incomeList, entry.type, entry.title, entry.amount, index);
//       } else if (entry.type == "expense") {
//         showEntry(expenseList, entry.type, entry.title, entry.amount, index);
//       }
//     });
//   }

//   function deleteEntry(ENTRY) {
//     ENTRY_LIST.splice(ENTRY.id, 1);
//     updateUI();
//   }

//   function editEntry(ENTRY) {
//     deleteEntry(ENTRY);
//   }
// });
