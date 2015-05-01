describe("succ: 配列の長さを1増やす関数", function(){
  context("長さ0の配列を引数に指定した場合", function(){
    it("配列を返す", function(){
      expect(succ([])).to.be.an("array");
    });
    it("返り値の長さは1", function(){
      expect(succ([]).length).to.be(1);
    });
  });

  context("長さn（nは1以上の自然数）の配列を引数に指定した場合", function(){
    it("配列を返す", function(){
      expect(succ([1, 2, 3, 4, 5])).to.be.an("array");
    });
    it("返り値の長さは、引数のそれよりも1大きい", function(){
      expect(succ([1, 2, 3, 4, 5]).length).to.be(6);
      expect(succ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).length).to.be(13);
    });
  });
});
