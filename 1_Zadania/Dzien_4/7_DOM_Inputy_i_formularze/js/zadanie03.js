/**
 * Created by Jacek on 2016-01-12.
 */

 document.addEventListener("DOMContentLoaded", function(){

   var team1 = document.getElementById('team1');
   var points1 = document.getElementById('points1');
   var team2 = document.getElementById('team2');
   var points2 = document.getElementById('points2');
   var button = document.querySelector('.btn');

    function validate(){

     var isValid = true;

     if (team1.value === team2.value) {
       isValid = false;
     }

     if (points1.value < 0 ) {
       isValid = false;
     }

     if (points2.value < 0 ) {
       isValid = false;
     }

     return isValid;
    }

    function addRow(){
     var tdTeam1 = document.createElement('td');
     var tdTeam2 = document.createElement('td');
     var tdResult = document.createElement('td');
     var newTr = document.createElement('tr');
     var tbody = document.querySelector('tbody');

     tdTeam1.innerHTML = team1.value;
     tdTeam2.innerHTML = team2.value;
     tdResult.innerHTML = points1.value + " - " + points2.value;


     tbody.appendChild(newTr);
     newTr.appendChild(tdTeam1);
     newTr.appendChild(tdTeam2);
     newTr.appendChild(tdResult);

   }

   button.addEventListener('click', function(e){
     e.preventDefault();

     if(validate()){
       addRow();
     }

    });
});
