describe("prev: 配列の長さを1減らす関数", function(){
  context("長さが1以上の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(prev([true])).to.be.an("array");
    });
    it("返り値の長さは、引数として与えた配列の長さより1小さい", function(){
      expect(prev([true]).length).to.be(0);
      expect(prev([true, true, true, true]).length).to.be(3);
    });
  });
  context("長さが0の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(prev([])).to.be.an("array");
    });
    it("返り値の長さが0", function(){
      expect(prev([]).length).to.be(0);
    });
  });
});
