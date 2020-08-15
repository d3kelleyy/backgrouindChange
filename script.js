const backgroundColors = [
  '#ABA9BF',
  '#BEB7DF',
  '#D4F2D2',
  '#34113F',
  '#868784',
];

const button = document.querySelector('button');

const div = document.querySelector('div');

const changeBackgroundAndFont = () => {
  const backgroundIndex = parseInt(Math.random() * backgroundColors.length);
  div.style.backgroundColor = backgroundColors[backgroundIndex];
};

button.addEventListener('click', changeBackgroundAndFont);
