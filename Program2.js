//Find a string in array
let classget = document.querySelector('.class2 ul');
classget.innerHTML = '';

let greetings = ['Happy Birthday', 'Happy Eid to all of you guys', 'A happy Eid to all the family', 'Eid mubarak ho', 'Get well soon', 'Happy anniversary', 'Eid he hamari'];

for(let i = 0; i < greetings.length; i++){
    if(greetings[i].indexOf('Eid') !== -1){
        let listitem = document.createElement('li');
        listitem.textContent = greetings[i];
        classget.appendChild(listitem);
    }

}