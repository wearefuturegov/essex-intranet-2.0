/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault();

  const salary = Number(document.getElementById('salary').value);
  const months = Number(document.getElementById('months').value);
  const holidayLength = document.getElementById('holidayLength').value;

  const costPerDay = (salary / months) / 260;

  document.getElementById('daily').innerText = 'Monthly cost of each day: £' + costPerDay.toFixed(2);

  if (holidayLength) {
    document.getElementById('total').innerText = 'Monthly cost of the holiday: £' + (costPerDay * holidayLength).toFixed(2);
  }
});
