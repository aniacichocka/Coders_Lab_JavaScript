/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){


  var move = document.querySelectorAll('.moveBtn');

  move.forEach(function(element){

    element.addEventListener('click', function(){

      var list1 = document.querySelector('#list1');
      var list2 = document.querySelector('#list2');

      moveElement(element);
    });
  });

  function moveElement(element){

    var listToMove = element.parentElement.parentElement.id ==='list2' ? list1 : list2;

    listToMove.appendChild(element.parentElement);
  };

});


// document.addEventListener('DOMContentLoaded', function() {
//   console.log('loaded');
//   btnsList = document.querySelectorAll('li a');
//   list1 = document.querySelector('#list1');
//   list2 = document.querySelector('#list2');
//
//   function moveElement(element) {
//     console.log('click');
//     var listToMove = this.parentElement.parentElement.id === 'list1'
//       ? list2
//       : list1
//       listToMove.appendChild(this.parentElement);
//   }
//
//   btnsList.forEach(function(element) {
//     element.addEventListener('click', moveElement);
//   });
//
//   })
