let sales= prompt("Enter sales made by you this year", 0);

if(sales<=5000)
    console.log(`Your reward is 2% of your sales made i.e. ${(0.02*sales).toFixed(2)} `);
else if(sales>5000 && sales<=10000)
    console.log(`Your reward is 5% of your sales made i.e. ${(0.05*sales).toFixed(2)} `);
else if(sales>10000 && sales<=20000)
    console.log(`Your reward is 7% of your sales made i.e. ${(0.07*sales).toFixed(2)} `);    
else if(sales>20000)
    console.log(`Your reward is 10% of your sales made i.e. ${(0.1*sales).toFixed(2)} `);