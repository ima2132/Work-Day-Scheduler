$(document).ready(function () {
  var currentDay = $("#currentDay");
  var description = $(".description");
  var saveBtn = $(".saveBtn");
  var timeBlock = $(".time-block");
  var today = dayjs();

  // displays the current day at the top of the calendar
  $("#currentDay").text(today.format('[Today is] dddd, MMMM D, YYYY'));

  // displays a working clock 
  function displayTime() {
    var currentTime = today.format('hh:mm a');
    $("#current-time").text(currentTime); 
  }

  // calls the displayTime function 
    displayTime();

  // updates the clock every second
    setInterval(displayTime, 1000);
  
  // generates the time blocks for standard business hours
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

  // event listener for save button click
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val().trim();

  // saves event to local storage
    localStorage.setItem(hour, eventText);
  });

  // function to save events to local storage
  function saveEvents() {
    $(".time-block").each(function() {
      var hour = $(this).attr("id");
      var eventText = $(this).find(".description").val().trim();
      localStorage.setItem(hour, eventText);
    });
  }

  // loads saved events from local storage
   function loadEvents() {
    
  // loads saved events from local storage and populates the text areas
      for (var hour = 9; hour <= 17; hour++) {
        var eventText = localStorage.getItem("hour-" + hour);
        if (eventText) {
          $("#hour-" + hour + " .description").val(eventText);
        }
      }
    }
  
  // calls the saveEvents function before the page is unloaded
    $(window).on('beforeunload', function() {
      saveEvents();
    });
  
  // function to add color to the time blocks based on the current time
    function getTime() {
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").substring(5));
        var now = new Date();


// time block colors updated based on current time

  // if the current hour is before the hour of the time block, then the time block should be in the past
  if (now.getHours() > blockHour) {
  $(this).removeClass("present");
  $(this).removeClass("future");
  $(this).addClass("past");
  }
  // if the current hour is equal to the hour of the time block, then the time block should be in the present
  else if (now.getHours() === blockHour) {
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");
  } else {
  // if the current hour is after the hour of the time block, then the time block should be in the future
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
  }
  });
  }

// calls the getTime function as a loop to update the time block colors
  getTime();

// set values from local storage to the respective text areas
  for (var hour = 9; hour <= 17; hour++) {
  $("#hour-" + hour + " .description").val(localStorage.getItem("hour-" + hour));
  }
  });

 