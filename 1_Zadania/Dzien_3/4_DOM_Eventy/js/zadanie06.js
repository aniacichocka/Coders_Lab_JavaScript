/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('box').addEventListener('mouseover', function(event) {
    // console.log(event.screenX);
    document.getElementById('globalX').innerText = event.screenX + 'px';
    document.getElementById('globalY').innerText = event.screenY + 'px';
    document.getElementById('localX').innerText = event.clientX + 'px';
    document.getElementById('localY').innerText = event.clientY + 'px';
  });

});
