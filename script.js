// اختر العناصر
const box = document.getElementById('box');
const btn = document.getElementById('btn');

// أضف حدث عند الضغط على الزر
btn.addEventListener('click', () => {
    // غيّر لون المربع من أحمر إلى أزرق أو العكس
    box.style.backgroundColor = box.style.backgroundColor === 'red' ? 'blue' : 'red';
});
