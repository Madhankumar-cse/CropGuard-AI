const remedies={

"Late Blight":"Copper Fungicide",
"Healthy":"No treatment needed"

};

async function predict(){

const file=document.getElementById("image").files[0];

if(!file){

alert("Upload a leaf image.");
return;

}

const form=new FormData();

form.append("file",file);

const res=await fetch("/api/predict",{

method:"POST",
body:form

});

const data=await res.json();

document.getElementById("result").innerHTML=`

<h2>${data.crop}</h2>

<h3>${data.disease}</h3>

<p><b>Confidence:</b> ${data.confidence}</p>

<p><b>Severity:</b> High</p>

<p><b>Recommended:</b> ${data.treatment}</p>

`;

}
