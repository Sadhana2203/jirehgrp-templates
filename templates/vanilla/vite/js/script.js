// script.js

let count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('count-btn');

  btn?.addEventListener('click', () => {
    count++;
    btn.textContent = `Count: ${count}`;
  });
});
