/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

   var check = document.getElementById('invoice');
   var invoiceData = document.getElementById('invoiceData');
   invoiceData.style.display = "none";


  invoice.addEventListener('change',function(){
  var display = this.checked ? 'block' : 'none';
  invoiceData.style.display = display;

  });

});
