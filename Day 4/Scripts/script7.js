let n= prompt("Enter a number");

function isPrime(n)
{
    if(n<=1)
        return false;
    
    for(i=2;i<(n/2);i++)
    {
        if(n%i ==0)
            return false;
    }
    return true;
}

for(j=2;j<=n;j++)
{
    if(isPrime(j))
        console.log(j);
}