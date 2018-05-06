/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){
 // console.log("działa");

  var images = document.querySelectorAll('img');
  var showBtn = document.getElementById('showButton');
  var hideBtn = document.getElementById('hideButton');
  var input = document.getElementById('tagInput');
 // console.log(input);

  showBtn.addEventListener('click', function(){
    var text = input.value;
    input.value = "";

    // for (var i = 0; i < images.length; i++) {
    //    // return images[i].dataset.tag;
    //
    //   if (images[i].dataset.tag.indexOf(text) > -1) {
    //     // console.log(images[i]);
    //   } else {
    //     images[i].classList.add('invisible');
    //   }
    // }
    for (var i = 0; i < images.length; i++) {
       // return images[i].dataset.tag;

       if (images[i].hasAttribute('class')) {
         images[i].classList.remove('invisible');
       };

      if (images[i].dataset.tag.indexOf(text) < 0) {

        images[i].classList.add('invisible');
        // console.log(images[i]);
      };
    };

  });

  hideBtn.addEventListener('click', function(){
    var text = input.value;
    input.value = "";


    for (var i = 0; i < images.length; i++) {

      if (images[i].dataset.tag.indexOf(text) > -1) {
        // console.log(images[i]);
        images[i].classList.add('invisible');
      };
    };
  });

});
