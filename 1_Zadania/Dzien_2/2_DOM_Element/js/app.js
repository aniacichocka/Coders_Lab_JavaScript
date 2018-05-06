/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children // klasa oferts i jej dzieci
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     //zadanie z wykładowcą

     function getDatasInfo(element) {

       var newArray= [];

       for (var i = 0; i < element.length; i++) {
         newArray.push(element[i].dataset.color);
       }
       return newArray;
     };

     console.log(getDatasInfo(links));


     // zadanie 1 - do samodzielnego wykonania

     console.log(homeElement);
     console.log(childElements);

    //  childElements.forEach(function(element){
    //    console.log(element.tagName);
    //  });

    for (var i = 0; i < childElements.length; i++) {
      console.log(childElements[i].tagName);
      console.log(childElements[i].className);
    }

    console.log(banner);
    console.log(banner.tagName);
    console.log(banner.className);

    console.log(blocks);
    for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].tagName);
    console.log(blocks[i].className);
    }

    console.log(links);
    for (var i = 0; i < links.length; i++) {
    console.log(links[i].tagName);
    console.log(links[i].className);
    }


    // zadanie 2 - do samodzielnego wykonania

    // var blocks = document.querySelector('.blocks');
    // console.log(blocks.innerHTML);
    // console.log(blocks.outerHTML);
    // blocks.innerHTML = "Nowa wartość diva o klasie blocks";

    for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].innerHTML); //tylko zapis linków bez zapisu diva, w którym się znajdują
    console.log(blocks[i].outerHTML);
    blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
    }


    // zadanie 3 - do samodzielnego wykonania

    var mainF = document.getElementById('mainFooter');
    function getId(element) {
      return element;
    }
    console.log(getId(mainF.id));


    // zadanie 4 - do samodzielnego wykonania

    function getTags(elements) {
      var newArr = [];
      for (var i = 0; i < elements.length; i++) {
        newArr.push(elements[i].tagName);
      }
      return newArr;
    }
    console.log(getTags(childElements));

      //metoda, która pozwala na iterowanie tablicy niezależnie czy została "wygenerowana" przez querySelector czy przez getElementByTag

  // var getTags = function(element) {
  //   var tags = [];
  //   Array.prototype.map.call(elements, function(element) {
  //     tags.push(element.tagName);
  //   });
  //   return tags;
  // }
  // console.log(getTags(childElements));


  // zadanie 5 - do samodzielnego wykonania

  var getClassInfo = function(element) {
    return element.classList;
  };
  console.log(getClassInfo(banner));


  // zadanie 6 - do samodzielnego wykonania

  var allLi = document.querySelectorAll('nav li');
  function setDataDirection(elements) {
    elements.forEach(function(element) {
      if (typeof element.dataset.direction === "undefined") {
        element.dataset.direction = "top";
      }
    });
  };
  setDataDirection(allLi);

});
