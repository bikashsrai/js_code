document.write("hello");
var a1 = 30;
if (a1 % 2 == 0) {
  document.write("\na1 is even");
} else {
  document.write("a1 is odd number");
}

//if else if
if (a1 == 10) {
  document.write("a1 is equal to 10");
} else if (a1 == 30) {
  document.write("a1 is eqrual to 30");
} else if (a1 <= 50) {
  document.write("a1 is less than or equal to 50");
} else {
  document.write("a1 is not a number");
}

//switch statement
var a2 = 90;
switch (a2) {
  case a2 <= 80 && a2 <= 100:
    document.write("distinction");
    break;
  case a2 >= 20 && a2 <= 79:
    document.write("first division");
    break;

  default:
    document.write("failed division");
}
document.write("<br>");
for (i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}
var a3 = 10;
while (a3 <= 30) {
  document.write(a3 + "<br>");
  a3++;
}

//function
function cubeNum(num) {
  var cubeis = num * num * num;
  document.write("<br> The cube is " + cubeis);
}
cubeNum(2);

//function with return value
function getInfo() {
  return "<br>hello javascript oop <br>";
}
document.write(getInfo());

// function onject
var add = new Function("num1", "num2", "return num1+num2");
document.writeln(add(3, 6));

//to display the power
var pow = new Function("num1", "num2", "return Math.pow(num1,num2)");
document.write(pow(2, 4));
document.write("<br>");
// creating the object by using the literals
emp = {
  id: 22,
  name: "Ram Sharma",
  salary: 50000,
};
document.write(emp.id + " " + emp.name + " " + emp.salary);

// by creating the object of instance
var emp_objectname = new Object();
emp_objectname.id = 121;
emp_objectname.name = "Parbati";
emp_objectname.salary = 50000;
document.write(
  emp_objectname.id + " " + emp_objectname.name + " " + emp_objectname.salary
);
document.write("<br>");

// by defining constructor
function empHere(id, name, bonus) {
  this.id = id;
  this.name = name;
  this.bonus = bonus;
}
e = new empHere(331, "Ram Karki", 4000);
document.write(e.id + " " + e.name + " " + e.bonus);

// Javscript array literal
var emp = ["Ram", 33, "Baneshwor"];
for (i = 0; i < emp.length; i++) {
  document.write(emp[i] + "<br>");
}

// javscript array constructor
var emp1 = new Array("Parbati", 13, "sindhuli");
for (i = 0; i < emp1.length; i++) {
  document.write(emp1[i] + "<br>");
}
