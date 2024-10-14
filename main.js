let radius;
const pi = 3.412;
let circumference;
document.getElementById('calculate').onclick = function (){
  radius = document.getElementById('radius').value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById('results').textContent=`Your radius is : ${radius} .The Circumference is ${circumference}`;

}