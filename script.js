//Sets the initial variables
var timeDisplay = document.getElementById('currentDay')
var CurrentTime = moment().format("hh");
var CurrentDate = moment().format('dddd, MMMM Do YYYY')

var appointments = {};

//Check local storage for existing time blocks
var storedAppointments = localStorage.getItem("appointments");
if (storedAppointments !== null) {
  appointments = JSON.parse(storedAppointments);

}

//Shows current Date
timeDisplay.textContent = CurrentDate;

//Mark Current Time
$('#' + CurrentTime + ' .info').addClass('bg-success text-light');

//Mark the past blocks
var currentBlock = 8;
for (var i = 0; i < 9; i++) {
  if (parseInt(CurrentTime) >= currentBlock) {
    $('#' + currentBlock.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ' .info').addClass('bg-secondary text-light');
  } else {
  }

  $('#' + currentBlock.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ' .info').val(appointments["i" + currentBlock.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})] )

  currentBlock++;
}

//Appointment Updateer
// TODO: MAke this section a loop for more efficient coding in the future
function appointmentUpdate() {
  appointments.i08 =  $('#08.dayplanner-slot .info').val()
  appointments.i09 =  $('#09.dayplanner-slot .info').val()
  appointments.i10 =  $('#10.dayplanner-slot .info').val()
  appointments.i11 =  $('#11.dayplanner-slot .info').val()
  appointments.i12 =  $('#12.dayplanner-slot .info').val()
  appointments.i13 =  $('#13.dayplanner-slot .info').val()
  appointments.i14 =  $('#14.dayplanner-slot .info').val()
  appointments.i15 =  $('#15.dayplanner-slot .info').val()
  appointments.i16 =  $('#16.dayplanner-slot .info').val()
  console.log(appointments);
  localStorage.setItem("appointments", JSON.stringify(appointments))
}

//set appointments
$('.dayplanner-slot .save').click(
  function() {
    appointmentUpdate();
  }
)
