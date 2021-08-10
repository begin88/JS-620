//**************************Task 1*****************************//
//
let x = 1;
let y = 2;
let res = ( (x + y) * "4");
res1  = data + " ";
console.log(res);
console.log(typeof res1);

// 
let x = 1;
let y = 2;
let res = (x >= y);
let  res3  = !!x;
console.log(res1);
console.log(typeof res3);

//


//**********************Task 2******************************// 

let number = prompt("Choose a number");
    if (number % 2 === 0 && number > 0) {
        console.log("Your number is piired positive");
    } 
    else if ( number % 7 === 0) {
        console.log("You number is multiple 7");
    }
    else {
        console.log("It's not a numbet")
    }

    

// ******************** Task 3 ******************************//

const arr = [];
arr.push(29, "Hello", true, null);
console.log(arr.length);
arr[4] = prompt("Choose a value");
console.log(arr[4]);
arr.shift();
console.log(arr);



// *********************Task 4 *********************************//
let cities = ["Rome","Lviv","Warsaw"];
cities.join(" * ");


// ********************Task 5****************************** //

let isAdult = Number(prompt( "What is your age?"));
if (isAdult >= 18) {
    alert("You are an adult");
} else if (isAdult < 10) {
    alert("Yuo are too young");
} else {
    alert("Wrong value");
}


// **********************Task 6**********************//
let a = Number(prompt("Set a value of first side"));
let b = Number(prompt("Set a value of second side"));
let c = Number(prompt("Set a value of thirt side"));
    if (a > 0 && b > 0 && c > 0) {
        let p = (a + b + c) / 2;
        let triangArea =Math.sqrt(p * (p - a ) * (p - b) * (p - c));
        console.log("Triangle area is: " + triangleArea.toFixed(3));
    }
    else {
        alert("Incorrect data");
    }    
    if ((a * a + b * b === c * c ) || ( b * b + c * c === a * a) || (c * c + a * a === b * b))
    {
        console.log("The triangle is right-angeled")
    }
    else {
        console.log("The triangle is'n right-angeled")
    }


