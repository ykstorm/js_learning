// const score = 100 //int
// const scoreInDecimal = 1000.34 
// const isLogged = false //boolean    
// let useremail; //undefined
// const id = Symbol('101') //symbol non primetive
// const Anotherid = Symbol('101')
// console.log(id==Anotherid)
// console.log(id===Anotherid); //strict comparison
// const bignumer = 12446545645645n

// ArrayEx =[ "marvel","dc","wb"];

// let Obj ={
//     namee:"mamta",
//     age:30

// }
//******************************memory ***************
// stack memory is primitive (string,num.boolean,null,undefined.symbol)
// non primitive is heap memory  (array,object,function)
let myYTname = "chai aur code"
let anotherName = myYTname
// console.log(anotherName) this gives us the reference to chai aur code
// anotherName = "hitesh"
// console.log(anotherName);
// console.log(myYTname);

let user = {
    email:"user@google.com",
    upi: "userrrr@ybl "

}
let usertwo = user
usertwo.email =  "laksh@ysahoo";
console.log(user.email)
console.log(usertwo.email)


