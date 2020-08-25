///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1990);

// function calculateAge(year){
//     console.log(2020 - year);
// }

// //retirement(1995);
// var retirement = function(year){
//   console.log(65-(2020-year));
// }

// var age = 27;
// function printAge(){
//     console.log(age);
//     var age = 38;
//     console.log(age)
// }
// printAge();
// console.log(age);














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


// console.log(this)

//calculateAge(1990)
// function calculateAge(year){
//     console.log(2020 - year);
//     console.log(this);
// }
// window.calculateAge(1990);

var john = {
    name:"John",
    year: 1990,
    calculateAge:function(){
        console.log(this);
        console.log(2020 - this.year);
    //     function inner(){
    //         console.log(this);
    //     }
    //     inner();
    }
}
john.calculateAge();

var mike = {
    name:"Mike",
    year:1984
}
mike.calculateAge = john.calculateAge;
mike.calculateAge();





