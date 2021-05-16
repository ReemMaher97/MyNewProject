
function test()
{

  console.log(number);
}

function addNumber(id){
  number=id.value
  number++;
  id.value=number;
  console.log(number);
}
function subNumber(id){

  number=id.value;
  if(number>1)
  {
  number--;
  id.value=number;
  console.log(number);
}
}

