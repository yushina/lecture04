describe("subtract: 二つの配列を引数にとり、第1引数の長さを第2引数分減らす関数", function(){
  if(!sdlkjaflsdjfljdfsam){
    var sdlkjaflsdjfljdfsam = function(){
      return [];
    }
  }
  if(!lsdajkflajouweracsadf){
    var lsdajkflajouweracsadf = function(){
      return [true];
    }
  }
  if(!urwiytnbfkjnldksljhiuryg){
    var urwiytnbfkjnldksljhiuryg = function(){
      return [true, true];
    }
  }

  context("2つの引数がともに長さ0の配列の場合", function(){
    it("配列を返す", function(){
      expect(subtract(sdlkjaflsdjfljdfsam(), sdlkjaflsdjfljdfsam())).to.be.an("array");
    });
    it("返り値の長さは、0", function(){
      expect(subtract(sdlkjaflsdjfljdfsam(), sdlkjaflsdjfljdfsam()).length).to.be(0);
    });
  });

  context("第2引数の長さが0の場合", function(){
    it("配列を返す", function(){
      expect(subtract(lsdajkflajouweracsadf(), sdlkjaflsdjfljdfsam())).to.be.an("array");
    });
    it("返り値の長さは、第1引数のそれと同じ",function(){
      expect(subtract(lsdajkflajouweracsadf(), sdlkjaflsdjfljdfsam()).length).to.be(lsdajkflajouweracsadf().length);
      expect(subtract(urwiytnbfkjnldksljhiuryg(), sdlkjaflsdjfljdfsam()).length).to.be(urwiytnbfkjnldksljhiuryg().length);
    });
  });

  context("第2引数の長さが、第1引数長さより長い", function(){
    it("配列を返す", function(){
      expect(subtract(sdlkjaflsdjfljdfsam(), urwiytnbfkjnldksljhiuryg())).to.be.an("array");
      expect(subtract(lsdajkflajouweracsadf(), urwiytnbfkjnldksljhiuryg())).to.be.an("array");
    });
    it("返り値の長さは、0", function(){
      expect(subtract(sdlkjaflsdjfljdfsam(), urwiytnbfkjnldksljhiuryg()).length).to.be(0);
      expect(subtract(lsdajkflajouweracsadf(), urwiytnbfkjnldksljhiuryg()).length).to.be(0);
    });
  });

  context("第1引数の長さが、第2引数より長い場合", function(){
    it("配列を返す", function(){
      expect(subtract(urwiytnbfkjnldksljhiuryg(), lsdajkflajouweracsadf())).to.be.an("array");
    });
    it("返り値の長さが0", function(){
      expect(subtract(urwiytnbfkjnldksljhiuryg(), lsdajkflajouweracsadf()).length).to.be(lsdajkflajouweracsadf().length);
    });
  });
});
