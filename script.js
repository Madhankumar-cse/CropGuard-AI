async function predict(){

const file=document.getElementById("imageInput").files[0];

if(!file){
alert("Please upload a leaf image.");
return;
}

document.getElementById("loading").classList.remove("hidden");
document.getElementById("result").classList.add("hidden");

const formData=new FormData();
formData.append("file",file);

try{

const response=await fetch("/api/predict",{
method:"POST",
body:formData
});

const data=await response.json();

document.getElementById("crop").innerText=data.crop;
document.getElementById("disease").innerText=data.disease;
document.getElementById("confidence").innerText=data.confidence;
document.getElementById("severity").innerText=data.severity;
document.getElementById("treatment").innerText=data.treatment;
document.getElementById("prevention").innerText=data.prevention;

document.getElementById("loading").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

}
catch(err){

document.getElementById("loading").classList.add("hidden");
alert("Server Error");

}

}
