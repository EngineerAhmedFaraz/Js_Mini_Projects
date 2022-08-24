document.getElementById('maths').style.color = "red";
document.getElementById('maths').style.textAlign = "center";
document.getElementById('maths').style.fontSize = "48px";
document.write('<br/> <br/>');

var num = 15;
document.writeln("Table NO 15 <br/> <br/>");
for(var i = 1; i <= 10; i++){
  document.writeln(` ${i} * ${num} = ${i*num} <br/>`);
}