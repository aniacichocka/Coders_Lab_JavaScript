document.addEventListener('DOMContentLoaded', function() {

  var parents  = document.querySelectorAll('.parent');

  parents.forEach(function(parent) {

    //MouseOver

    parent.addEventListener('mouseover', function() {
      this.querySelector('.children').style.display = 'block';
    });

    //MouseOut

    parent.addEventListener('mouseout', function() {
      this.querySelector('.children').style.display = 'none';
    });
  });
});
