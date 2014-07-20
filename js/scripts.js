var triFind = function(side1, side2, side3) {
  if (side1%side2%side3 === 0) {return "Equilateral"}
  else if (side1 === side2 || side2 === side3 || side1 === side3) {return "Isosceles"}
  else {return "Scalene"}
};
