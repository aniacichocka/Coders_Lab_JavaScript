/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

  var button = document.getElementById('remove');

  button.addEventListener('click', function(){

  var list = document.querySelector('ul');
  // var li = list.children;

  // list.parentElement.removeChild(list);
  list.innerHTML = null;

  });

});
