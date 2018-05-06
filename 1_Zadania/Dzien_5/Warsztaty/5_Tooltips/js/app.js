/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function(){
 // console.log("działa");

  var tooltips = document.querySelectorAll('.tooltip');
   // console.log(tooltips);
  tooltips.forEach(function(element){
    element.addEventListener('mouseover', function(e){
      // console.log(this.dataset.text);

      var tip = document.createElement('span');
      tip.classList.add('tooltipText');
      tip.innerText = "Text tooltipa";

      this.appendChild(tip);


      element.addEventListener('mouseout', function(e){
        // console.log(this.dataset.text);

        tip.parentElement.removeChild(tip);

      });
    });
  });

});
