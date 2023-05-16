// wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // displays the current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // generate the time blocks for standard business hours
  var startTime = 9; // 9 AM 
  var endTime = 17; // 5 PM (17 PM in military standard time)