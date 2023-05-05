let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let p=document.getElementById("sw");
let b1=document.getElementById("bb1");
let b2=document.getElementById("bb2");



function on()
{
let p1=p.textContent="Switched ON";
	p.textContent=p1
img1.src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
img2.src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
b2.className="b2";
b1.className="box3";

}

function off()
{
	let p1=p.textContent="Switched off";
	p.textContent=p1
img1.src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
img2.src=" https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
b2.className="b2";
b1.className="box3";

}