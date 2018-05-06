/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {

      var parent = this.parentElement;
      parent.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
  });

});
