//business logic
var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var repeatI = "I";
var repeatX = "X";
var repeatC = "C";
var repeatM = "M";
// var numeral123 = [];

var valueToSymbol = function(number) {
  if (number < 4000 && number % 10==0) {
    var quotient = number / 1000
    var numeral1000s =  repeatM.repeat(quotient);
    return numeral1000s;
  }


  if (number < 400 && number % 10==0) {
    var quotient = number / 100
    var numeral100s =  repeatC.repeat(quotient);
    return numeral100s;

    }

    if (number < 40 && number % 10==0) {
      var quotient = number / 10
      var numeral10s =  repeatX.repeat(quotient);
      return numeral10s;

    }
if (number >10 && number <14)
  var numeralTeen = "X" + repeatI.repeat(number);


  if (number > 0 && number < 4){
   var numeral123 = repeatI.repeat(number);

    return numeral123;

  }

  if (number >= 5 && number < 9){

    var remainder = number % 5;
    var numeral678 =  "V" + (repeatI.repeat(remainder));

    return numeral678;
  }

  if (number >= 10 && number < 13){

    var remainder = number % 10;
    var numeral12 =  "X" + (repeatI.repeat(remainder));

    return numeral12;
  }
  if (number === 4){
    return "IV";
  }
  if (number === 9){
    return "IX";
    }
//for (var i= 0; i < length; i++) {

  //}
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
