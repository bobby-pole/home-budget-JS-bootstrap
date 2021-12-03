const incomesForm = document.querySelector("#incomes-form");
const buttonGetIncome = document.querySelector("#in-btn");
const incomesList = document.querySelector("#incomesList");

const expensesForm = document.querySelector("#expenses-form");
const buttonGetExpense = document.querySelector("#ex-btn");
const expensesList = document.querySelector("#expensesList");

const incomeTotal = document.querySelector(".income-total");
const expenseTotal = document.querySelector(".expense-total");
const balance = document.querySelector("#balanceAmount");

let ENTRY_LIST = [];

incomesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const incomeNameValue = e.target.elements.incomeName.value;
  const incomeAmountValue = e.target.elements.incomeAmount.value;
  if (incomeAmountValue.trim() === "") return;

  const income = {
    id: uuid.v4(),
    type: "income",
    title: incomeNameValue,
    amount: parseFloat(incomeAmountValue),
  };

  ENTRY_LIST.push(income);

  recalculate("income");

  const li = `<li id="e_${income.id}" data-type="${income.type}">
    <input class="hidden" type="text" value="${income.title}" />
    <span class="static">${income.title}</span>
    <input class="hidden" type="number" value="${income.amount}" />
    <span class="static">${income.amount}</span>
    <button class="edit-btn" onmousedown="editElement('${income.id}')">Edytuj</button>
    <button class="hidden save-btn" onmousedown="saveElement('${income.id}', 'income')">Zapisz</button>
    <button id="delete-btn-in" onmousedown="deleteElement('${income.id}', 'income')">Usuń</button>
  </li>`;

  incomesList.innerHTML += li;
});

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const expenseNameValue = e.target.elements.expenseName.value;
  const expenseAmountValue = e.target.elements.expenseAmount.value;
  if (expenseAmountValue.trim() === "") return;

  const expense = {
    id: uuid.v4(),
    type: "expense",
    title: expenseNameValue,
    amount: parseFloat(expenseAmountValue),
  };

  ENTRY_LIST.push(expense);

  recalculate("expense");

  const li = `<li id="e_${expense.id}" data-type="${expense.type}">
    <input class="hidden" type="text" value="${expense.title}" />
    <span class="static">${expense.title}</span>
    <input class="hidden" type="number" value="${expense.amount}" />
    <span class="static">${expense.amount}</span>
    <button class="edit-btn" onmousedown="editElement('${expense.id}')">Edytuj</button>
    <button class="hidden save-btn" onmousedown="saveElement('${expense.id}', 'expense')">Zapisz</button>
    <button id="delete-btn-ex" onmousedown="deleteElement('${expense.id}', 'expense')">Usuń</button>
  </li>`;

  expensesList.innerHTML += li;
});

const recalculate = (type) => {
  const valueArray = ENTRY_LIST.filter((el) => el.type === type);
  const newValue =
    valueArray.length === 0
      ? { amount: 0 }
      : valueArray.reduce((a, b) => {
          return {
            amount: a.amount + b.amount,
          };
        });
  if (type === "income") {
    incomeTotal.textContent = newValue.amount;
  } else {
    expenseTotal.textContent = newValue.amount;
  }

  const totalBalance =
    parseFloat(incomeTotal.textContent) - parseFloat(expenseTotal.textContent);

  if (totalBalance < 0) {
    balance.textContent = `Jesteś na minusie: ${totalBalance}`;
  } else if (totalBalance === 0) {
    balance.textContent = `Bilans wynosi zero`;
  } else {
    balance.textContent = `Możesz jeszcze wydać ${totalBalance} złotych`;
  }
};

const editElement = (id) => {
  document
    .querySelectorAll(`#e_${id} .hidden, #e_${id} .save-btn`)
    .forEach((el) => el.classList.remove("hidden"));
  document
    .querySelectorAll(`#e_${id} .static, #e_${id} .edit-btn`)
    .forEach((el) => el.classList.add("hidden"));
};

const saveElement = (id, type) => {
  const titleElement = document.querySelector(
    `#e_${id} input[type="text"]+span.static`
  );
  const titleValue = document.querySelector(
    `#e_${id} input[type="text"]`
  ).value;

  titleElement.textContent = titleValue;

  const amountElement = document.querySelector(
    `#e_${id} input[type="number"]+span.static`
  );
  const amountValue = document.querySelector(
    `#e_${id} input[type="number"]`
  ).value;

  amountElement.textContent = amountValue;

  document
    .querySelectorAll(`#e_${id} .hidden, #e_${id} .edit-btn`)
    .forEach((el) => el.classList.remove("hidden"));
  document
    .querySelectorAll(`#e_${id} input, #e_${id} .save-btn`)
    .forEach((el) => el.classList.add("hidden"));

  const target = ENTRY_LIST.find((el) => el.id === id);
  target.amount = parseFloat(amountValue);
  target.title = titleValue;

  recalculate(type);
};

const deleteElement = (id, type) => {
  ENTRY_LIST = ENTRY_LIST.filter((e) => e.id !== id);
  document.querySelector(`#e_${id}`).remove();
  recalculate(type);
};
