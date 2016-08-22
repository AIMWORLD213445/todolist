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

    $("ul#to-do-list").append("<div class='checkbox'> <label class='checklist'> <input type='checkbox'>" + newTask.taskName + "</label><span class='task' type='button' data-target='#myModal' data-toggle='modal'> (View details)</span></div>");
    $(".task").last().click(function() {
      $("#myModal h4").text(newTask.taskName);
      $(".location").text(newTask.location);
      $(".details").text(newTask.details);
    });

    $(".checklist").click(function() {
      $(this).toggleClass("task-done");
    });
    $("input#taskName").val("");
    $("input#location").val("");
    $("input#details").val("");
  });
});
