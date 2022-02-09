$(document).ready(function () {
    if (document.querySelectorAll('.ecc-tools') !== null) {
      var toolsArea = document.querySelectorAll('.ecc-tools')
  
      toolsArea.forEach(function (b) {
          var toggleButton = b.querySelector('.ecc-tools__toggle');
          toggleButton.addEventListener('click', function (e) {
            b.classList.toggle('open');
            toggleButton.setAttribute(
                'aria-expanded', 
                toggleButton.getAttribute('aria-expanded') === 'true' 
                  ? 'false' 
                  : 'true'
              );
        })
      })
    }
  })
  