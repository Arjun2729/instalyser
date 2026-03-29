// Shared utilities for Instagram Oracle
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return Math.abs(h);
}

function render(template, username) {
  return template
    .replace(/\{u\}/g, `<span class="username">@${username}</span>`)
    .replace(/\{r:([^}]+)\}/g, `<span class="highlight">$1</span>`);
}

function saveCard(cardId, filename) {
  const card = document.getElementById(cardId);
  html2canvas(card, { backgroundColor: '#ffffff', scale: 2 }).then(canvas => {
    const link = document.createElement('a');
    link.download = filename + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
