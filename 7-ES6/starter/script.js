//ES6, IIFE and Block

// {
//     const a = 10;
//     let b = 20;
//     var c = 50;
    
// }
// console.log(c);

/***********************************************
 * string
//  */
//  let firstName = "John";
//  let LastName ="Smith";

//  console.log(`This is ${firstName} ${LastName}`);

//  const n = `${firstName} ${LastName}`;
//  console.log(n.startsWith('J'));
//  console.log(n.startsWith('th'));
//  console.log(n.includes('mi'));
//  console.log(`${firstName} `.repeat(5));
/***********************************************
 * arrow function
 */
//ES5

// var box5 = {
//     color:"Green",
//     position:1,
//     clickMe:function(){
//         var self = this
//         document.querySelector('.green').addEventListener('click',function(){
//             console.log("I am a " + self.color + " at position " + self.position);
//         })
//     }
// }
// // box5.clickMe();
// //ES6
// var box6 = {
//     color:"Green",
//     position:1,
//     clickMe:function(){
//         document.querySelector('.green').addEventListener('click',()=>{
//             console.log("I am a " + this.color + " at position " + this.position);
//         })
//     }
// }
// box6.clickMe();

/********************************************************
 * destructor
 */

// let  numbers = [1,2,3];

// const [number1,number2, number3] = numbers;

// console.log(number1,number2,number3);

// var person = {
//     name:'John',
//     age:29
// }

// const {name} = person;
// console.log(name);

// const {name:firstName} = person;
// console.log(firstName);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age,retirment] = calcAgeRetirement(1990);

// console.log(age,retirment);


/***************************************
 * arrays in ES6
 */
 
 //ES5

 var boxes= document.querySelectorAll('.box');

 var boxesArray5 = Array.prototype.slice.call(boxes);

//  boxesArray5.forEach(element => {
//      element.style.backgroundColor = "dodgerblue"
//  });

//ES6

var boxesArray6 = Array.from(boxes);

 boxesArray6.forEach(element => {
     element.style.backgroundColor = "dodgerblue"
 });

 //ES5

// for(var i = 0 ; i < boxesArray5.length ; i++){
//     if(boxesArray6[i].className === 'box blue'){
//         continue;
//     }
//     boxesArray6[i].textContent = "I changed to blue";
// }
//ES6

// for (const cur of boxesArray6) {
//     if(cur.className.includes('blue')){
//         continue;
//     }
//     cur.textContent = "I changed to blue";
// }

//ES%

var ages = [10,17,8,11,12,21];

// var fullAge = ages.map(function(age){
//     return age >= 18;
// })
// console.log(fullAge.indexOf(true))
// console.log(ages[fullAge.indexOf(true)])

//ES6

// var fullAge = ages.findIndex(cur=> cur >= 18);
// console.log(fullAge);
// console.log(ages.find(cur=>cur >= 18));

/************************************************
 * spread operator
 */

//  var addFourAges = function(a,b,c,d){
//      return a+b+c+d;
//  }

//  //ES5
//  ages = [29,40,10,78];
//  var sum1 = addFourAges.apply(this,ages);
//  console.log(sum1);

// //ES6
//  const sum3 = addFourAges(...ages)
// console.log(sum3);
/********************************************
 * rest parameter
 */

 //ES5
//  function isFullAge5(limit){
//      var all = Array.prototype.slice.call(arguments,1);
//      console.log(all)
//     all.forEach(function(cur){
//         console.log((2020 - cur) >= limit)
//     })

//  }
// isFullAge5(21,1990,1999,1995,2006);

// //ES6
// function isFullAge6(limit, ...years){
//     years.forEach(cur=>console.log((2020 - cur)>=limit))
// }
// isFullAge6(21,2000,1999,1995,2006);
/********************************************
 * Default parameters
 */
/********************************************
 * Maps
 */
// var question = new Map();
// question.set('question','What is the official name of the current major javascript version');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct',3);
// question.set(true,'correct answer :D');
// question.set(false,'Wrong, try again');
// console.log(question.get('question'));
// console.log(question.size); 
// if(question.has(4)){
//     //question.delete(4);
//     console.log("answer is here");
// }

// // question.forEach((value,key)=>{
// //     console.log(`This is ${key} and it's value is set to ${value}`);
// // })

// for (let [key,value] of question.entries()) {
//     if(typeof(key) === 'number')
//     console.log(`This is ${key} and it's value is set to ${value}`);
// }

// const ans = parseInt(prompt("choose the correct answer"));

// console.log(question.get(ans === question.get('correct')));

/************************************************
 * lecture Class
 */

 //ES5

//  var Person5 = function(name, yearOfBirth, job){
//      this.name = name;
//      this.yearOfBirth = yearOfBirth;
//      this.job = job;
//  }
//  Person5.prototype.calculateAge = function(){
//      var age = new Date().getFullYear() - this.yearOfBirth;
//  }

//  var john5 = new Person5('John', 1990, "Teacher");

 //ES6


//  class Person6 {
//      constructor(name,yearOfBirth,job){
//          this.name = name;
//          this.yearOfBirth = yearOfBirth;
//          this.job = job;
//      }
//      calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth;
//      }
//      static greeting(){
//          console.log('Hey there!');
//      }
//  }
//  var john6 = new Person5('John', 1990, "Teacher");

//  Person6.greeting();

/****************************************
 * INHERITANCE
 */
//ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, "Teacher");

// var Athlete5 = function(name, yearOfBirth, job, olimpicGames, medals){
//     Person5.call(this, name, yearOfBirth, job);
//     this.olimpicGames = olimpicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonModel = function(){
//     console.log(++this.medals);
// }

// var johnAthlete5 = new Athlete5('john',1990,"swimmer",3,10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonModel();

// //ES6

//  class Person6 {
//      constructor(name,yearOfBirth,job){
//          this.name = name;
//          this.yearOfBirth = yearOfBirth;
//          this.job = job;
//      }
//      calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//      }
//      static greeting(){
//          console.log('Hey there!');
//      }
//  }

//  class Athlete6 extends Person6 {
//      constructor(name, yearOfBirth, job, olimpicGames, medals){
//          super(name, yearOfBirth, job);
//          this.olimpicGames = olimpicGames;
//          this.medals = medals;
//      }
//      wonModel(){
//         console.log(++this.medals);
//      }
//  }
//  var johnAthlete6 = new Athlete6('john',1990,"swimmer",3,10);
//  johnAthlete6.calculateAge();
//  johnAthlete6.wonModel();

/*********************************************************
 * CODING CHALLENGE 8
 */
//town has 3 parks and 4 streets
//street and park has name and build year
/***********************
 * I am requested to have 
 * 1.a tree density of each park = trees/park are
 * 2.average age of each town parks = ages/total park in the town
 * 3.The name of park that has more than 1000 trees
 * 4.total and average lenght of town streets
 * 5.size classification of streets:
 * tiny/small/nomal/big/huge. if size is unkown,the size is normal
 */

class Park {
    constructor(name, year, trees, parkArea){
        this.name = name;
        this.year = year;
        this.trees = trees;
        this.parkArea = parkArea;
    }
    getTreeDensity(){
        return this.trees/this.parkArea;
    }
    getAge(){
        return new Date().getFullYear() - this.year;
    }
}

class Street {
    constructor(name, year, length, size='normal'){
        this.name = name;
        this.year = year;
        this.length = length;
        this.size = size;
    }
    getClass(){
        return this.size;
    }
}

//park instances

const park1 = new Park('park 1', 2000, 200, 2000);
const park2 = new Park('park 2', 2009, 100, 6790);
const park3 = new Park('park 3', 2010, 1000, 189);

//streets instances

const street1 = new Street('street 1', 1999, 200, 'huge');
const street2 = new Street('street 2', 2005, 500, 'tiny');
const street3 = new Street('street 1', 1990, 1000, 'big');
const street4 = new Street('street 1', 2007, 1700);


//display park report

var parkReport = (...parks)=>{
    console.log('===================Parks Report==============================');
    var sumOfAge = 0;
    parks.forEach(cur=>{
        console.log(`${cur.name} has a tree density of ${cur.getTreeDensity()} meter/square meters`);
        sumOfAge += cur.getAge();
        if(cur.trees > 1000){
            console.log(`${cur.name} has more than 1000 trees`);
        }
    })
    console.log(`the average town's park age is ${sumOfAge/3}`);
}

//display Street report
var streetReport = (...streets)=>{
    console.log('===================Streets Report==============================');
    var totalLength = 0,avererageLength;
    streets.forEach(street=>{
        totalLength += street.length;
        console.log(`${street.name}, its size is ${street.getClass()}`);
    })
    avererageLength = totalLength/4;
    console.log(`The total length is ${totalLength}`);
    console.log(`The average length is ${avererageLength}`);
    
}

parkReport(park1,park2,park3);
streetReport(street1,street2,street3,street4);

















