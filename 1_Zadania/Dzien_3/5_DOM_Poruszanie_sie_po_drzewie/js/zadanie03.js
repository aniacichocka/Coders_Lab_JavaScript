/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.listContainer').forEach(function(div) {
    div.addEventListener('mouseover', function() {

      var children = this.querySelector("ul").children;

      var first = this.querySelector("ul").firstElementChild;
      var last = this.querySelector("ul").lastElementChild;

      for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = 'green';
      };
      first.style.backgroundColor = 'red';
      last.style.backgroundColor = 'blue';
    });
  });

// event, który usuwa style z mouseover
  document.querySelectorAll('.listContainer').forEach(function(div) {
    div.addEventListener('mouseout', function() {
      var children = this.querySelector('ul').children;

      for (var i = 0; i < children.length; i++) {
        children[i].removeAttribute("style");
      };
    });
  });


});
