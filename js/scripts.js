$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    const userName=$("input#name").val();
    const userColor=$("input#color").val();
    const userFood=$("input#food").val();
    const userAnimal=$("input#animal").val();

    const resultArray=[userName, userColor, userFood, userAnimal];
    const second=resultArray[1];
    const first=resultArray[0];
    const third=resultArray[2];

    const newArray=[];
    newArray.push(second, first, third);

    $(".second").append(second);
    $(".first").append(first);
    $(".third").append(third);
    $("#results-paragraph").show();
    
    
  });

});