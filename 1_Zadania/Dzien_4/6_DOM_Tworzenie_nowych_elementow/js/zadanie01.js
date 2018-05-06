/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  var button = document.querySelector('.button');

  var number = 1;
  var counter = 0;

  button.addEventListener('click', function() {

    var li = document.createElement("li");
    li.innerText = "Element " + number + " w chwili dodania było " + counter + " elementów";
    number += 1;
    counter += 1;

    document.querySelector('.menu').appendChild(li);

  });

});
