$(document).ready(function() {
   $("form#new-location").submit(function(event) {
    $("#show-location");
    event.preventDefault();

    var inputtedCountry = $("select#new-country").val();
    var inputtedState = $("select#US").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedNotablePlace = $("input#new-notable-place").val();
    var inputtedNotes = $("input#new-notes").val();
    var newLocation = { country: inputtedCountry, state: inputtedState, city: inputtedCity, notablePlace: inputtedNotablePlace, notes: inputtedNotes };

    $("ul#location").append("<li><span class='location'>" + newLocation.country + "</span></li>");
    $("select#new-country").val("");
    $("select#US").val("");
    $("input#new-city").val("");
    $("input#new-notable-place").val("");
    $("input#new-notes").val("");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.state + " , " + newLocation.city);
      $(".country").text(newLocation.country);
      $(".state").text(newLocation.state);
      $(".city").text(newLocation.city);
      $(".notable-place").text(newLocation.notablePlace);
      $(".notes").text(newLocation.notes);
    });
  });
});
