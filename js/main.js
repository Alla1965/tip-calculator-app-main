import { calculate } from "./calculate.js";
import { customPrompt } from "./modal.js";
// Отримуємо елементи
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const percentRadios = document.querySelectorAll(".percent-item-input");

const tipAmountOut = document.querySelector(".tip-par-sum");
const totalAmountOut = document.querySelector(".tip-par-sum-total");

const resetBtn = document.querySelector(".btn-sum"); // <— твоя кнопка RESET
console.log(billInput);
console.log(peopleInput);
console.log(percentRadios);
console.log(tipAmountOut);
console.log(totalAmountOut);

// Відслідковуємо вибір radio
percentRadios.forEach((radio) => {
  radio.addEventListener("change", async () => {
    if (radio.value === "custom") {
      const value = await customPrompt();
      if (!value) return;

      radio.dataset.custom = value; // записуємо дані в атрибут
      console.log(radio.dataset.custom);
    }
  });
});

// Подія натискання кнопки
resetBtn.addEventListener("click", () => {
  calculate(
    billInput,
    peopleInput,
    percentRadios,
    tipAmountOut,
    totalAmountOut
  );
});
