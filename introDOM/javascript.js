//Takes in first element added to form
var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault() //prevents from refreshing page
    var textInput = form.elements[0]
    alert(textInput.value)
});


// document.addEventListener('DOMContentLoaded', 
//     function(event){
//         alert('Page has been loaded')
//     })

// var button1 = document.getElementById('button1');
// button1.addEventListener('click', function(event){
//     alert('Button pressed!');
//     target = event.target
// });

// document.getElementById('div1').addEventListener('mouseover', function(event){
//     event.target.style.backgroundColor = '0000ff';
// })
// Event Listner
// <button class="class1" id="button1">Press me</button>
// var button1 = document.getElementById('button1');
// button1.addEventListener('', function(event){ some code });

// var div1 = 
// document.getElementById('div1')
// var newDiv = 
// document.createElement('div');
// newDiv.innerHTML = 
// "Hello there!"
// div1.appendChild(newDiv);
// document.body.removeChild(div1);

// var div1 = document.getElementById('div1');
// var div1Class = 
// alert(div1.getAttribute('class'));
// var div1HTML = div1.innerHTML;
// var noValueDivColor = div1.style.backgroundColor;
// var div1ComputedStyle = window.getComputedStyle(div).backgroundColor;

// div1.setAttribute('class', 'class2');
// div1.innerHTML = 'Goodbye';
// div1.style.backgroundColor = '#0000ff';
// div1.setAttribute('style', 'height: 100px; background-color: #0000ff');