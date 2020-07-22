let name= prompt("Please give us your name");

document.getElementById('welcome').innerHTML = `Welcome to our page, ${name}`;


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}