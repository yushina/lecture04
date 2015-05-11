function zero(){
  return [];

}

function succ(a){
  a.push(true);
  return a;
}

function one(){
  var a = zero();
  a = succ(a);
  return a;
}
