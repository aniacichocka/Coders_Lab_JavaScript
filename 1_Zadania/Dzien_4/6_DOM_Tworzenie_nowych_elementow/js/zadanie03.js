/**
 * Created by Jacek on 2016-01-12.
 */


document.addEventListener("DOMContentLoaded", function(){

  var button = document.getElementById('remove');
  button.addEventListener('click', function(){
    button.parentElement.removeChild(button);
    // this.parentElement.removeChild(this);

  });


});
