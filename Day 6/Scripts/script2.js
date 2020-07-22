let n= prompt("Give us a positive number",0);

for(i=1;i<=10;i++)
{
    document.getElementById(`${i}`).innerHTML= `${n} x ${i} = ${n*i}`;
}