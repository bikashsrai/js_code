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

//The area of the triangle
var side1 = 6;
var side2 = 8;
var side3 = 9;
var s = (side1 + side2 + side3) / 2;
var areaOfTriangle = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
document.write(areaOfTriangle);
document.getElementById(area_triangle.value);

//rotate the string
function animate_string(id) {
  const element = document.getElementById(id);
  const textNode = element.childNodes[0];
  let text = textNode.data;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
  $("h2").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("button").mouseenter(function () {
    $("p").hide();
    $("h3").hide();
  });
});
// $(document).ready(function () {
//   $("#hovereffect").hover(
//     function () {
//       alert("hello hover");
//     },
//     function () {
//       alert("leave");
//     }
//   );
// });

$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("background-color", "#cccccc");
  });
  $("input").blur(function () {
    $(this).css("background-color", "green");
  });
});

//multiple event handlers
$(document).ready(function () {
  $(".multiple_event").on({
    mouseenter: function () {
      $(this).css("background-color", "red");
    },
    mouseleave: function () {
      $(this).css("background-color", "yellow");
    },
    click: function () {
      $(this).css("background-color", "blue");
    },
  });
});

$(document).ready(function () {
  $("#button_fadein").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000).slideUp(3000);
  });
});

//callback
$(document).ready(function () {
  $(".callback_hide").click(function () {
    $(".calback_ex").hide("slow", function () {
      alert("The paragraph is now hidden");
    });
  });
});
