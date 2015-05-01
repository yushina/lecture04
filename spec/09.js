describe("add: 二つの配列の長さを足した長さの配列を作る関数", function(){
  if(asdlfjsaldghfaeur == null){
    var asdlfjsaldghfaeur = function(){
      return [];
    };
  }
  if(rieuwpo20380918 == null){
    var rieuwpo20380918 = function(){
      return [true];
    };
  }
  if(asoureroei43298ruweirtupoiu == null){
    var asoureroei43298ruweirtupoiu = function(){
      var i = 0;
      var result = [];
      while(i < 1000000){
        result.push(true);
        i = i + 1;
      }
      return result;
    };
  }  

  context("二つの引数がともに、長さ0の配列だった場合", function(){
    it("配列を返す", function(){
      expect(add(asdlfjsaldghfaeur(), asdlfjsaldghfaeur())).to.be.an("array");
    });
    it("返り値の長さは0", function(){
      expect(add(asdlfjsaldghfaeur(), asdlfjsaldghfaeur()).length).to.be(0);
    });
  });

  context("長さ0の配列と、長さ1の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(add(asdlfjsaldghfaeur(), rieuwpo20380918())).to.be.an("array");
    });
    it("返り値の長さは1", function(){
      expect(add(asdlfjsaldghfaeur(), rieuwpo20380918()).length).to.be(1);
      expect(add(rieuwpo20380918(), asdlfjsaldghfaeur()).length).to.be(1);
    });    
  });

  context("二つの引数が、ともに長さ1の配列の場合", function(){
    it("配列を返す", function(){
      expect(add(rieuwpo20380918(), rieuwpo20380918())).to.be.an("array");
    });
    it("返り値の長さは2", function(){
      expect(add(rieuwpo20380918(), rieuwpo20380918()).length).to.be(2);
    });    
  });

  context("長さ1,000,000と、長さ1の配列が引数として与えられた場合", function(){
    it("配列を返す", function(){
      expect(add(asoureroei43298ruweirtupoiu(), rieuwpo20380918())).to.be.an("array");
    });
    it("返り値の長さは1,000,001", function(){
      expect(add(rieuwpo20380918(), asoureroei43298ruweirtupoiu()).length).to.be(1000001);
      expect(add(asoureroei43298ruweirtupoiu(), rieuwpo20380918()).length).to.be(1000001);
    });    
  });  

});
