export function customPrompt() {
  return new Promise((resolve) => {
    const modal = document.getElementById("custom-prompt");
    const input = document.getElementById("customPromptInput");
    const okBtn = document.getElementById("customPromptOk");
    console.log(prompt);
    console.log(customPromptInput);
    console.log(customPromptOk);

    modal.classList.remove("hidden");
    input.value = "";
    input.focus();

    okBtn.onclick = () => {
      modal.classList.add("hidden");
      resolve(parseFloat(input.value));
    };
  });
}
