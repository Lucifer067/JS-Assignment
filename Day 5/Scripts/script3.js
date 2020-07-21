async function displayTrue(){
    const response = await fetch('http://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    data.filter(ele=> ele.completed== true).map(ele=> console.log(ele));
}

displayTrue();