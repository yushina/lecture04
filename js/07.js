function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function million(){
  var a = zero();
  var i = 0;

  while(i < 1000000){
    a = succ(a);
    i = i + 1;
  }


  return a;
}
