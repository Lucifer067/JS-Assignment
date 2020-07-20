let ask= (question, yes, no)=>  confirm(question)? yes() : no();
let y= ()=> alert("you agreed");
let n= ()=> alert("You cancelled the execution");
ask("Do you agree?", y, n);