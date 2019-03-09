$(document).ready(function() {
  let total = 0;
  let humanGuess = 0;
  let compGuess = Math.floor(Math.random() * 10 + 1);
  total = compGuess + total;

  $(".currentSum").html("<h1>" + total + "</h1>");

  $(".number-button").on("click", function() {
    console.log($("#inputGroupSelect :selected").val());
    humanGuess = parseInt($("#inputGroupSelect :selected").val());
    total = humanGuess + total;
    console.log("you have made the total " + total);
    compGuess = 11 - humanGuess;
    if (total >= 90) {
      compGuess = 100 - total;
    }
    console.log("I'll add " + compGuess + "!");
    $(".compText").html("I'll add " + compGuess + "!");
    total = compGuess + total;
    $(".currentSum").html("<h1>" + total + "</h1>");
    console.log("The computer has made the total " + total);

    if (total >= 100) {
      console.log("100!");
      $(".compText").html("100! I win!");
    }
  });
});
