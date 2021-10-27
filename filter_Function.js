// lets take the array of odd even no

let arrofnos = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// let filter out the even values 

let evenvalues = arrofnos.filter(function(v,i){
    if(v%2==0){
        return true;
    }
     else{
         return false;
     }
})

console.log(evenvalues);

// let filter out the odd values 
let oddvalues = arrofnos.filter(function(v,i){
    if(v%2==1){
        return true;
    }
     else{
         return false;
        }
})

console.log(oddvalues);