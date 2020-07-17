let marks= prompt("Enter your marks here");

if(marks< 40)
    document.write(`Marks is ${marks} and grade is fail`);
else if(marks >=40 && marks <50)
    document.write(`Marks is ${marks} and grade is D`);
else if(marks >=50 && marks <60)
    document.write(`Marks is ${marks} and grade is C`);
else if(marks >=60 && marks <70)
    document.write(`Marks is ${marks} and grade is B`);
else if(marks >=70 && marks <80)
    document.write(`Marks is ${marks} and grade is A`);
else if(marks >=80 && marks <=100)
    document.write(`Marks is ${marks} and grade is Ex`);
