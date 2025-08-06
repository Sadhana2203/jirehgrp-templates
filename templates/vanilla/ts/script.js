"use strict";
// script.ts
let count = 0;
const btn = document.getElementById('count-btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    count++;
    if (btn)
        btn.textContent = `Count: ${count}`;
});
