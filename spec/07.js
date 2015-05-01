describe("million: zero と succ を利用した関数", function(){
  it("配列を返す", function(){
    expect(million()).to.be.an("array");
  });
  it("返り値の長さは1,000,000", function(){
    expect(million().length).to.be(1000000);
  });
});
