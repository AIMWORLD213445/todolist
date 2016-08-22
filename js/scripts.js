// Business Logic
function Task(taskName, location, details) {
  this.taskName = taskName;
  this.location = location;
  this.details = details;
}


// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#taskName").val();
    var inputtedLocation = $("input#location").val();
    var inputtedDetails = $("input#details").val();

    var newTask = new Task(inputtedTask, inputtedLocation, inputtedDetails);

    $("ul#to-do-list").append("<li><span class='task'>" + newTask.taskName + "</li>");

    $(".task").last().click(function() {
      $("#show-details").show();
      $("#show-details h3").text(newTask.taskName);

      $(".location").text(newTask.location);
      $(".details").text(newTask.details);
    });

    $(".task").last().dblclick(function() {
      $(this).toggleClass("task-done");
    });
    $("input#taskName").val("");
    $("input#location").val("");
    $("input#details").val("");
  });
});
