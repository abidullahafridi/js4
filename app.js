




var officer = "yes";
if(officer == "yes"){
   console.log("document submitted");
}else{
  console.log("wapsi")
}

var officer = "no";
if(officer =="yes"){
   console.log("document submitted")
}else{
    console.log("wapsi")
}



var officer = true;
if(officer == false){
    console.log("submitted");
} else {
    console.log( "wapsi")
}




var age = prompt("enter your name");
var studentcard = true;

if(age > 20 ){
    console.log("student allow");
}else if (studentcard == true){
    console.log("student allow on card");
}else{
    console.log("not allow");
}


var name = +prompt("enter name")
var math = +prompt("math marks")
var urdu = +prompt("urdu marks")
var islamiat = +prompt("islamiat marks")
var english = +prompt("english marks")
var pst = +prompt("pst marks")
var totalmarks = 500
var total = math+urdu+islamiat+english+pst
var percentage = ( total / totalmarks * 100)
console.log(percentage)

if(percentage > 80 && percentage < 90){
    console.log("your grade is A+")
}else if(percentage > 70 && percentage < 80){
    console.log("your grade is A+")
}else if(percentage > 60 && percentage < 70){
    console.log("your grade is A+")
}else if(percentage > 50 && percentage < 60){
    console.log("your grade is A+")
}



var a = ["a", "b", "c", "d", "e", "f",];
a.push("z");
console.log(a);


a.shift();
console.log(a);


a.unshift("x");
console.log(a);


a.splice(2,3);
console.log(a);

var b = a.splice(2,3);
console.log(a);
console.log(b);


var b = a.slice(2,3);
console.log(b);


a.splice(2, 1, "x", "y", "z",);
console.log(a);

var i = a.indexOf("c");
var b = a.length;
console.log(b);



for(var i = 0; i < 10; i++){
    console.log("abc");
}



for(var i = 0; i < 10; i++){
    console.log("2 x " + (i + 1) + " = " + 2 * (i + 1));
}



var fruits = ["orange", "apple", "banana", "mango",];
console.log(fruits[3]);



var name = +prompt("enter name")
var math = +prompt("math marks")
var urdu = +prompt("urdu marks")
var islamiat = +prompt("islamiat marks")
var english = +prompt("english marks")
var pst = +prompt("pst marks")
var totalmarks = 500
var total = math+urdu+islamiat+english+pst
var percentage = ( total / totalmarks * 100)
console.log(percentage)

if(percentage > 80 && percentage < 90){
    console.log("your grade is A+")
}else if(percentage > 70 && percentage < 80){
    console.log("your grade is A+")
}else if(percentage > 60 && percentage < 70){
    console.log("your grade is A+")
}else if(percentage > 50 && percentage < 60){
    console.log("your grade is A+")
}



