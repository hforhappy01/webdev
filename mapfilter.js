// print the array of even square nos.

// here we apply map function on the filter 

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let squareofeven = arr.filter(v=> v%2==0).map(v=>v*v);
console.log(squareofeven);


// lets print age of all the females in array

let arr2 = [


{name:"a",age:14,gender:"m"},
{name:"b",age:24,gender:"f"},
{name:"c",age:40,gender:"f"},
{name:"d",age:45,gender:"f"},
{name:"e",age:50,gender:"f"},
{name:"f",age:27,gender:"f"},
{name:"g",age:29,gender:"m"}
]

let females = arr2.filter(g=>g.gender=='f').map(agee=>agee.age);
console.log(females);