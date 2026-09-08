function printPage() {
  window.print();
}

function resetForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  if (window.confirm('Clear everything entered on this page?')) {
    form.reset();
    updateScore();
  }
}

function updateScore() {
  const checked = document.querySelectorAll('input[type="radio"]:checked');
  let total = 0;
  checked.forEach((item) => { total += Number(item.value); });
  const score = document.getElementById('score-total');
  const answered = document.getElementById('score-answered');
  if (score) score.textContent = total;
  if (answered) answered.textContent = checked.length;
}

document.addEventListener('change', (event) => {
  if (event.target.matches('input[type="radio"]')) updateScore();
});
