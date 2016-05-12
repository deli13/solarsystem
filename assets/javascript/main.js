var divscript = document.getElementById("scriptsrc");
var solarsys = document.getElementById("solarsys");
var merkury = document.getElementById("merkury");
var venus = document.getElementById("venus");
var earth = document.getElementById("earth");
var scriptsrc = "/assets/javascript/"
var arcrot = document.getElementById("arcrotate");
var freecam = document.getElementById("freecam");

function addScript(src){
divscript.removeChild(scripts);
var newscripts = document.createElement("script");
newscripts.src = scriptsrc+src;
newscripts.id = "scripts";
divscript.appendChild(newscripts);
return newscripts;
}

solarsys.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("solarsystem.js");
	arcrot.style.visibility = "visible";
	freecam.style.visibility = "visible";
})

merkury.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("merkury.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	
})

venus.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("venus.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})

earth.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("earth.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})