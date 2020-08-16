const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.querySelector('button');

const container = document.querySelector('.container');

const value = document.getElementById('hex-value');

const changeHex = () => {
  let hex = '#';
  for (i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  value.textContent = hex;
  container.style.backgroundColor = hex;
};

button.addEventListener('click', changeHex);
