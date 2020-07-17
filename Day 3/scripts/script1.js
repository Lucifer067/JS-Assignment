let n= prompt("Give a number");

function numb(num=0)
{
    if(num %2 ==0)
        return `even`;
    else 
        return `odd`;
}

let op= numb(n);
console.log(`The number entered is ${n} and number is ${op}`);