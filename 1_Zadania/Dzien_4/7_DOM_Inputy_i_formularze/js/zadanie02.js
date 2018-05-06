/**
 * Created by Jacek on 2016-01-12.
 */

      document.addEventListener('DOMContentLoaded', function() {
        console.log('load');

        var appleImg = document.querySelector('[alt="Apple"]');
        var ubuntuImg = document.querySelector('[alt="Ubuntu"]');
        var windowsImg = document.querySelector('[alt="Windows"]');
        var select = document.querySelector('select');
        var form = document.querySelector('form');

        var mapping = {
          'Windows': windowsImg,
          'Ubuntu': ubuntuImg,
          'Os X': appleImg,
        }

        function hideAll() {
          appleImg.style.display = 'none';
          ubuntuImg.style.display = 'none';
          windowsImg.style.display = 'none';
        }

        hideAll();

        mapping[select.value].style.display = 'block';

        form.addEventListener('submit', function(e){
          e.preventDefault();
          hideAll()
          mapping[select.value].style.display = 'block';
        });
      });
