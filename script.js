const displayId = document.querySelector("#advice-id");
const displayAdvice = document.querySelector("#advice-text");
const adviceButton = document.querySelector("#advice-button");

async function adviceSlip() {
    const randomId = Math.floor(Math.random() * 225) + 1;

    let response = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
    let advice = await response.json();

    displayId.textContent = `#${advice.slip.id}`;
    displayAdvice.textContent = `"${advice.slip.advice}"`;
}

adviceButton.addEventListener("click", adviceSlip);
adviceSlip();
