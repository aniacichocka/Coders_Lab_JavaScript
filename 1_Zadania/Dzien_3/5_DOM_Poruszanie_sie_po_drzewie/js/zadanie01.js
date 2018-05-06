/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {


  var buttons = document.querySelectorAll('.button');

  buttons.forEach(function(element) {
    element.addEventListener('click', function() {

      var nextSibling = this.nextElementSibling;

      if(nextSibling !== null){

        if (nextSibling.style.display = 'none') {
          nextSibling.style.display = 'block;'
        } else {
          nextSibling.style.display = 'none;'
        }

      }
    });
  });


});
