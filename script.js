function volume_sphere() {
    //Write your code here
	const radius=document.getElementById("radius").value;
	let volume=(4/3)*3.14*radius*radius;
	document.getElementById("volume").value=volume;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
