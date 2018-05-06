/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // zadanie z wykładowcą

    var title = document.querySelector('.title');
    var getDataAnimation = function(element) {
      return element.dataset.animation;
    };
    // console.log(title);
    console.log(getDataAnimation(title));


    // zadanie 1 - do samedzielnego wykonania

    var home1 = document.getElementById('home');
    var home2 = document.querySelector('#home');
    var li = document.querySelector('li:not([data-direction])');
    var block = document.querySelector('.block');

    console.log(home1, home2, li, block);

      // lub
    // var home1 = document.getElementById('home'),
    //     home2 = document.querySelector('#home'),
    //     li = document.querySelector('li:not([data-direction])'),
    //     block = document.querySelector('.block');
    //
    //  console.log(home1, home2, li, block);


    // zadanie 2 - do samodzielnego wykonania

    var navLi = document.querySelectorAll('nav li');
    var divP = document.querySelectorAll('div p');
    var articleDiv = document.querySelectorAll('article div');

    console.log(navLi, navLi.length);
    console.log(divP, divP.length);
    console.log(articleDiv, articleDiv.length);


    // zadanie 3 - do samodzielnego wykonania

    var article = document.querySelector('article.first')
    console.log(article);

    var h1 = article.getElementsByTagName('h1');
    console.log("h1 ilość:" + h1.length);

    var oferts = article.querySelectorAll('.oferts');
    console.log("oferts ilość:" + oferts.length);

    oferts.forEach(function(element) {
      console.log(element.tagName);
    });

    var divs = article.querySelectorAll('div');
    console.log("divs ilość:" + divs.length);

    divs.forEach(function(element) {
      console.log(element.className);
    });

    // for (var i = 0; i < divs.length; i++) {
    //   console.log(divs[i].className);
    // }

});
