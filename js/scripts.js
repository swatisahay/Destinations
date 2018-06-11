function destination(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = time;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedLocation= $("input#new-location").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newDestination = new destination(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes );

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.location + "</span></li>");

    $(".destination").last().click(function() {
    $("#show-destinations").show();
    $("#show-destinations h2").text(newDestination.location);
    $(".location").text(newDestination.location);
    $(".landmarks").text(newDestination.landmarks);
    $(".time").text(newDestination.timeOfYear);
    $(".notes").text(newDestination.notes);
  });

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-time").val("");
    $("input#new-notes").val("");
  });
});
