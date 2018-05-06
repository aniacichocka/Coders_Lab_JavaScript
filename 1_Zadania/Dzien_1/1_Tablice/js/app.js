// Zadanie z wykładowcą

function distFromAvarage( array ) {

    // Obliczenie średniej z tablicy
    var sum = 0;
    for( var i = 0; i < array.length; i++ ) {
       sum += array[i];
    }
    var avg = sum / array.length;


    // Obliczenie dystansu od średniej
    var dist = array.map( function(element, index, array) {
        return Math.abs( element - avg );
    });

    return dist;
}

console.log( distFromAvarage([1,2,3,4,5,6,7]) );


console.log("Zadanie 1");
// Zadanie 1 - do samodzielnego wykonania


var fruit = ["orange", "strawberry", "wattermelon"];

console.log(fruit[0]);

console.log(fruit[fruit.length-1]);

for(var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}


console.log("Zadanie 3");
// Zadanie 3 - do samodzielnego wykonania

 function printTable(array) {
   for (var i = 0; i < array.length; i++) {
     console.log(array[i]);
   }
 }
 printTable(fruit);


console.log("Zadanie 4");
// Zadanie 4 - do samodzielnego wykonania

function multiply(array) {
  var result = 1;
  for (var i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}
console.log(multiply([1,2,3,4,5,6,7]));


// druga opcja

function multiply(array) {
  var result = 1;
  array.forEach(function(element) {
    result *= element;
  });
  return result;
}
console.log(multiply([1,2,3,4,5,6,7]));


console.log("Zadanie 5");
// Zadanie 5 - do samodzielnego wykonania

function getEvenAvarage(array) {
  var evenSum = 0;
  var evenArray = array.filter(function(element) {
    if(element % 2 === 0) {
      evenSum += element; //return może być w tej linijce i wtedy bez return true
      return true;
    }
  });
  return evenSum / evenArray.length;
}
console.log(getEvenAvarage([1,2,3,4,5,6,7]));


console.log("Zadanie 6");
// Zadanie 6 - do samodzielnego wykonania

function sortArray(array) {

  return array.sort(function(a, b) {
    return a - b;
  });
}
console.log(sortArray([145, 11, 56, 3, 88]));


console.log("Zadanie 7");
// zadanie 7 - do samodzielnego wykonania

function addArrays(array1, array2) {

  var tempArray1 = [];
  var tempArray2 = [];

  if((array1.length > array2.length) || (array1.length === array2.length)) {
    tempArray1 = array1;
    tempArray2 = array2;

  } else {
    tempArray1 = array2;
    tempArray2 = array1;
  }

  var sumArrays = tempArray1.map(function(element, index) {
    if (typeof tempArray2[index] === "undefined") {
      return element;

    } else {
      return element + tempArray2[index];
    }
  });

return sumArrays;
}
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
