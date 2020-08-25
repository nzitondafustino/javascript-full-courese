// //function constructor

// var Person = function(name,yearOfBirth,job){
//     this.name = name,
//     this.yearOfBirth = yearOfBirth,
//     this.job = job
// }

// Person.prototype.calculateAge = function(){
//     console.log(2020 - this.yearOfBirth);
// }
// Person.prototype.lastname = "smith";

// var john = new Person("John",1990,"teacher");
// var jane = new Person("Jane",1980,'Designer');
// var mark = new Person("Mark",1948,"retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastname);
// console.log(jane.lastname);
// console.log(mark.lastname);

/****************************************
 * obect.create
 */

// var personProto = {
//     calculateAge:function(){
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = "John",
// john.yearOfBirth = 1990;
// john.job = "Teacher";

// var jane = Object.create(personProto,{
//     name: { value:"Jane" },
//     yearOfBirth: { value:1980 },
//     job:{ value:"Designer" }
// })
/*************************************
 * passing function as argument
 */
 
//  var years = [1990,1995,1980,1978,1967];

//  function arrayCalc(array,fn){
//      var arrayAges = [];
//      for(var i = 0 ; i < array.length ; i++){
//          arrayAges.push(fn(array[i]));
//      }
//      return arrayAges;
//  }

// function calculateAge(el){
//     return 2020 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }
// var ages = arrayCalc(years, calculateAge);

// var fullAge = arrayCalc(ages,isFullAge);

// console.log(ages);
// console.log(fullAge);

// function ask(age){
//     if( age < 18){
//         return function(name){
//             console.log(name + " what is the name of High school you are in?");
//         }
//     } else if (age >=18 && age < 30){
//         return function(name){
//             console.log(name + " what is the name of collage you are in?"); 
//         }
//     } else {
//         return function(name){
//             console.log(name + " what do you do for living sir?");
//         }
//     }
// }

// ask(18)("John");
// ask(12)("Jane");
// ask(40)("Mark");

/*********************************************
 * immediate invoked function expresion
 */

//  var sum = (function(a,b){
//      return a+b;
//  })(10,29);
//  console.log(sum);

/*************************************
 * closures
 */
// function ask(age){
//     var kid = 18;
//     return function(name){
//         if( age < kid){
//                 console.log(name + " what is the name of High school you are in?");

//         } else if (age >=18 && age < 30){
//                 console.log(name + " what is the name of collage you are in?"); 
//         } else {
//                 console.log(name + " what do you do for living sir?");
//         }
//       }
//     }
    
//     ask(18)("John");
//     ask(12)("Jane");
//     ask(40)("Mark");

/*******************************************
 * bind, call and apply
 */

 var john = {
     name:"John",
     age:28,
     job:"Teacher",
     presentation:function(style,time){
         if(style === "formal"){
             console.log("Good " + time + " I am " + this.name + " with " + this.age  + " I am a " + this.job);
         } else {
            console.log("Hey, Good " + time + " I am " + this.name + " with " + this.age  + " I am a " + this.job);  
         }
     }
 }
 //john.presentation('friendly',"Morning");

 var jane = {
     name:"Jane",
     age:30,
     job:"designer"
 }
 //call
 var johnPresntation = john.presentation.bind(john,'formal');
 johnPresntation('afternoon');

 //























































