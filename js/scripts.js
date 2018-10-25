//business logic
var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var repeatI = "I";

var valueToSymbol = function(number) {
  if (number > 0 && number < 4){

    var numeral123 = repeatI.repeat(number);
    return numeral123;
  }
  // if (number === 5){
  //   return "V";
  // }
  if (number >= 5 && number < 9){

    var remainder = number % 5;
    var numeral678 =  "V" + (repeatI.repeat(remainder));
    return numeral678;
  }
  // if (number === 10){
  //   return "V";
  // }




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
