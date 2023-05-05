let a1=document.getElementById("img1");
let a2=document.getElementById("pro");
let a3=document.getElementById("fil");




let obj={
    pimage :"https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png",
    pname : "rajesh ",
    age : "Age:24"
};
a1.style.height="200px";
a1.src=obj.pimage;
a2.textContent=obj.pname;
a3.textContent=obj.age;
