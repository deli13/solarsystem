var divscript = document.getElementById("scriptsrc");
var solarsys = document.getElementById("solarsys");
var merkury = document.getElementById("merkury");

solarsys.addEventListener('click', function(){
	location.reload();
	divscript.outerHTML='<script async src="/assets/javascript/solarsystem.js"></script>';
})

