/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function(){
// console.log("działa");

  var list = document.querySelectorAll('.nav > ul > li');
  console.log(list);

  list.forEach(function(element){

    element.addEventListener('mouseover', function(e){
      // console.log("over");
      var innerUl = this.querySelector('ul');
      // console.log(innerUl);

      if (innerUl !== null) {
        // console.log("over");
        innerUl.style.display = 'inline-block';
      };
    });


    element.addEventListener('mouseout', function(e){
      // console.log("out");
      var innerUl = this.querySelector('ul');
      // console.log(innerUl);

      if (innerUl !== null) {
        // console.log("out");
        innerUl.style.display = 'none';
      };
      
    });

  });



});
