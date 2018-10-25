//business logic
var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var repeatI = "I";
// var numeral123 = [];

var valueToSymbol = function(number) {
  if (number > 0 && number < 4){
   var numeral123 = repeatI.repeat(number);

    return numeral123;
    console.log(numeral123)
  }
  // if (number === 4) {
  //       var numeral4 = [];
  //     numeral4.push(numeral123.slpit("")  numeral123.slice(2) + "V")
  //
  //       return numeral4;


  // if (number === 5){
  //   return "V";
  // }
  if (number >= 5 && number < 9){

    var remainder = number % 5;
    var numeral678 =  "V" + (repeatI.repeat(remainder));

    return numeral678;
  }
  if (number === 10){
    return "X";
  }
  if (number >= 10 && number < 13){

    var remainder = number % 10;
    var numeral13 =  "X" + (repeatI.repeat(remainder));

    return numeral13;
  }


};

//user interface logic
$(document).ready(function(){
  $("#roman-numerals").submit(function(){
    event.preventDefault();
    var number = parseInt($("#number").val());

    result = valueToSymbol(number);
    console.log(result)

    // debugger
  });
})
