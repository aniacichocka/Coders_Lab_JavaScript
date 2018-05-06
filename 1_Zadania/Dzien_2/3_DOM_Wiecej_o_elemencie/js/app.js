/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */


// zadanie z wykładowcą

function zadanie_w1(){
  var li = document.querySelectorAll('.ex5 li');
  li.forEach(function(element, key){

    //1
    if(typeof element.dataset.direction === "undefined"){
      element.dataset.direction = "up";
    }

    //2
    if (key % 2 ===0) {
      element.style.backgroundColor = "green";
    }

    //3
    if (key === 5){
      element.classList.add("big");
    }

    //4
    if (key % 3 === 0) {
      element.style.textDecoration = "line-through";
    }
  });
};
zadanie_w1();

// zadanie 1 - do samodzielnego wykonania

function zadanie_s1() {
  var ex1Div = document.querySelectorAll('.ex1 > div');
  ex1Div.forEach(function(element){

    ex1Div[0].querySelector('a').innerText = "Google Chrome";
    ex1Div[0].querySelector('.chrome').style.width = '100px';

    ex1Div[1].querySelector('.edge').style.backgroundImage = 'url(assets/img/edge.png)';
    ex1Div[1].querySelector('a').setAttribute('href', 'http://microsoft.com');

    ex1Div[2].querySelector('.firefox').style.backgroundImage = 'url(assets/img/firefox.png)';
    ex1Div[2].querySelector('a').setAttribute = ('href', 'http://mozilla.com');
    ex1Div[2].querySelector('a').innerText = "Firefox";
  });
}
zadanie_s1();

// lub

// function zadanie_1() {
//     var divs = document.querySelectorAll('.ex1 > div');
//
//     divs.forEach(function (div, index) {
//         switch (index) {

            // Google Chrome
            // case 0:
            //     div.querySelector('.chrome').style.width = '100px';
            //     div.querySelector('a').innerText = 'Google Chrome';
            //     break;


            // Edge
            // case 1:
            //     div.querySelector('.edge').style.backgroundImage = 'url(assets/img/edge.png)';
            //     div.querySelector('a').setAttribute('href', 'http://microsoft.com');
            //     break;


            // Firefox
    //         case 2:
    //             div.querySelector('.firefox').style.backgroundImage = 'url(assets/img/firefox.png)';
    //             div.querySelector('a').setAttribute('href', 'http://mozilla.com');
    //             div.querySelector('a').innerText = 'Firefox';
    //
    //     }
    // });
    // }
    // zadanie_1();

// zadanie 2 - do samodzielnego wykonania
function zadanie_2s() {
var span = document.querySelectorAll('.ex2 span');
console.log(span);

span.forEach(function(element) {
  span[0].innerText = "Ania Cichocka";
  span[1].innerText = "czarny";
  span[2].innerText = "sałatka";
});
}
zadanie_2s();

// zadanie 3 - do samodzielnego wykonania
function zadanie_3s(){


var ulMenu = document.querySelector('.ex3 ul');
ulMenu.classList.add("menu");

var liMenu = document.querySelectorAll('.ex3 li'); //bez wisywania var
for (var i = 0; i < liMenu.length; i++) {
  liMenu[i].classList.add("menuElement");
  liMenu[i].classList.remove("error");
};
}
zadanie_3s();

// zadanie 4 - do samodzielnego wykonania

function zadanie_4s(){

var ex4li = document.querySelectorAll('.ex4 li');

var counter = 1;
for (var i = 0; i < ex4li.length; i++) {
  ex4li[i].dataset.id = counter;
  counter++;
}

// ex4li.forEach(function(element,i){
//   element.dataset.id = i+1;
  //lub
//   element.setAttribute('data-id', i+1);
// });


}
console.log(zadanie_4s());



});
