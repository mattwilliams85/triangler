describe("triFind", function() {
  it("Tells you the type of triangle", function() {
    triFind(5,5,5).should.equal("Equilateral");
  });
  it("Tells you the type of triangle", function() {
    triFind(1,4,9).should.equal("Scalene");
  });
  it("Tells you the type of triangle", function() {
    triFind(7,2,7).should.equal("Isosceles");
  });
});

