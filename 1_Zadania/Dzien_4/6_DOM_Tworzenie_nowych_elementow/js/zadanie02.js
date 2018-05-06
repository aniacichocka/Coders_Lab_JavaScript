/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

  var orderId = document.getElementById('orderId');
  var item = document.getElementById('item');
  var quantity = document.getElementById('quantity');
  var addBtn = document.getElementById('addBtn');
  var orders = document.querySelector('#orders tbody');

  addBtn.addEventListener('click', function(){

    var tr = document.createElement('tr');
    var tdOrderId = document.createElement('td');
    var tdItem = document.createElement('td');
    var tdQuantity = document.createElement('td');

    tdOrderId.innerText = orderId.value;
    tdItem.innerText = item.value;
    tdQuantity.innerText = quantity.value;

    tr.appendChild(tdOrderId);
    tr.appendChild(tdItem);
    tr.appendChild(tdQuantity);
    orders.appendChild(tr);

  });


});
