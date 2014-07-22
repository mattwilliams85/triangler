// TRIANGLE CALCULATOR //
var triFind = function(side1, side2, side3) {
  if (side1 > (side2 + side3) || side2 > (side1 + side3) || side3 > (side1 + side2)) {
    return "an impossible";
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
    var max = Math.max(side1,side2,side3); 
    var min = Math.min(side1,side2,side3);
    var mid;
    var same;
    var odd;

//Finds the size that is between max and mid // 
    if (side1 !== max && side1 !== min) {
      mid = side1;
    } else if (side2 !== max && side2 !== min) {
      mid = side2;
    } else {
      mid = side3;
    }
    $('.hideMe').show();
    $('span#result').text(result + " triangle!");

// TRIANGLE VISUALIZER //
// Draws no triangle //
    if (result === 'an impossible') {
      $('.box').hide();
// Draws right triangle for scalene //
    } else if (result === 'a scalene') {
      $('.box').show();
      $('#triangle').css({'border-left': (min*25) + 'px solid transparent'});
      $('#triangle').css({'border-bottom': (mid*25) + 'px solid #E80C7A'});
// Displays # inches around a scalene triangle //
      $('.below').css({'padding-left': (min*15 + 'px')});
      $('#right').css({'margin-top': (mid*13 + 'px')});
      $('#left').css({'margin-top': (mid*13 + 'px')});
      // $('#left').css({'margin-left': (mid*13 + 'px')});
      $('span#side1').text(max + " in");
      $('span#side2').text(mid + " in");
      $('span#side3').text(min + " in");
// Draws triangle for equilateral or scalene //
    } else {
      if (side1 === side2) {
        same = side1;
        odd = side3; 
      } else if (side2 === side3) {
        same = side2;
        odd = side1
      } else {
        same = side3;
        odd = side2;
      }
      $('.box').show();
// Displays # inches around a isosceles/equilateral triangle //     
      $('#triangle').css({'border-right': (odd*25) + 'px solid transparent'});
      $('#triangle').css({'border-left': (odd*25) + 'px solid transparent'});
      $('#triangle').css({'border-bottom': (same*25) + 'px solid #E80C7A'});
      $('#bottom').css({'padding-left': (odd*25 + 'px')});
      $('#right').css({'margin-top': (same*13 + 'px')});
      $('#right').css({'padding-left': (odd + 'px')});
      $('#left').css({'margin-top': (same*13 + 'px')});
      $('span#side1').text(same + " in");
      $('span#side2').text(same + " in");
      $('span#side3').text(odd + " in");
    }
    $('input').val('');
  });
});
