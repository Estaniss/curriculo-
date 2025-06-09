function downloadPDF() {
  window.print();
}
document.addEventListener('DOMContentLoaded', function () {
  const floatingBtn = document.querySelector('.floating-btn');

  floatingBtn.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-2px) scale(1.5)';
  });

  floatingBtn.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
