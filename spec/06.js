describe("ten: zero と succ を利用した関数", function(){
  it("配列を返す", function(){
    expect(ten()).to.be.an("array");
  });
  it("返り値の長さは10", function(){
    expect(ten().length).to.be(10);
  });
});
