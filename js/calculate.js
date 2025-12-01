import { customPrompt } from "./modal.js";
import { finishCalculation } from "./finishCalculation.js";

// Главная функция расчёта
export function calculate(
  billInput,
  peopleInput,
  percentRadios,
  tipAmountOut,
  totalAmountOut
) {
  console.log(billInput);

  const bill = parseFloat(billInput.value);
  console.log(bill);

  const people = parseInt(peopleInput.value);
  console.log(people);
  console.log("people value:", peopleInput.value);
  console.log("people parsed:", people);
  if (!bill || !people || people <= 0) {
    // Додамо клас помилки
    peopleInput.classList.add("input-error");
    console.log(peopleInput);
    const errorMsg = document.querySelector(".people-error");
    if (errorMsg) errorMsg.textContent = "Can't be zero";
    tipAmountOut.textContent = "0.00";
    totalAmountOut.textContent = "0.00";
    return;
  } else {
    // При нормальних даних прибираємо попередження
    peopleInput.classList.remove("input-error");
    const errorMsg = document.querySelector(".people-error");
    if (errorMsg) errorMsg.textContent = "";
  }

  // Определяем выбранный процент
  let percent = null;

  percentRadios.forEach((radio) => {
    if (radio.checked) {
      let value = radio.parentElement.textContent.trim();
      console.log(value);
      if (value === "Custom") {
        percent = parseFloat(radio.dataset.custom);
        console.log("Custom value:", percent);
        return; // зупиняємо функцію до введення числа
      } else {
        percent = parseFloat(value.replace("%", ""));
        console.log("Percent:", percent);
      }
    }
  });
  console.log(percent);

  if (!percent) return;

  // Расчёты
  const tip = (bill * percent) / 100 / people; // чаевые на человека
  const total = (bill + (bill * percent) / 100) / people; // итог на человека
  console.log(tip);
  console.log(total);
  // Вывод
  tipAmountOut.textContent = tip.toFixed(2);
  totalAmountOut.textContent = total.toFixed(2);
  console.log(tipAmountOut.textContent);
}
