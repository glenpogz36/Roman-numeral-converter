
var numerals= ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

var output ="";

var translator = function(userInput) {
  for (i = 0; i < numbers.length; i += 1) {

    if (userInput >= numbers[i]) {
      output += numerals[i];
      userInput -= numbers[i];
      i -= 1;
    }
  }

  return output;

};


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#input").val();

    var result = translator(userInput);

    $(".output").text(result);

  });
});
