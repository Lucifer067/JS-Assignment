

function add()
{
    let a= prompt(`Enter 1st number`,0);
    let b= prompt(`Enter 2nd number`,0);
    let sum= Number(a)+ Number(b)   ;
    console.log(sum);
}

function sub()
{
    let a= prompt(`Enter 1st number`);
    let b= prompt(`Enter 2nd number`);
    let s= Number(a)-Number(b);
    console.log(s);
}

function mul()
{
    let a= prompt(`Enter 1st number`);
    let b= prompt(`Enter 2nd number`);
    let prod= Number(a)*Number(b);
    console.log(prod);
}

function div()
{
    let a= prompt(`Enter 1st number`);
    let b= prompt(`Enter 2nd number`);
    let d= Number(a)/Number(b);
    console.log(d);
}

function sq()
{
    let a= prompt(`Enter 1st number`);
    let sqr= Math.sqrt(Number(a));
    console.log(sqr);
}

function per()
{
    let a= prompt(`Enter 1st number`);
    let b= prompt(`Enter 2nd number`);
    let perc= (Number(a)/Number(b)) *100;
   console.log(perc);
}