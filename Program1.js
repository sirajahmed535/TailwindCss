//Convert all strings first alphabets to uppercase

let classget = document.querySelector('.class1 ul');
classget.innerHTML = '';
let classarr = ['karachi', 'lAhore', 'islAMAbad', 'PeshawaR'];

for(let i = 0; i < classarr.length; i++){
    let lowerto = classarr[i].toLowerCase();
    let firstalpha = lowerto.slice(0,1).toUpperCase();
    lowerto = lowerto.replace(lowerto.slice(0,1), firstalpha);
    let listitem = document.createElement('li');
    listitem.textContent = lowerto;
    classget.appendChild(listitem);
    
}


