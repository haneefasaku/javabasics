//Boolean
let password =true;
if(password){
    console.log("congratulation");
}
else{
    console.log("Better luck next time");
}

let age = 1;
//value between 1 and 120

if(age >= 1 && age <=120){
    console.log("age valid");
}
else{
    console.log("age invalid");
}

//Height, Height is given, Greater than 1 and less than 250

let height = 143;
if(height && height >= 1 && height <= 250){
    console.log("height valid");
}
else{
    console.log("height invalid");
}

//Differents between let and const

let myName = "Arjun";
myName = "Raju";
console.log(myName);

// const myFriend = "Akhil";
// myFriend = "Arun";
// console.log(myFriend);

//compare == and === 

const number1 =5;
const number2 ="5";

if(number1===number2){
    console.log("equal");
}
else{
    console.log("not equal");
}

if(number1==number2){
    console.log("equal");
}
else{
    console.log("not equal");
}

const assword = "ABC";
const confirmpassword = "abc";
if(assword===confirmpassword){
    console.log("equal");
}
else{
    console.log("not equal");
}

