describe("buzz: 1つの自然数を引数にとる関数", function(){
  context("引数が5の倍数の時", function(){
    it("buzz を返す", function(){
      expect(buzz(0)).to.be("buzz");
      expect(buzz(5)).to.be("buzz");
      expect(buzz(12345)).to.be("buzz"); 
    });
  });
  context("それ以外の場合", function(){
    it("引数の値をそのまま返す", function(){
      expect(buzz(1)).to.be(1);
      expect(buzz(3)).to.be(3);
      expect(buzz(19)).to.be(19);
    });
  });
});

