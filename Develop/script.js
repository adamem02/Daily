console.log("Script is running!"); // Add this line for debugging
$(document).ready(function () {
  // Display current date with the name of the month
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  // Generate time blocks
  var container = $("#time-block-container");
  var businessHours = 9;
  var currentTime = dayjs().hour();
  var hoursToShow = 14; 
var endHour = businessHours + hoursToShow;

  // Generate time blocks for the desired number of hours
  for (var i = businessHours; i <= endHour; i++) { 
    var timeBlock = $("<div>")
      .addClass("row time-block")
      .attr("id", "hour-" + i)
      .appendTo(container);

    var hourCol = $("<div>")
      .addClass("col-2 col-md-1 hour text-center py-3")
      .text(dayjs().hour(i).format("hA"))
      .appendTo(timeBlock);

    var descriptionCol = $("<textarea>")
      .addClass("col-8 col-md-10 description")
      .attr("rows", "3")
      .val(localStorage.getItem("hour-" + i))
      .appendTo(timeBlock);

    var saveBtn = $("<button>")
      .addClass("btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save")
      .html('<i class="fas fa-save" aria-hidden="true"></i>')
      .on("click", function () {
        var hour = $(this).closest(".time-block").attr("id");
        var eventText = $(this).siblings(".description").val();
        localStorage.setItem(hour, eventText);
      })
      .appendTo(timeBlock);

    // Add past, present, or future class
    if (i < currentTime) {
      timeBlock.addClass("past");
    } else if (i === currentTime) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  }
});
