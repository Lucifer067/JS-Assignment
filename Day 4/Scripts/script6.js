let num=0;
while(num<=100)
{
    num= prompt("Give me a number greater than 100");
    while(num<= 100)
        num= prompt('Invalid input. Please try again!!');
}

console.log(`You have entered ${num}`);

