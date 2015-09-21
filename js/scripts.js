$(document).ready(function() {  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#new-country").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedNotablePlace = $("input#new-notable-place").val();
    var inputtedNotes = $("input#new-notes").val();
    var newLocation = { country: inputtedCountry, state: inputtedState, city: inputtedCity, notablePlace: inputtedNotablePlace, notes: inputtedNotes };

    $("ul#location").append("<li><span class='location'>" + newLocation.country + " " + newLocation.state + " " + newLocation.city + "</span></li>");
    $("input#new-country").val("");
    $("input#new-state").val("");
    $("input#new-city").val("");
    $("input#new-notable-place").val("");
    $("input#new-notes").val("");
  });
});

$(".location").last().click(function() {
  $("#show-location").show();
  $("#show-location h2").text(newLocation.country + " " + newLocation.state + " " + newLocation.city);
  $(".country").text(newLocation.country);      $(".state").text(newLocation.state);
  $(".city").text(newLocation.city);    $(".notable-place").text(newLocation.notablePlace);
  $(".notes").text(newLocation.notes);
});
