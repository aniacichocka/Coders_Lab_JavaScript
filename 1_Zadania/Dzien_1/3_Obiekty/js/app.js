// Zadanie z wykładowcą

String.prototype.upperLower = function() {
  var result = "";
  var counter = 0;

  for (var i = 0; i < this.length; i++) {
    if (this[i] !== "") {
      counter++;
      if (counter % 2 !== 0) {
        result += this[i].toLowerCase();
      } else if (counter % 2 === 0) {
        result += this[i].toUpperCase();
      }
    }
  }
  return result;
}
console.log("Śmiesznie".upperLower());

//druga wersja

// String.prototype.upperLower = function() {
//   var result = "";
//   k = 0;


// wersja z pętla for
// for (var i = 0; i < this.length; i++) {
//   if (this[i] !== "") {
//   k++
// }
//   result += (k % 2 === 0) ? value.toUpperCase() : value.toLowerCase();
// }

//wersja z konwersja na tablice i metoda map
//   Array.prototype.map.call(this, function(value) {
//     if(value !=="")
//     k++
//
//     result += (k % 2===0) ? value.toUpperCase() : value.toLowerCase();
//   });
//   return result;
// };
//
// console.log("Smiesznie".upperLower());
//
// var funnyTextWithSpace = "Javascrript jest super".upperLower();
// console.log(funnyTextWithSpace);


console.log("zadanie 1");
// Zadanie 1 - do samodzielnego wykonania

var book = {
  title: "Alchemik",
  author: "Paulo Coelho",
  numberOfPges: 183,
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPges);

// lub
// console.log(book.title + "/" + book.author + "/" + book.numberOfPges);


console.log("zadanie 2");
// zadanie 2 - do samodzielnego wykonania

var person = {
  name: "Anna",
  age: 20,
  sayHello: function() {
    return "hello";
  }
};

console.log(person.name);
console.log(person.age);
console.log(person.sayHello());


console.log("zadanie 3");
// zadanie 3 - do samodzielnego wykonania

var train = {};
console.log(train instanceof Object);


console.log("zadanie 4");
// zadanie 4 - do samodzielnego wykonania

// var car = {
//   brand: "toyota",
//   color: "red",
//   numberOfKilometers:0,
// };

var Car = function(brand, color) {
  this.brand = brand;
  this.color = color;
  this.numberOfKilometers = 0
};

Car.prototype.printCarInfo = function() {
  console.log( "Marka " + this.brand);
  console.log("Kolor " + this.color);
  console.log("Przejechane km " + this.numberOfKilometers);
};

Car.prototype.drive = function(km) {
 this.numberOfKilometers += km;
};

var toyota = new Car( "Toyota", "red");
toyota.drive(500);
toyota.printCarInfo();

var mercedes = new Car ("Mercedes", "black");


console.log("zadanie 5");
// zadanie 5 - do samodzielnego wykonania

var car = {
  brand: "mercedes",
  color: "czarny",
  numberOfKilometers: 10,
  printCarInfo: function() {
    return (this.color + " " + this.brand + " " + this.numberOfKilometers);
  },
  drive: function(km) {
    return (this.numberOfKilometers += km);
  }
};

car.dates = ["12.12.2015", "10.11.2016", "22.11.2017"];

car.addDate = function(date) {
  return this.dates.push(date);
};
car.addDate("3.3.2018");
console.log(car.dates);

car.allDates = function() {
  return car.dates.forEach(function(element) {
  console.log(element);
  })
};
car.allDates();


//drugi sposób

// Car.prototype.addDate = function (date) {
//     if( typeof this.datesArray === 'undefined' ) {
//         this.datesArray = [date];
//     } else {
//         this.datesArray.push(date);
//     }
// };

/**
 * Wyświetl przeglądy
 */
// Car.prototype.showDates = function () {
//     if( typeof this.datesArray === 'undefined' ) {
//         console.log( 'Brak przeglądów' );
//         return false;
//     }
//
//     this.datesArray.map(function (date, index) {
//         console.log( '#'+index +': '+ date );
//     });
// };
//
// mercedes.addDate('10-10-17');
// mercedes.addDate('20-12-18');
// mercedes.showDates();


console.log("zadanie 6");
// zadanie 6 - do samodzielnego wykonania

var bird = {
  type: "papuga",
  name: "Antonina",
  getType: function() {
  return type
  }
};

console.log(bird instanceof Object);


console.log("zadanie 7");
// zadanie 7 - do samodzielnego wykonania

var myString = "ala";
console.log(myString instanceof String);//false

var myNumber = 22;
console.log(myNumber instanceof Number);//false

console.log(myString.constructor);
console.log(myNumber.constructor);


console.log("zadanie 9");
// zadanie 9 - do samodzielnego wykonania

function Rectangle(width, height) {
  this.width = width;
  this.height = height
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};

Rectangle.prototype.getPerimiter = function() {
  return this.width + this.height + this.width + this.height;
};

var figure = new Rectangle(10, 10);
console.log(figure.getArea());

//lub

var rectangleModel = {
  width: 20,
  height: 50,
  getA: function() {
    return this.width * this.height;
  },
  getP: function(){
    return 2*this.width + 2*this.height;
  }
};

var figure1 = Object.create(rectangleModel,{
  width: {value: 20},
  height: {value: 3}
});

var figure2 = Object.create(rectangleModel);
var figure3 = Object.create(rectangleModel);

console.log(figure1.hasOwnProperty("getA"));
console.log(figure1.hasOwnProperty("getP"));

//metoda nie jest własnością tych obiektów, jedynie z niej korzystają

console.log(figure1.getA()); //nowe wartości zmiennych
console.log(figure2.getA());

console.log("zadanie 10");
// zadanie 10 - do samodzielnego wykonania

function Calculator(){
  this.array = [];
};

Calculator.prototype.add = function(num1, num2) {
  var result = num1 + num2;
  this.array.push("added " + num1 + " to " + num2 + " got " + result);
  return result;
};

Calculator.prototype.multiply = function(num1, num2) {
  var result = num1 * num2;
  this.array.push("multiplied " + num1 + " with " + num2 + " got " + result);
  return result;
};

Calculator.prototype.subtract = function(num1, num2) {
  var result = num1 - num2;
  this.array.push("subtracted " + num1 + " from " + num2 + " got " + result);
  return result;
};

Calculator.prototype.divide = function(num1, num2) {
  var result = num1 / num2;
  this.array.push("divided " + num1 + " by " + num2 + " got " + result);
  return result;
};

Calculator.prototype.printOperations = function() {
  return this.array;
};

Calculator.prototype.clearOperations = function() {
  return this.array = [];
};

var arr1 = new Calculator;
console.log(arr1.add(3, 5));
console.log(arr1.multiply(4, 6));
console.log(arr1.subtract(8, 4));
console.log(arr1.divide(36, 6));
console.log(arr1.printOperations());
console.log(arr1.clearOperations());
