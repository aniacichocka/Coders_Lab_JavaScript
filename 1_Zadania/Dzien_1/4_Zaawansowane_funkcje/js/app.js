// Zadanie 2 - do samodzielnego wykonania

function sortArray() {
  var arguments = Array.from(arguments);// metoda przystosowuje tablicę do tego, aby można było korzystać z funkcji wbudowanych

   arguments.sort(function(a,b) {
    return a-b;
  })

  return arguments[arguments.length-1];
}
console.log(sortArray(5, 29, 6, 4, 34, 56, 2, 3));


//Metoda 2
// function sortArray() {
// var arguments = Array.from(arguments);
// var max = 0;
//
// for (var i = 0; i < arguments.length; i++) {
//   if(arguments[i] > max) {
//     max = arguments[i];
//   }
//   return max;
// }
// console.log(sortArray(5, 29, 6, 4, 34, 56, 2, 3));

console.log("zadanie 3");
// zadanie 3 - do samoedzielnego wykonania

// function countHello(a){
//   i = 0;
//
//   interval {
//   if(i>a){
//     break;
//   }else {
//     i++;
//     console.log(i + "Hello");
//   }
//   }
// }
// countHello(8);

function countHello(a) {
  var i = 1;
  var interval = setInterval(function() {
    if (i > a) {
      clearInterval(interval);
    } else {
      console.log(i , "Hello");
      i++;
    }
  }, 1000);
}
countHello(8);


console.log("zadanie 4");
// zadanie 4 - do samodzielnego wykonania

//wywołuje się zarówno przed jak i za funkcja
text();
function text() {
  console.log("Cześć");
}
text();

// text2(); w tym przypadku ta fukcja w tym miejscu jeszcze nie istnieje
var text2 = function() {
  console.log("Witaj");
}
text2();
