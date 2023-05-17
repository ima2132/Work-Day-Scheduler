// variables for ids in each function
var currentDay = $("#currentDay");
var description = $(".description");
var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
var today = dayjs();


$(document).ready(function () {
// displays the current day at the top of the calendar
  $("#currentDay").text(today.format('[Today is] dddd, MMMM D, YYYY'));

// generate the time blocks for standard business hours
for (var hour = 9; hour <= 17; hour++) {
  var newTimeBlock = $("<div>").attr("id", "hour-" + hour).addClass("row time-block");

  var hourText = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(dayjs(hour, "H").format("hA"));
  var newDescription = $("<textarea>").addClass("col-8 col-md-10 description");
  var newSaveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

  // appends the elements to the time block
  newTimeBlock.append(hourText, newDescription, newSaveButton);

  // appends the time block to the calendar container
  $(".calendar").append(newTimeBlock);
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

// function to add color to the time blocks based on the current time
function getTime() {
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id"));
    var now = new Date();

    // update the time block colors based on the current time

    // if the current hour is BEFORE the hour of the time block, then the time block should be in the past
    if (now.getHours() < blockHour) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    // if the current hour is EQUAL TO the hour of the time block, then the time block should be in the present 
    else if (now.getHours() === blockHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      // if the current hour is AFTER the hour of the time block, then the time block should be in the future
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
  // calls the getTime() function as a loop to update the time block colors
  getTime();

  // set values from local storage to the respective text areas
  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});
