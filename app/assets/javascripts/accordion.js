$(document).ready(function () {
  if (document.getElementById('accordion') !== null) {
    var buttons = document.querySelectorAll('.accordion-heading')

    buttons.forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.target.closest('.accordion-section').classList.toggle('open')
        b.setAttribute(
          'aria-expanded', 
          b.getAttribute('aria-expanded') === 'true' 
            ? 'false' 
            : 'true'
        );
      })
    })
  }
})
