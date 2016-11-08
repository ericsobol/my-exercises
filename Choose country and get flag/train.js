/*Нажимаю на кнопку с названием страны и получаю ее флаг. Для примера создал
всего 3 страны. Nativ JS*/

var newdiv = document.createElement('div')
newdiv.style.backgroundColor = 'white';
newdiv.style.height = 300 + 'px'
document.body.appendChild(newdiv);

var divnew = document.createElement('div');
divnew.style.height = 300 + 'px';
divnew.style.backgroundColor = 'white';
document.body.appendChild(divnew);




var red = document.getElementsByClassName('btn1');
red[0].addEventListener('click',function(){
    newdiv.style.backgroundColor = 'blue';
    divnew.style.backgroundColor = 'yellow';
});
var yell = document.getElementsByClassName('btn2');
yell[0].addEventListener('click',function(){
    newdiv.style.backgroundColor = 'red';
    divnew.style.backgroundColor = 'white';
});
var pink = document.getElementsByClassName('btn3');
pink[0].addEventListener('click',function(){
    newdiv.style.backgroundColor = 'white';
    divnew.style.backgroundColor = 'red';
})

var black = document.getElementsByClassName('btn4');
black[0].addEventListener('click',function(){var question = confirm('Are you pirate?');
if(question == true){newdiv.style.backgroundColor = 'black';
                    divnew.style.backgroundColor = 'black';
                    var para = document.createElement('h1');
                     var text = document.createTextNode('You are pirate');
                     para.appendChild(text);
                     para.style.color = 'white';
                     para.style.textAlign = 'center';
                     newdiv.appendChild(para)
                    } else{
    return divnew , newdiv;
}  });



/*  CALLBACK FUNC!
function mySand(param1, param2, callback){
    alert('I\'m\ eating sandwich with ' + param1 +' and ' + param2 );
    callback()
}

mySand('tomato','beef',function(){
      alert('Nyam-nyam');
});
*/


var Constr = function(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){
        return 'Hello world! I\'\m ' + this.name + ' and I \'\m ' + this.age;
    }
}
var me = new Constr('Eric',22)

console.log(me.say());