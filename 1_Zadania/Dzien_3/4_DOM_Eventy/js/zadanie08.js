/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {

  function resize() {
    document.getElementById('windowHeight').innerText = window.innerHeight;
    document.getElementById('windowWidth').innerText = window.innerWidth;
  }
  resize(); //wywołać funkcję, aby od razu event działał
  window.addEventListener('resize', resize);

});
