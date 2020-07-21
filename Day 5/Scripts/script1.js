let n= -1;
while(n<=0)
{
    n= prompt(`Enter a positive number`, 0);
}

let arr=[];
for(let i=1;i<=n;i++)
{
    arr.push(i);
}

let cubeOdd= arr.filter(el=> el%2==1).map(el => el**3);
console.log(cubeOdd);