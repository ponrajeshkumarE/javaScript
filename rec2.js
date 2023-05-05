let pho=document.getElementById("pho1");
let bri=document.getElementById("bri");
let list=document.getElementById("ulid");

let receipe = {
    head : "Briyani",
    image :"file:///C:/Users/Rajesh/Pictures/Screenshots/tenor.gif",
    ingredients : ["Chicken","ginger garlic paste","Onions","Salt"," coriander leaves","Spices ","Chili Peppers ","Rice"]
};

pho.src=receipe.image;
// pho.style.height="300px";
// pho.style.width="500px";
bri.textContent=receipe.head;
bri.style.color="red";


let ing=receipe.ingredients;

for( let a of ing)
{

let li=document.createElement("li");

li.textContent=a;
list.appendChild(li);
}