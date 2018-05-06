/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.querySelectorAll('button');
  var counters = document.querySelectorAll('.counter');


  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      counters[index].innerText = parseInt(counters[index].innerText) +1;
    });
  });

});
