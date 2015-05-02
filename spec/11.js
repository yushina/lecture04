describe("subtract: 二つの配列を引数にとり、第1引数の長さを第2引数分減らす関数", function(){
  if(!zero){
    var zero = function(){
      return [];
    }
  }
  if(!one){
    var one = function(){
      return [true];
    }
  }
  if(!two){
    var two = function(){
      return [true, true];
    }
  }

  context("2つの引数がともに長さ0の配列の場合", function(){
    it("配列を返す", function(){
      expect(subtract(zero(), zero())).to.be.an("array");
    });
    it("返り値の長さは、0", function(){
      expect(subtract(zero(), zero()).length).to.be(0);
    });
  });

  context("第2引数の長さが0の場合", function(){
    it("配列を返す", function(){
      expect(subtract(one(), zero())).to.be.an("array");
    });
    it("返り値の長さは、第1引数のそれと同じ",function(){
      expect(subtract(one(), zero()).length).to.be(one().length);
      expect(subtract(two(), zero()).length).to.be(two().length);
    });
  });

  context("第2引数の長さが、第1引数長さより長い", function(){
    it("配列を返す", function(){
      expect(subtract(zero(), two())).to.be.an("array");
      expect(subtract(one(), two())).to.be.an("array");
    });
    it("返り値の長さは、0", function(){
      expect(subtract(zero(), two()).length).to.be(0);
      expect(subtract(one(), two()).length).to.be(0);
    });
  });

  context("第1引数の長さが、第2引数より長い場合", function(){
    it("配列を返す", function(){
      expect(subtract(two(), one())).to.be.an("array");
    });
    it("返り値の長さが0", function(){
      expect(subtract(two(), one()).length).to.be(one().length);
    });
  });
});
