console.log("script is running!");
$(document).ready(function () {
  //Display current date with the name of the month
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  //Generate time blocks
  var container = $("#time-block-container");
  
});