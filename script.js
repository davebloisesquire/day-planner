var timeDisplay = document.getElementById('currentDay')
var CurrentTime = moment().format("hh");
var CurrentDate = moment().format('dddd, MMMM Do YYYY')

timeDisplay.textContent = CurrentDate;

$('#' + CurrentTime + ' .info').addClass('bg-success text-light');
