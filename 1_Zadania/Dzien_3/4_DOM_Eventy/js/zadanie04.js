/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.querySelectorAll('button');
  var counter = document.querySelector('.counter');

  buttons.forEach(function(element) {
    element.addEventListener('click', function() {
      counter.innerText = parseInt(counter.innerText)+1;
    });
  });

});
