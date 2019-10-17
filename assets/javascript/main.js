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
var scriptsrc = "assets/javascript/"
var arcrot = document.getElementById("arcrotate");
var freecam = document.getElementById("freecam");
var divinfo = document.getElementById("descript");


function addScript(src){
	divscript.removeChild(scripts);
	var newscripts = document.createElement("script");
	newscripts.src = scriptsrc+src;
	newscripts.id = "scripts";
	divscript.appendChild(newscripts);
	return newscripts;
}

function planetInfo(src){
	var xhr=new XMLHttpRequest();
	var xhrsrc="planet.php?planet="+src;
	console.log(xhrsrc);
	xhr.open("GET", xhrsrc, "true");
	xhr.send();
	xhr.onreadystatechange = function(){
		console.log(xhr.status);
		if (xhr.readyState!=4) {
		if (xhr.status!=200){
			console.log(xhr.status);
			} else {
				divinfo.innerHTML=xhr.responseText;
			}
		}
	}
}

solarsys.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("solarsystem.js");
	arcrot.style.visibility = "visible";
	freecam.style.visibility = "visible";
	planetInfo(solarsys.value);
})
merkury.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("merkury.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(merkury.value);
})
venus.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("venus.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(venus.value);
})
earth.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("earth.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(earth.value);
})
mars.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("mars.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(mars.value);
})
jupiter.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("jupiter.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(jupiter.value);
})
saturn.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("saturn.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(saturn.value);
})
uran.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("uran.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(uran.value);
})
neptun.addEventListener('click', function(){
	var scripts = document.getElementById("scripts");
	addScript("neptun.js");
	arcrot.style.visibility = "hidden";
	freecam.style.visibility = "hidden";
	planetInfo(neptun.value);
})