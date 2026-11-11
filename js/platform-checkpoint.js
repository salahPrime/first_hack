(() => {
  const destinations = {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
  };

  const page = document.querySelector("[data-platform]");
  const confirmation = document.querySelector("#checkpoint-confirmation");
  const continueButton = document.querySelector("#checkpoint-continue");
  const status = document.querySelector("#checkpoint-status");
  const destination = destinations[page?.dataset.platform];

  if (!destination || !confirmation || !continueButton || !status) return;

  confirmation.addEventListener("change", () => {
    continueButton.disabled = !confirmation.checked;
    status.textContent = confirmation.checked
      ? "Thanks. You can continue to the official website."
      : "Confirm that you have read the reminder to continue.";
  });

  continueButton.addEventListener("click", () => {
    if (!confirmation.checked) return;
    window.location.assign(destination);
  });
})();
