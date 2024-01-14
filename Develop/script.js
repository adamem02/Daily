console.log("script is running!");
$(document).ready(function () {
  //Display current date with the name of the month
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  //Generate time blocks
  var container = $("#time-block-container");
  var businessHours = 9;
  var currentTime = dayjs().hour();
  var hoursToShow = 14;
var endHour = businessHours + hoursToShow;

// Generate tine blocks for the desired number of hours
for (let i=businessHours; i < endHour; i++) {
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

  
}
});