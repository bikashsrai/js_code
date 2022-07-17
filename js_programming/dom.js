function printvalue() {
  var name = document.form1.uname.value;
  var umail = document.getElementById(uemail).value;
  document.writeln(umail);
  alert("Welcome" + name);
}
function printEmailValue() {
  var umail = document.getElementById("uemail").value;
  document.writeln(umail);
}

//jQuery Dom  manipulation
$(document).ready(function () {
  $("#btn1").click(function () {
    $("#test").show().text();
  });
  $("#btn2").click(function () {
    $("#test").show().HTML();
  });
});
