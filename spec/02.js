describe("zero: 長さ0の配列を返す関数", function(){
  it("配列を返す", function(){
    expect(zero()).to.be.an("array");
  });
  it("返す配列の長さは0", function(){
    expect(zero().length).to.be(0);
  });
});
