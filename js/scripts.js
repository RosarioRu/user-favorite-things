$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    const userName=$("input#name").val();
    const userColor=$("input#color").val();
    const userFood=$("input#food").val();
    const userAnimal=$("input#animal").val();

    let resultArray=[userName, userColor, userFood, userAnimal];

    $("#insert").text(resultArray);
    $(".show-results").show();
  });

});