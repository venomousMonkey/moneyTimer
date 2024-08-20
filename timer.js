let startTime;
let timerInterval;
let moneyPerSecond;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const moneyElement = document.getElementById('money');
const submitButton = document.getElementById('submitButton');
const displayText = document.getElementById('displayText');

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = ((elapsedTime % 60000) / 1000).toFixed(3);
  timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(6, '0')}`;

  // updating money counter
  const moneySeconds = elapsedTime / 1000;
  const money = (moneySeconds * moneyPerSecond).toFixed(2);
  moneyElement.textContent = `${money.toString().padStart(2.0)} PLN`;
}

function saveValue() {
  const savedValue = document.getElementById('salary').value;
  moneyPerSecond = savedValue / 21 / 8 / 60 / 60;
  document.getElementById('salary').value = '';
  displayText.textContent = `You earn ${moneyPerSecond} in each second !`;
}

startButton.addEventListener('click', startTimer);
submitButton.addEventListener('click', saveValue);
