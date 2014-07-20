// TRIANGLE CALCULATOR //
var triFind = function(side1, side2, side3) {
  if (side1 > (side2 + side3) || side2 > (side1 + side3) || side3 > (side1 + side2)) {
    return "an impossible triangle!";
  }
  if (side1%side2 === 0 && side2%side3 === 0) {
    return "an equilateral"
  }
  else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "an isosceles"
  }
  else {
    return "a scalene";
  }
};

// BUTTON SUBMIT FUNCTION //
$(document).ready(function(){
  $("form#triangler").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triFind(side1,side2,side3);
    $('.hideMe').show();
    $('span#result').text(result + "!");
    if (result === 'an impossible triangle!') {
    } else {
      $('#triangle').css({'border-left': (side1*25) + 'px solid transparent'});
      $('#triangle').css({'border-right': (side2*25) + 'px solid transparent'});
      $('#triangle').css({'border-bottom': (side3*25) + 'px solid red'});
    }
  });
});
