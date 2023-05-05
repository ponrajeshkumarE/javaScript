function sample()
{
    let a1= document.getElementById("rocky");
    let a2=document.getElementById("list");
    let a3=document.createElement("li");
    a3.textContent=a1.value;
    a2.appendChild(a3);
}
