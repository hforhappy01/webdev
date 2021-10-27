// lets create a array full of strings

let familyarr = [ "Himanshu Sharma",
"Vivek Sharma", "Pooja Sharma", "Sourabh Bhushan",
"Surbhi Sharma", "Parmeshwar Sharma", "Santosh Sharma","Hardit Bhushan"]
/* split - splits the name into two array like - take 1st element
of array and divide it [himanshu][sharma]*/

let iarr = familyarr.map(function(name,i){
    let names = name.split(" ");
    ans = names[0][0] + "." + names[1][0];
    return ans;
})

console.log(iarr);

/* alternate method to do the above code is 
let iarr = familyarr.map(function(name,i){
    let names= name.split(" "); /* splited the name into 2 arr first is himanshu 
    > sec is sharma*/
    /*
    let fname = name[0];  // fname will have himanshu
    let lname = name[1]; // last name will have sharma

    let felement = fname[0];  // it will have h from himanshu
    let lelement = lname[0]; // it will have s from sharma
    return felement+"."+lelement+".";
})*/