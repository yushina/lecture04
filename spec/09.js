describe("add: 二つの配列の長さを足した長さの配列を作る関数", function(){
  if(zero == null){
    var zero = function(){
      return [];
    };
  }
  if(one == null){
    var one = function(){
      return [true];
    };
  }
  if(million == null){
    var million = function(){
      var i = 0;
      var result = [];
      while(i < 1000000){
        result.push(true);
      }
      return result;
    };
  }  

  context("二つの引数がともに、長さ0の配列だった場合", function(){
    it("配列を返す", function(){
      expect(add(zero(), zero())).to.be.an("array");
    });
    it("返り値の長さは0", function(){
      expect(add(zero(), zero()).length).to.be(0);
    });
  });

  context("長さ0の配列と、長さ1の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(add(zero(), one())).to.be.an("array");
    });
    it("返り値の長さは1", function(){
      expect(add(zero(), one()).length).to.be(1);
      expect(add(one(), zero()).length).to.be(1);
    });    
  });

  context("二つの引数が、ともに長さ1の配列の場合", function(){
    it("配列を返す", function(){
      expect(add(one(), one())).to.be.an("array");
    });
    it("返り値の長さは2", function(){
      expect(add(one(), one()).length).to.be(2);
    });    
  });

  context("長さ1,000,000と、長さ1の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(add(million(), one())).to.be.an("array");
    });
    it("返り値の長さは1,000,001", function(){
      expect(add(one(), million()).length).to.be(1000001);
      expect(add(million(), one()).length).to.be(1000001);
    });    
  });  

});
