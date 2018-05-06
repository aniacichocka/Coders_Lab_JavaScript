/**
 * Created by Jacek on 2015-12-16.
 */

 document.addEventListener('DOMContentLoaded', function(){

  var add = document.getElementById('addTaskButton');
  var taskList = document.getElementById('taskList')
  var input = document.getElementById('taskInput');
  var remove = document.getElementById('removeFinishedTasksButton');

  var body = document.querySelector('body');
  var result = 0;
  var counter = document.createElement('span');


  add.addEventListener('click', function(e){
    var li = document.createElement('li');

    var task = document.createElement('h1');
    task.innerText = input.value;
    var bdelete = document.createElement('button');
    bdelete.innerText = 'Delete';

    var bcomplete = document.createElement('button');
    bcomplete.innerText = 'Complete';

    li.appendChild(task);
    li.appendChild(bdelete);
    li.appendChild(bcomplete);


    //WARUNEK I LICZNIK//

    if((task.innerText.length > 5) && (task.innerText.length <100)){
      taskList.appendChild(li);
      input.value = "";

      result += 1;
      counter.innerText = result;
    };

    body.insertBefore(counter, taskList);


    bcomplete.addEventListener('click', function(e){

      if(task.style.color === 'red'){
        task.style.color = 'black'; //lub może być ""
      }else{
        task.style.color = 'red';
      };

    });


    bdelete.addEventListener('click', function(){
      li.parentElement.removeChild(li);

      result -= 1;
      counter.innerText = result;
    });


    remove.addEventListener('click', function(){

      if(task.style.color === 'red'){
        li.parentElement.removeChild(li);
      };
    });
  });
});
