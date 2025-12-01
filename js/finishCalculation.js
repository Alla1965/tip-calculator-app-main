export function finishCalculation(
  bill,
  people,
  percent,
  tipAmountOut,
  totalAmountOut
) {
  const tip = (bill * percent) / 100 / people;
  const total = (bill + (bill * percent) / 100) / people;

  tipAmountOut.textContent = tip.toFixed(2);
  totalAmountOut.textContent = total.toFixed(2);
}
