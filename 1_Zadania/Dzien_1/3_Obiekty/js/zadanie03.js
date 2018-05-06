var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
};

Robot.prototype.sayHi = function(toWho) {
  if(thisFunctional === true){
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + "changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + "was fixed");
};

var robot1 = new Robot("Tom");
// robot1.isFunctional = false;
robot1.sayHi("John");
robot1.changeName("Simon");
robot1.fixIt(false);


// var Robot = function(name) {
//   this.name = name;
//   this.isFunctional = true;
// }
//
// Robot.prototype.sayHi = function(toWho) {
//   if(isFunctional === true){
//     console.log("Robot " + this.name + " greets " + toWho);
//   }
//   else{
//     console.log("Robot " + this.name + "is broken");
//   }
// };
//
// Robot.prototype.changeName = function(newname) {
//   console.log("Robot " + this.name + "changes name to " + newname);
//   name = newname;
// };
//
// Robot.prototype.fixIt = function() {
//   this.isFunctional = true;
//   console.log("Robot " + this.name + "was fixed");
// };
