const colors= [ "green", "black", "blue", "brown"];

function changeColor(){
    
    for(let i=0;i<colors.length;i++)
    {
        (function(i)
        {
            setTimeout(function()
            {
                const attr= document.getElementById('bdy');
                attr.style.backgroundColor= colors[i];
            }, 5000*i);
        })(i);
    };
}   

changeColor();