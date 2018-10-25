//business logic
var symbols = ["I", "V", "X", "L", "C", "D", "M"];
var valueToSymbol = function(number) {
  if (number === 1){
  return "I";
  }
  // if (number )
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
