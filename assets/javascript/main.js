var divscript = document.getElementById("scriptsrc");
var solarsys = document.getElementById("solarsys");
var merkury = document.getElementById("merkury");
var venus = document.getElementById("venus");
var earth = document.getElementById("earth");
var mars = document.getElementById("mars");
var jupiter = document.getElementById("jupiter");
var saturn = document.getElementById("saturn");
var uran = document.getElementById("uran");
var neptun = document.getElementById("neptun");
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
mars.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("mars.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})
jupiter.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("jupiter.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})
saturn.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("saturn.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})
uran.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("uran.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})
neptun.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("neptun.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
})