const backgroundColors = [
  '#ABA9BF',
  '#BEB7DF',
  '#D4F2D2',
  '#34113F',
  '#868784',
];

const button = document.querySelector('button');

const div = document.querySelector('div');

const changeBackground = () => {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  div.style.backgroundColor = backgroundColors[randomIndex];
};

button.addEventListener('click', changeBackground);
