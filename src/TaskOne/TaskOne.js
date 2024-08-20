document.addEventListener('DOMContentLoaded', function () {
  const sentenceElement = document.getElementById('sentence');
  const leftSelect = document.getElementById('leftSelect');
  const rightSelect = document.getElementById('rightSelect');

  function updateSentence() {
    let leftText = leftSelect.value === 'true' ? 'Ако ме изберат за премиер' : 'Ако не ме изберат за премиер';
    let rightText = rightSelect.value === 'true' ? 'ще построя магистрала' : 'няма да построя магистрала';
    sentenceElement.textContent = `${leftText}, ${rightText}`;
  }

  leftSelect.addEventListener('change', updateSentence);
  rightSelect.addEventListener('change', updateSentence);
});