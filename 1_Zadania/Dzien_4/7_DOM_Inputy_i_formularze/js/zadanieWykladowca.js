/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener('DOMContentLoaded', function() {
   console.log('loaded');

   var email = document.getElementById('email');
   var name = document.getElementById('name');
   var surname = document.getElementById('surname');
   var pass1 = document.getElementById('pass1');
   var pass2 = document.getElementById('pass2');
   var agree = document.getElementById('agree');

   var errorsField = document.querySelector('.error-message');

   var form = document.querySelector('form');

   function validateInputs() {
     var re = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/g
     var isValid = true;
     var errorMsg = '';
     if (email.value.indexOf('@') === -1) {
       isValid = false;
       errorMsg += '**Email musi posiadać znak @**  \n';
     };

     if (name.value.length <= 5 ) {
       isValid = false;
       errorMsg += '**Twoje imię jest za krótkie** \n';
     };

     if (surname.value.length <= 5 ) {
       isValid = false;
       errorMsg += '**Twoje nazwisko jest za krótkie** \n';
     };

     if (!re.test(pass1.value)) {
       isValid = false;
       errorMsg += '**Hasła nie spelnia wymagan** \n';
     };

     if (pass1.value != pass2.value || !pass1.value.length || !pass2.value.length) {
       isValid = false;
       errorMsg += '**Hasła nie są takie same lub puste** \n';
     };

     if (!agree.checked) {
       isValid = false;
       errorMsg += '**Musisz zaakceptować warunki** \n';
     };
     console.log(errorMsg);
     errorsField.innerText = errorMsg;
     return isValid;
   };

   form.addEventListener('submit', function(e) {
     if(!validateInputs()) {
       e.preventDefault();
     }
     console.log('wysylka');
   });
 });


// ^(?=.*[a-z](?=.*\d)[a-zA-Z\d]{6,}$/g
