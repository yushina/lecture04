describe("one: zero と succ を利用した関数", function(){
  it("配列を返す", function(){
    expect(one()).to.be.an("array");
  });
  it("返り値の長さは1", function(){
    expect(one().length).to.be(1);
  });
});
