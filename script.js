document.write('Hello world!!');

function sayhello(){
  var response = prompt('What is your name?');
  alert('Hello '+response+',have a good day!');
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,500));


function showtopic(){
  var x = document.getElementById('demo');
  x.style.fonSize = '25px';
  x.style.color = 'red';
}
