describe("triFind", function() {
  it("Tells you the type of triangle", function() {
    triFind(5,5,5).should.equal("Equilateral");
    triFind(2,2,2).should.equal("Equilateral");
  });
  it("Tells you the type of triangle", function() {
    triFind(1,4,3).should.equal("Scalene");
    triFind(2,6,7).should.equal("Scalene");
  });
  it("Tells you the type of triangle", function() {
    triFind(7,2,7).should.equal("Isosceles");
    triFind(3,3,4).should.equal("Isosceles");
  });
  it("Tells you when the dimensions are too long for a triangle", function() {
    triFind(1,20,7).should.equal("Impossible!");
    triFind(5,1,2).should.equal("Impossible!");
  });
});

