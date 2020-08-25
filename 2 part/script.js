/***********************************
* variable mutation and type coercion
*/

// var firstName = 'John';
// var age = 28;

// //type coercion
// console.log(firstName + ' ' + age)

// var job = 'Teacher';
// var isMarried = false;

// console.log(firstName + ' is a ' + age + ' ' + job + '. is married? ' + isMarried );

// // variable mutation
//  age = "Twenty eight";
//  job = "driver";

//  alert(firstName + ' is a ' + age + ' ' + job + '. is married? ' + isMarried );

//  var lastName = prompt("what is his last name?");

//  console.log(firstName + ' ' + lastName);

/*******************************************************
 *basic operator
 *******************************************************/
// var now, yearJohn, yearMark,ageJohn,ageMark;

// //math operator
// now = 2020;
// ageJohn = 28;
// ageMark = 33;

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// //logic operator

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
//  console.log(typeof johnOlder)
//  console.log(typeof ageJohn)
//  console.log(typeof "Mark is older than John")
//  var x;
//  console.log(typeof x)

/******************************************
 * operator pricedence
 ******************************************/
/******************************************
 * coding challenge 1
 ******************************************/

//  var johnMass = 80;
//  var johnHeight = 1.7;

//  var markMass = 83;
//  var markHeight = 1.8

//  var johnBMI = johnMass/(johnHeight * johnHeight);
//  var markBMI = markMass /(markHeight * markHeight);
//  var isMarkBMIGreater = markBMI > johnBMI;
//  console.log("mark BMI: " + markBMI, "John BMI: " + johnBMI)
//  console.log('Is mark BMI greater the JohnBMI? ' + isMarkBMIGreater);

/******************************************
 * if/else statement
 ******************************************/

//  var firstName = 'john';
//  var civilStatus = 'married';

//  if (civilStatus == 'married'){
//      console.log(firstName + " is married");
//  }
//  else {
//     console.log(firstName + " will marry soon :)")
//  }
 
/******************************************
 * logical operator
 ******************************************/
// var firstName = 'John';
// var age = 30;

// if (age < 13) {
//     console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + " is a teenager");
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + " is a young man");
// } else {
//     console.log(firstName + " is a man");
// }
/******************************************
 * ternary operator and switch statement
 ******************************************/

 // ternary operator
// var firstName = 'John';
// var age = 20;

// var drink = age >= 18 ? 'Beer':'Juice';
// console.log(drink);

//switch statement
// var firstName = 'John';
// var age = 14;
// switch(true) {
//     case age < 13:
//         console.log(firstName + " is a boy");
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + " is a teenager");
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + " is a young man");
//         break;
//     default:
//         console.log(firstName + " is a man");
// }
/******************************************
 * challenge 2
 ******************************************/

//  var johnTeamAverage = (89 + 140 + 103)/3;
//  var markTeamAverage = (116 + 94 + 132)/3;
//  var marryTeamAverage = (97 + 140 + 105)/3;
//  console.log(johnTeamAverage,markTeamAverage,marryTeamAverage)

// if(johnTeamAverage === markTeamAverage && markTeamAverage === marryTeamAverage) {
//     console.log("Mark\'s team, Marry\'steam and John\'s teams are draw with average of " + johnTeamAverage);
//  } else if (johnTeamAverage > markTeamAverage && johnTeamAverage > marryTeamAverage) {
//      console.log("John\'s team is the winner with average of " + johnTeamAverage);
//  } else if (johnTeamAverage < markTeamAverage && markTeamAverage > marryTeamAverage) {
//     console.log("Mark\'s team is the winner with average of " + markTeamAverage);
//  }
//  else if (johnTeamAverage < marryTeamAverage && markTeamAverage < marryTeamAverage) {
//     console.log("Marry\'s team is the winner with average of " + marryTeamAverage);
//  }  else if (johnTeamAverage === markTeamAverage && markTeamAverage > marryTeamAverage) {
//     console.log("Mark\'s team and John\'s teams are draw with average of " + johnTeamAverage);
//  }
//  else if (johnTeamAverage < markTeamAverage && markTeamAverage == marryTeamAverage) {
//     console.log("Mark\'s team and Marry\'s teams are draw with average of " + markTeamAverage);
//  } else {
//     console.log("John\'s team and Marry\'s teams are draw with average of " + johnTeamAverage);

//  }


/******************************************
 * function
 ******************************************/
//  function calculateAge(birthYear){
//     return 2020-birthYear;
//  }
//  var ageJohn = calculateAge(1990);
//  var ageEsther = calculateAge(2000);
//  var ageFaustin = calculateAge(1995);

//  console.log(ageJohn, ageEsther ,ageFaustin);

//  function yearsUntilRetirement(year,firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if(retirement > 0){
//        console.log(firstName + " has " + retirement + " until retirment");
//      }
//     else  {
//       console.log(firstName + " is already retired");
//     }
   

//  }

//  yearsUntilRetirement(1948,"John");
//  yearsUntilRetirement(2000,"Esther");
//  yearsUntilRetirement(1995,"Faustin");
/********************************************
 * function statement and expresions
 */
//function expression

// var whatDoYoDo = function(job, firstName){
//    switch(job) {
//       case "Teacher":
//          return firstName + " teaches kids how to code";
//       case "Driver":
//          return firstName + " drives uber in Lisbone";
//       case "designer":
//          return firstName + " designs beatiful websited";
//       default:
//          return firstName + " does something else";
//    }
// }
// console.log(whatDoYoDo('Teacher', "John"));
// console.log(whatDoYoDo('Driver', "Esther"));
// console.log(whatDoYoDo('Teacher', "Johnr"));
// console.log(whatDoYoDo('retired', "Jane"));
/*********************************************
 * Arrays
 */

 //initializing a new array
// var names = ['John','Mark','Jane'];
// var years = new Array(1990,1965,1948);

// console.log(names[2]);
// console.log(names.length)

// //mutating array

// names[1] = "Ben";
// names[names.length] = "Marry";

// console.log(names);

// var john =['John','Smith',1990,'Teacher',false];
// john.push("Blue");
// console.log(john);
// john.unshift('Mr.');

// console.log(john);

// john.pop();
// john.pop();
// console.log(john)
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

/************************************
 * code challenge 3
 */
// var tipCalculator = function(amount){
//    switch(true){
//       case amount < 50:
//          return amount * 20/100;
//       case amount >= 50 && amount < 200:
//          return amount * 15/100;
//       case amount >=200:
//          return amount * 10/100;
//    }
// }

// var tips = []
// var totalAmount = []

// //tips

// tips[0] = tipCalculator(124);
// tips[1] = tipCalculator(48);
// tips[2] = tipCalculator(268);

// //total paid

// totalAmount[0] = 124 + tips[0];
// totalAmount[1] = 48 + tips[1];
// totalAmount[2] = 268 + tips[2];

// console.log(tips);
// console.log(totalAmount)

/*******************************************
 * object and properties
 */

//  var john = {
//     firstName:"John",
//     lastName:"smith",
//     birthYear:1990,
//     familyMembers:['Jane','Mark','Bob',"Emily"],
//     job:"Teacher",
//     isMarried:false
//  }

//  console.log(john.firstName);
//  console.log(john['lastName']);

//  var x = 'birthYear';
//  console.log(john[x]);

/*************************************************
 * object and methods
 */
//  var john = {
//     firstName:"John",
//     lastName:"smith",
//     birthYear:1990,
//     familyMembers:['Jane','Mark','Bob',"Emily"],
//     job:"Teacher",
//     isMarried:false,
//     calcAge:function(){
//        return this.age = 2020 - this.birthYear;
//     }
//  }
// john.calcAge();
// console.log(john.age)
/*************************************
 * coding challenge 4
 */
// var john = {
//    firstName:'John',
//    height:1.8,
//    mass:80,
//    calcBMI: function(){
//       return this.BMI = this.mass/(this.height * this.height);
//    }
// }
// var mark = {
//    firstName : "Mark",
//    height : 1.7,
//    mass : 80,
//    calcBMI: function(){
//       return this.BMI = this.mass/(this.height * this.height);
//    }
// }
// john.calcBMI(),mark.calcBMI();
// console.log(john.BMI,mark.BMI)
// if(john.BMI == mark.BMI) {
//    console.log("Both " + john.firstName + " and " + mark.firstName + " have the same BMI of " + john.BMI )
// } else if (john.BMI > mark.BMI) {
//  console.log(john.firstName + " has higher BMI of " + john.BMI)
// } else {
//  console.log(mark.firstName + " has higher BMI of " + mark.BMI)
// }

/********************************************
 * coding challenge 5
 */
var bill = {
   price:[124,48,268,180,42],
   tips:[],
   totalBill:[],
   calcTips:function(){
      for (var i = 0; i < this.price.length; i++){
         var percentage = 0;
         if(this.price[i] < 50){
            percentage = .2;
         } else if (this.price[i] >= 50 && this.price[i] < 200){
            percentage = .15;
         } else {
            percentage = .1;
         }
         this.tips[i] = percentage * this.price[i]
      }
   },
   calcBill:function(){
      for(var i=0; i < this.tips.length;i++){
         this.totalBill[i] = this.price[i] + this.tips[i];
      }
   }

}
bill.calcTips();
bill.calcBill();
console.log(bill.tips);
console.log(bill.totalBill);






























