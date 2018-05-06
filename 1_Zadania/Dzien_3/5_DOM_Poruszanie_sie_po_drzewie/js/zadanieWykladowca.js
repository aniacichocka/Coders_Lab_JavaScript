/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function() {


  var first = document.querySelector('.first');
  var firstChild = first.firstElementChild;
  console.log(firstChild);
  var thirdChild = firstChild.children[2];
  console.log(thirdChild);

  var second = document.getElementById('second');
  var parentSecond = second.parentElement;
  var forthChild = parentSecond.children[3];
  console.log(forthChild);



  var third = document.querySelector('[data-ex="third"]');
  var grandpa = third.parentElement.parentElement;
  var lastChildThird = grandpa.lastElementChild;
  var firstChildThird = lastChildThird.firstElementChild;
  var medChild = firstChildThird.children[Math.floor(firstChildThird.children.length / 2)];
  console.log(medChild);

  var forth = document.querySelector('.forth');
  var parentForth = forth.parentElement;
  var articleChild = parentForth.querySelector('article');
  var tagChild = articleChild.querySelectorAll('p')[1];
  console.log(tagChild);

});
