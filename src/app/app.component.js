var number;

document.querySelector("btn-success").addEventListener("click",function()
{
number=document.getElementById("quntity").value;
number++;
document.getElementById("quntity").value=number;


if (number>1)
{
  document.querySelector("btn-danger").removeAttribute("disabled");
  document.querySelector("btn-danger").classList.remove("disabled")
}
})
document.querySelector("btn-danger").addEventListener("click",function()
{
number=document.getElementById("quntity").value;
number--;
document.getElementById("quntity").value=number;
if (number==1)
{
  document.querySelector("btn-danger").setAttribute("disabled","disabled");
}
})
function test()
{
  console.log("Hello");
}
