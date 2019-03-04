$(document).ready(function() {
  let total = 0;
  let humanGuess = 0;
  let compGuess = Math.floor((Math.random() * 10) + 1);
  total = compGuess + total;

  $(".currentSum").html("<h1>" + total + "</h1>")
  
  $(".number-button").on("click", function() {
    console.log($("#inputGroupSelect :selected").val());
    humanGuess = parseInt($("#inputGroupSelect :selected").val());
    total = humanGuess + total;
    compGuess = 11 - humanGuess;
    console.log("I'll add " + compGuess + "!");
    total = compGuess + total;
    $(".currentSum").html("<h1>" + total + "</h1>")
    console.log(total)

    if (total >= 100) {
        console.log("100!");
    }
  });
});
