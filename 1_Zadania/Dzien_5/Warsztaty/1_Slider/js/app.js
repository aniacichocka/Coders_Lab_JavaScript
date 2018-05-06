/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){
// console.log("działa");

  var next = document.getElementById('nextPicture');
  var prev = document.getElementById('prevPicture');

  var slider = document.querySelector('.slider');
  var list = slider.children;

  var index = 0;

  list[index].classList.add("visible");


  next.addEventListener('click', function(){
    // console.log("clik");
  list[index].classList.remove("visible");

  index+=1;

  if (index > list.length-1) {
    index = 0;
  };

  list[index].classList.add("visible");

  });


  prev.addEventListener('click', function(){
    // console.log("clik");

    list[index].classList.remove("visible");

    index-=1;

    if (index < 0) {
      index = list.length-1;
    };
    
    list[index].classList.add("visible");

  });


});
