document.write(
  "<center><b><mark> Average Value </mark></b></center><br> <br/>"
);

document.write("<b>Average of Array Numbers : </b><br/> <br/> ");
var arr = [12, 15, 16, 18, 20, 10, 11, 21];
var sum = 0;
for (var number of arr) {
  // sum += number; // sum = sum + number;
  document.write(
    `Value of Sum : ${sum}  &  Number : ${number} =  ${(sum +=
      number)} <br/> <br/>`
  );
}
var avg = sum / arr.length;
document.write(`Average Of Array Number : ${avg} <br/> <br/>`);

document.write("<b>Average of  Variables (Simple) : </b><br/><br/> ");
var n = 3+6+7+5+9;
var av = n/5;
document.write(av + '<br/><br/>');

document.write("<b>Average of  Variables (forEach()) : </b><br/><br/> ");
var n1 = [7,5,3,12,9];
var sum1 = 0;
n1.forEach(element => {
  document.write(
    `Value of Sum : ${sum1}  &  Number : ${element} =  ${(sum1 +=
      element)} <br/> <br/>`
  );
});
var avg1 = sum1 / n1.length;
document.write(`Use For forEach(): Average : ${avg1} <br/> <br/>`);


