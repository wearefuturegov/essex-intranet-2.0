$(document).ready(function () {
  if (document.getElementById('accordion') !== null) {
    var buttons = document.querySelectorAll('.accordion-heading')

    buttons.forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.target.closest('.accordion-section').classList.toggle('open')
      })
    })
  }
})
