let arr = [2,3,5,1,8,9,7,100,102];  //we created a array in which we pass the given elements

// here map function working similar to $$eval 

/* > map() methid createds a new array with
 the results of calling a function for every array element
 > the map function calls the provided function once for each 
 element in the array
 > map does not change original array
 > using map functions help we pass every element of array to 
 the function*/

let squareofarray = arr.map(function(v,i){
    v= v*v;
    return v;
})
console.log(squareofarray);


/* > we can do the above code with the given below code too


let squareofarray = arr.map(v=>v*v);
console.log(squareofarray); */ 

