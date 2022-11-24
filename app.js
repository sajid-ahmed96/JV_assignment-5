var a = prompt("Enter your name")
var b = a.toUpperCase();
document.write(b)

var a = prompt("Enter your names")
var b = a.slice(0, 1);
var c = a.slice(1);
b = b.toUpperCase();
c = c.toLowerCase();
var d = b + c;
document.write(d)

var mobile = prompt("Enter a mobile company name");
var charsInMobile = mobile.length;
document.write(charsInMobile)

var a = prompt("Enter your name");
var b = a[a.length - 1];
document.write(b)

var a = "Pakistani"
var b = a.indexOf("n");
document.write(b)

var userName = prompt("Enter your username")
var b = userName.indexOf("@ !")
if (userName == b) {
    document.write("Please enter a valid username")
}

var str = "The quick brown fox jumps over the lazy dog"
var b = str.slice(0, 3)
var c = b
var d = c.length
document.write(d)

var a = "Pakistani"
document.write(a[3]);

var a = "Hyderabad"
var b = a.replace("Hyder", "Isalm")
document.write(b)

var message = "Ali and Sami are best friends. They play cricket and football together.";
var b = message.replace(/and/g, "&")
document.write(b)

var a = +prompt("Enter a number")
var b = Math.round(a)
var c = Math.floor(a)
var d = Math.ceil(a)
console.log(b)
console.log(c)
console.log(d)

var a = +prompt("Enter a negative number in decimal")
var b = Math.round(a)
var c = Math.floor(a)
var d = Math.ceil(a)
console.log(b)
console.log(c)
console.log(d)

var x = Math.random();
var dice = Math.ceil(x * 6)
console.log(dice)
var coin = Math.round(x + 1)
console.log(coin)

var x = Math.floor((Math.random() * 10));
console.log(x)
var y = prompt("Enter a number")
if (y == x) {
    console.log("Congratulation")
}
else {
    console.log("Please try again")
}

var weight = prompt("Enter your weight")
var x = parseInt(weight)
console.log(weight)

var str = "472"
console.log(str)
var b = typeof (str)
console.log(b)
var c = parseInt(str)
console.log(c)
var d = typeof (c)
console.log(d)

var num = 35.36;
var str = num * 100
var str1 = str.toString()
console.log(str1)

var percentage = 30 / 45 * 100
console.log(percentage)
var x = percentage.toFixed(2)
var y = parseFloat(x)
console.log(y)

var dt = new Date
console.log(dt)

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var dt = new Date
var a = dt.getMonth();
alert(months[a]);

var currentDay = new Date();
currentDay.toString;
var b = currentDay.toString();
var c = b.slice(0, 3);
alert("Today is " + c)

var dt = new Date();
dt.toString;
var b = dt.toString();
var c = b.slice(0, 3);
if (c === "Sat") {
    alert("It's Fun day")
}
else if (c === "Sun") {
    alert("It's Fun day")
}
else if (c === "Mon") {
    alert("It's Work day")
}
else if (c === "Tue") {
    alert("It's Work day")
}
else if (c === "Wed") {
    alert("It's Work day")
}
else if (c === "Thu") {
    alert("It's Work day")
}
else if (c === "Fri") {
    alert("It's Work day")
}

var dt = new Date();
if (dt <= 15) {
    alert("First fifteen days of the month")
}
else {
    alert("Last days of the month")
}

var a = new Date();
var b = a.getTime();
var c = a.getMinutes();
var d = b - c;
var g = d / (1000 * 60 * 60);
var f = Math.floor(g);
document.write("Current Date: " + a);
document.write("<br>" + "Elapsed milliseconds since midnight, Jan 1, 1970: " + b);
document.write("<br>" + "Elapsed minutes since midnight, Jan 1, 1970: " + f)

var dt = new Date();
var a = dt.getHours();
document.write(a)
if (a === 00 && a === 12) {
    alert("Its AM")
}
else {
    alert("Its PM")
}

var laterDate = new Date("12-31-2020")
console.log(laterDate)

var dt1 = new Date();
var dt2 = new Date("04-2-2022")
var a = dt1 - dt2
var b = a / (1000 * 60 * 60 * 24)
var c = Math.floor(b)
document.write(c + " days have passed since 1st Ramadan, 2022")

var dt1 = new Date();
dt1.setDate(05);
dt1.setMonth(11);
dt1.setFullYear(2015);
dt1.setHours(22);
dt1.setMinutes(50);
dt1.setSeconds(16);
var dt2 = new Date();
var a = dt2 - dt1;
var b = a / (1000)
var c = Math.floor(b)
console.log("On reference date " + dt1 + c + " seconds had passed since beginning of 2015")

var dt1 = new Date();
dt1.setHours(+11)
var dt2 = new Date();
console.log("Current date: " + dt1)
console.log("1 hour ago, it was " + dt2)

var dt1 = new Date();
dt1.setFullYear(1922);
var dt2 = new Date();
console.log("current date: " + dt2)
console.log("100 years back, it was " + dt1)

var age = +prompt("Enter your age")
var dt1 = new Date();
var a = dt1.getFullYear();
var b = a - age
console.log("Your age is " + age)
console.log("Your birth year is " + b)

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var x = "Sajid Ahmed"
document.write("Customer Name: " + x + "<br>")
var dt = new Date();
var a = dt.getMonth();
document.write("Month: " + months[a] + "<br>")
var units = 351
document.write("Number of units: " + units + "<br>")
var chargesPerUnit = 24
document.write("Charges per units: " + chargesPerUnit + "<br>")
var b = units * chargesPerUnit
document.write("Net Amount Payable: " + b + "<br>")
var c = 350
document.write("Late payment surcharge: " + c + "<br>")
var d = b + c
document.write("Gross Amount Payable: " + d + "<br>")

function date() {
    var dt = new Date();
    document.write(dt)
}
date()

function greet() {
    var a = prompt("Enter you first name")
    var b = prompt("Enter you last name")
    var c = a + b
    document.write("Hi! <br> Welcome to JavaScript " + c)
}
greet()

function sum() {
    var a = prompt("Enter first number")
    var b = parseInt(a)
    var c = prompt("Enter second number")
    var d = parseInt(c)
    var e = b + d
    document.write("The sum of two numbers is: " + e)
}
sum()

function calculator() {
    var a = +prompt("Enter first number")
    var b = +prompt("Enter second number")
    var c = prompt("Enter Operator (+,-,*,/)")
    if (c === "+") {
        document.write("First number: " + a + "<br>" + "Second number: " + b + "<br>" + "Result: " + (a + b))
    }
    else if (c === "-") {
        document.write("First number: " + a + "<br>" + "Second number: " + b + "<br>" + "Result: " + (a - b))
    }
    else if (c === "*") {
        document.write("First number: " + a + "<br>" + "Second number: " + b + "<br>" + "Result: " + (a * b))
    }
    else if (c === "/") {
        document.write("First number: " + a + "<br>" + "Second number: " + b + "<br>" + "Result: " + (a / b))
    }
    else {
        document.write("Please enter first number, second number and operator to proceed")
    }
}
calculator()

function square(x) {
    var a = x ** 2
    console.log(a)
}
square(13)

function factorial() {
    var a = parseInt(prompt("Enter a positive integer"))
    if (a < 0) {
        document.write("Error! Factorial for negative numbers does not exist")
    }
    else if (a === 0) {
        document.write("The factorial of " + a + "is 1.")
    }
    else {
        var fact = 1
        for (i = 1; i <= a; i++) {
            fact *= i
        }
        document.write("The factorial of " + a + " is " + fact)
    }
}
factorial()

function counting() {
    var a = parseInt(prompt("Enter starting number"))
    var b = parseInt(prompt("Enter ending number"))
    for (i = a; i <= b; i++) {
        console.log(i)
    }
}
counting()

function hypotenuse() {
    var a = parseInt(prompt("Enter base"))
    var b = parseInt(prompt("Enter perpendicular"))
    var c = a ** 2 + b ** 2
    var d = Math.sqrt(c)
    return d
}
var x = hypotenuse()
console.log(x)

function area(width, height) {
    var width;
    var height;
    var A = width * height
    console.log(A)
}
area(10, 16)

function palindrome(string) {
    var a = string.length;
    for (var i = 0; i < a / 2; i++) {
        if (string[i] !== string[a - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
var b = prompt('Enter a string: ');
var c = palindrome(b);
console.log(c);

function xyz() {
    var a = "the quick brown fox"
    var b = a.split(" ")
    for (var i = 0; i < b.length; i++) {
        b[i] = b[i][0].toUpperCase() + b[i].substring(1)
    }
    var c = b.join(" ")
    console.log(c)
}
xyz()

function longestWord() {
    var string = "Web Development Tutorial"
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var x = longestWord()
console.log(x)

function charCount(str, letter) {
    var letterCount = 0
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            letterCount += 1
        }
    }
    return letterCount
}
console.log(charCount("JSResourceS.com", "o"))

function calcCircumference(x) {
    var x;
    var p = 3.14
    var cirOfcirle = 2 * p * x
    console.log(cirOfcirle)
}
calcCircumference(8)

function calcArea(a) {
    var a;
    var p = 3.14
    var areaOfCircle = p * a ** 2
    console.log(areaOfCircle)
}
calcArea(8)