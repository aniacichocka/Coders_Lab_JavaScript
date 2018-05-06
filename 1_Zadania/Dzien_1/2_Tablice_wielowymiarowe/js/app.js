
var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];



// Zadanie z wykładowcą

function checkArray(array) {
  return array.map(function(row) {
    return row.every(function(element) {
      return element % 2 === 0;
    });
  });
}

var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

console.log(checkArray(arr));


console.log("Zadanie 1");
// Zadanie 1 - do samodzielnego wykonania

var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);


console.log("Zadanie 2");
// Zadanie 2 - do samodzielnego wykonania

for (var i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i]); //zawartość pierwszego wymiaru tablicy

  console.log(task2Array[i].length); //długość drugiego wymiaru

  for (var j = 0; j < task2Array[i].length; j++) {
    console.log(task2Array[i][j]); //wszystkie elementy drugiego wymiaru
  }
}


console.log("Zadanie 3");
// zadanie 3 - do samodzielnego wykonania

function print2DArray(array) {
  for (var i = 0; i < array.length; i++) {

   for (var j = 0; j < array[i].length; j++) {

     console.log(array[i][j]);
  }
 }
}
print2DArray([[1,2,3],[4,5,6],[7,8,9]]);

console.log("");
//drugie rowzwiązanie

function print2DArray(array) {
  array.forEach(function(row) {
    row.forEach(function(element) {
      console.log(element);
    })
  })
}
print2DArray([[1,2,3],[4,5,6],[7,8,9]]);


console.log("Zadanie 4");
// Zadanie 4 - do samodzielnego wykonania

var array = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
];
print2DArray(array);


console.log("Zadanie 5");
// Zadanie 5 - do samodzielnego wykonanania

function create2DArray(rows,cols){
  var elValue = 1;
  var array = [];

  for (var i = 0; i < rows; i++) {
    array[i] = []; //przypisujemy pustą tablicę aby stworzyć rzędy

    for (var j = 0; j < cols; j++) {
      array[i][j] = elValue; //traktujemy jako wspólrzędne tablicy, do których wpisujemy wartości ze zmiennej elValue
      elValue++;
    }
  }
  return array;
}
console.log(create2DArray(4,4));
