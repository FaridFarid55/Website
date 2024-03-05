// console.log(`hello`)
// window.alert(`This is an alert!`);
// window.alert(`I like Pizza!`);

// // this is a comment
// /*


// */

// document.getElementById("myH1").textContent="hello";
// document.getElementById("myP").textContent="I like Pizza";

/// variable
// let sFulltName="Farid Farid Abdo";
// let nAge=20;
// let IsStudent=true;

// document.getElementById("P1").textContent =`your name is : ${sFulltName}` ;
// document.getElementById("P2").textContent =`you are ${nAge} years old` ;
// document.getElementById("P3").textContent =`enrolled:${IsStudent}`;

///            7   +     16 = 23
//let nResult= 1 + 2 * 3 + 4 ** 2;

// //           6   / 2   **    7  
// //            6 /      128  = 

// let nResult=   6 /      128  ;

// console.log(nResult);

//   let UserName = window.prompt("What`s your username ?");
//   console.log(UserName);

//   function x()
//  {
//     let UserName;

//     document.getElementById("mysubmit").onclick = function()
//     {
//        UserName=document.getElementById("myTixt").value;
//        document.getElementById("my1").textContent = `Hello is : ${UserName}`

//     }
//  }



// string or boolean or int

//   let x;
//   let y;
//   let z;

//   x=Number(x);
//   y=String(y);
//   z=Boolean(z);

//    // print
//    console.log(x,typeof x)
//    console.log(y,typeof y)
//    console.log(z,typeof z)

//**     const  //  */
// const PI = 3.14;
// let rediusa;
// let x;


//  method

// document.getElementById("mysubmit").onclick = function () {
//    radius = document.getElementById("myText").Value;
//     radius = Number(radius);
//    x = 2 * PI * radius;
//    document.getElementById("my3").textContent = x;
// };


// // counter program
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaswBtn = document.getElementById("increaswBtn");

// const Countlable = document.getElementById("Countlable");

// let nCount = 0;

// // this method  increas 
// function increaswB() {
//    nCount++;
//    Countlable.textContent = nCount;
// }

// // this method  decrease 
// function decrease() {
//    nCount--;
//    Countlable.textContent = nCount;
// }

// // this method  reset 
// function reset() {
//    nCount = 0;
//    Countlable.textContent = nCount;
// }

// // set increaswBtn
// increaswBtn.onclick = increaswB;

// // ste decreaseBtn
// decreaseBtn.onclick = decrease;

// // set resetBtn
// resetBtn.onclick = reset;

// math


// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

//z=Math.round(x);
//z = Math.floor(x)
//z = Math.ceil(x)
// z = Math.pow(x,y)
//z = Math.sqrt(x)
// z = Math.sin(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)

// let nMax = Math.max(x, y, z);
// let nMin = Math.min(x, y, z);;

// console.log(nMax);
// console.log(nMin);

//  let nMax = 50;
//  let nMin = 100

// // random number 
// let nRandomNum = Math.floor(Math.random() * nMax) + nMin;
// console.log(nRandomNum);

const myButton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylable");
//
const nMax = 6;
const nMin = 1;
let nRandomNum;

// this method random
function random() {
   nRandomNum = Math.floor(Math.random() * nMax) + nMin;
   mylabel.textContent = nRandomNum;
}

// set number random
myButton.onclick = random;
