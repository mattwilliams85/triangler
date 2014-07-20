describe("triFind", function() {
  it("Tells you the type of triangle", function() {
    triFind(5,5,5).should.equal("an equilateral");
    triFind(2,2,2).should.equal("an equilateral");
  });
  it("Tells you the type of triangle", function() {
    triFind(1,4,3).should.equal("a scalene");
    triFind(3,4,5).should.equal("a scalene");
  });
  it("Tells you the type of triangle", function() {
    triFind(7,2,7).should.equal("an isosceles");
    triFind(3,3,4).should.equal("an isosceles");
  });
  it("Tells you when the dimensions are too long for a triangle", function() {
    triFind(1,20,7).should.equal("an impossible triangle!");
    triFind(5,1,2).should.equal("an impossible triangle!");
  });
});

