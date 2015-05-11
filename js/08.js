function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function n(){
  var a = zero();


  while(a.length < 0){
    a = succ(a);

  }



  while(a.length == 12345){
    a = succ(a);

  }



  return a;


}
