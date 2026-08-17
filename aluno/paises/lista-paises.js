import countries from './countries.js';

const container = document.querySelector('#countries');

countries.forEach(country => {
  const div = document.createElement('div');
  const h3 = document.createElement('h3');

  h3.textContent = country;
  div.appendChild(h3);

  container.appendChild(div)
});