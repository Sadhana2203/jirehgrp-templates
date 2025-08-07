// script.ts

let count = 0;
const btn = document.getElementById('count-btn') as HTMLButtonElement | null;

btn?.addEventListener('click', () => {
  count++;
  if (btn) btn.textContent = `Count: ${count}`;
});
