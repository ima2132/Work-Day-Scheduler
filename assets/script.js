// wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
// displays the current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

// generate the time blocks for standard business hours
  var startTime = 9; // 9 AM 
  var endTime = 17; // 5 PM (17 PM in military standard time)

  for (var hour = startTime; hour <= endTime; hour++) {
    var timeBlock = $("<div>").attr("id", "hour-" + hour).addClass("row time-block");

    var hourText = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(dayjs(hour, "H").format("hA"));
    var description = $("<textarea>").addClass("col-8 col-md-10 description");
    var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

    timeBlock.append(hourText, description, saveBtn);
    $(".container-fluid .row").append(timeBlock);
  }

// loads saved events from local storage
   loadEvents();

// event listener for save button clicks
   $(".saveBtn").on("click", function () {
     var hour = $(this).parent().attr("id");
     var eventText = $(this).siblings(".description").val().trim();
 
// saves event to local storage
     saveEvent(hour, eventText);
   });

   function loadEvents() {
    // loads saved events from local storage and populate the text areas
    for (var hour = 9; hour <=17; hour++) {
      var eventText = localStorage.getItem("event-" + hour);
      if (eventText) {
        $("#hour-" + hour + " .description").val(eventText);
      }
    }
  }


// get the current time
 function updateTimeBlockColors() {
  var now = new Date(); 
  
// update the time block colors based on the current time
for (var hour =9; hour <=17; hour++){
  var timeBlock = $("#hour-"+hour);
 
// if the current hour is BEFORE the hour of the time block, then the time block should be in the past
if (now.getHours() < hour) {
  timeBlock.addClass("past");
} else if (now.getHours() == hour) {
// if the current hour is EQUAL TO the hour of the time block, then the time block should be in the present
  timeBlock.addClass("present");
} else {
// if the current hour is AFTER the hour of the time block, then the time block should be in the future
  timeBlock.addClass("future");
}
}
}
