/*ass1*/
function max(...numbers){
    const arr = Array.from(numbers);
    arr.sort();
    const x=(arr.length)-1;
    return arr[x];
  }
max(4,3,6,9,0,1)

/*ass2*/
function calculate(args){
  let result;
  if(args.op==="+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }
  return result;
}

function minus(args){
  return args.n1-args.n2;
  }

function multiplication(args){
    return args.n1*args.n2;
  }

/*ass3*/
function avg(data){  
  const obj=Object.values(data)[1];
  const obj1=Object.values(obj);
  var total=0;
  obj1.forEach(function(element, index, array) {
  total+=Object.values(element)[1];
});
console.log(total/Object.values(data)[0]);

}
avg({
size:3,
products:[
{
name:"Product 1",
price:100
},
{
name:"Product 2",
price:700
},
{
name:"Product 3",
price:250
}
]
}); // show the average price of all products


