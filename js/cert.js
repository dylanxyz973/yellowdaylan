function openModal(pdfUrl) {
  document.getElementById('pdfFrame').src = pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0";
  document.getElementById('pdfModal').style.display = "block";
}

function closeModal() {
  document.getElementById('pdfModal').style.display = "none";
  document.getElementById('pdfFrame').src = "";
}

window.onclick = function(event) {
  const modal = document.getElementById('pdfModal');
  if (event.target === modal) {
    closeModal();
  }
};