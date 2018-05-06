/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener("DOMContentLoaded", function(){

  var number = document.getElementById('name');
  var addon = document.getElementById('type');

  number.addEventListener('keyup', function(e){

    if(number.value.charAt(0) === "4"){
      addon.innerText = "Visa";

      number.setAttribute('maxlength', '16');

      if(number.value.length >= 13 && number.value.length <= 16){
        addon.innerHTML = "<span>Visa</span><span style='color:green;'> ✔</span>";
      };


    }else if (number.value.charAt(0) === "5"){
      addon.innerText = "Mastercard";

      number.setAttribute('maxlength', '16');

      if(number.value.length >= 16 && number.value.length <= 16){
        addon.innerHTML = "<span>Mastercard</span><span style='color:green;'> ✔</span>";
      };


    }else if(number.value.charAt(0) === "3" && number.value.charAt(1) === "4" || number.value.charAt(1) === "7"){
      addon.innerText = "American Express";

      number.setAttribute('maxlength', '15');

      if(number.value.length >= 15 && number.value.length <= 15){
        addon.innerHTML = "<span>American Express</span><span style='color:green;'> ✔</span>";
      };


    }else if (number.value === ""){
      addon.innerText = "";
    };
  });
});
