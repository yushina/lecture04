function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function ten(){
  var a = zero();

  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)
  a == succ(a)

  return a;
}
