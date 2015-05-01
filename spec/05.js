describe("two: zero と succ を利用した関数", function(){
  it("配列を返す", function(){
    expect(two()).to.be.an("array");
  });
  it("返り値の長さは1", function(){
    expect(two().length).to.be(2);
  });
});
