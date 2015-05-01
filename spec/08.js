describe("n: zero と succ を利用した関数", function(){
  context("引数が0の時", function(){
    it("配列を返す", function(){
      expect(n(0)).to.be.an("array");
    });
    it("返り値の長さは0", function(){
      expect(n(0).length).to.be(0);
    });
  });
  context("引数が1以上の整数の時", function(){
    it("配列を返す", function(){
      expect(n(1)).to.be.an("array");
    });
    it("返り値の長さは引数で指定した整数と同じ", function(){
      expect(n(1).length).to.be(1);
      expect(n(12345).length).to.be(12345);
    });
  });
  context("引数が負の数の時", function(){
    it("nullを返す", function(){
      expect(n(-1)).to.be(null);
    });
  });
});
