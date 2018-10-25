//business logic
var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var valueToSymbol = function(number) {

  if (number > 0 && number < 4){
    var repeatString = "I"
    var repeatedNumeral = repeatString.repeat(number)
    return repeatedNumeral;
}

};

//user interface logic
$(document).ready(function(){
  $("#roman-numerals").submit(function(){
    event.preventDefault();
    var number = parseInt($("#number").val());

    result = valueToSymbol(number);
    console.log(result);

    // debugger
  });
})
