/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
 document.addEventListener('DOMContentLoaded', function(){
 // console.log("działa");

  var gallery = document.querySelector('.gallery')
  var li = document.querySelectorAll('.gallery li');
  var body = document.querySelector('body');

  var imgs = document.querySelectorAll('li img');
  // console.log(imgs);

  function create(thisImage){
    var url = thisImage.getAttribute('src');

    var fulldiv = document.createElement('div');
    fulldiv.classList.add('fullScreen');
    fulldiv.style.backgroundImage = 'url(' + url + ')';
    fulldiv.style.backgroundRepeat = 'no-repeat';

    var button = document.createElement('button');
    button.innerText = 'Close';
    button.classList.add('close');
    button.style.marginLeft = '700px';

    var wrong = document.createElement('img');
    wrong.setAttribute('src', './images/wrong.png')
    wrong.style.width = '50px';
    wrong.style.height = '50px';
    wrong.style.marginLeft = '700px';
    wrong.style.marginBottom = '15px';

    fulldiv.appendChild(wrong);
    fulldiv.appendChild(button);
    body.appendChild(fulldiv);

    button.addEventListener('click', function(e){
      fulldiv.parentElement.removeChild(fulldiv);
    });
  };

  imgs.forEach(function(img){

    img.addEventListener('click', function(e){
    // console.log("działa");
    // console.log(this.getAttribute('src'));

      var thisImage = this;
      create(thisImage);
    });
  });

});

//--------------------DRUGA WERSJA BEZ CSS---------------------//

      // var fulldiv = document.createElement('div');
      // // fulldiv.style.backgroundColor = 'red';
      // fulldiv.style.width = '100vw';
      // fulldiv.style.height = '100vh';
      // fulldiv.style.backgroundImage = 'url(' + url + ')';
      //
      // //lub
      // // fulldiv.style.backgroundImage = `url(${url})`;
      //
      // fulldiv.style.position = 'relative';
      // fulldiv.style.backgroundSize = 'contain';
      // fulldiv.style.backgroundRepeat = 'no-repeat';
      //
      // var button = document.createElement('button');
      // button.innerText = 'Close';
      // button.style.position = 'absolute';
      // button.style.top = '0';
      // button.style.left = '0';
      //
      // var wrong = document.createElement('img');
      // wrong.setAttribute('src', './images/wrong.png')
      // wrong.style.width = '15px';
      // wrong.style.height = '15px';
      // wrong.style.position = 'absolute';
      // wrong.style.top = '0';
      // wrong.style.left = '50px';
      //
      // fulldiv.appendChild(wrong);
      // fulldiv.appendChild(button);
      // body.appendChild(fulldiv);
      //
      // gallery.style.display = 'none';
      //
      //
      // button.addEventListener('click', function(e){
      //   fulldiv.parentElement.removeChild(fulldiv);
      //   gallery.style.display = 'block';
//--------------------------------------------------//

      // var fulldiv = document.createElement('div');
      // fulldiv.style.zIndex = '1';
      // fulldiv.style.position = 'absolute';
      // fulldiv.style.top = '0';
      // fulldiv.style.left = '0';
      // fulldiv.style.backgroundColor = "white";
      // fulldiv.style.width = '100vw'; //viewport width (traktowane jak px)

      // var wrong = document.createElement('img');
      // wrong.setAttribute('src', './images/wrong.png')
      // wrong.style.width = '15px';
      // wrong.style.height = '15px';
      //
      // var button = document.createElement('button');
      // button.innerText = 'Close';
      //
      // var fullimg = document.createElement('img');
      // fullimg.setAttribute('src', url);
      // fullimg.style.width = 'auto';
      // fullimg.style.height ='100vh'; //viewport height
      // fullimg.style.margin = '0 auto';
      // fullimg.style.float = 'left';

      //druga opcja zapisu
      // fullimg.setAttribute('style', 'margin: 0 auto; height: 100vh; width: auto;');

      // fulldiv.appendChild(fullimg);
      // fulldiv.appendChild(button);
      // fulldiv.appendChild(wrong);
      // body.appendChild(fulldiv);
      //
      // gallery.style.display = 'none';


      // button.addEventListener('click', function(e){
      //   fulldiv.parentElement.removeChild(fulldiv);
      //   gallery.style.display = 'block';
      //
      // });
