var nameplanet=document.getElementById("nameplanet");
var descr_planet=document.getElementById("descr");
var ssystem=document.getElementById("ssystem");
var merkury=document.getElementById("merkury");
var venus=document.getElementById("venus");
var earth=document.getElementById("earth");
var mars=document.getElementById("mars");
var jupiter=document.getElementById("jupiter");
var saturn=document.getElementById("saturn");
var uran=document.getElementById("uran");
var neptun=document.getElementById("neptun");
var upd_planet=document.getElementById("add");
var msg=document.getElementById("msg");

function planetajax(but){
	nameplanet.value=but;
	var xhr = new XMLHttpRequest();
	var src="planet.php?planet="+but;
	xhr.open("GET", src, true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if (xhr.readyState!=4){
			if (xhr.status!=200){
				console.log(xhr.status);
			}
			else {
				descr_planet.value=xhr.responseText;
			}
		}
	}
}

upd_planet.addEventListener('click', function(){
	var xhr_post = new XMLHttpRequest();
	var bound = String(Math.random()).slice(3);
	var boundMiddle='--'+bound+'\r\n';
	var boundLast='--'+bound+'--\r\n';
	var body=['\r\n'];
	body.push('Content-Disposition: form-data; name="nameplanet"\r\n\r\n'+nameplanet.value+'\r\n');
	body.push('Content-Disposition: form-data; name="descr"\r\n\r\n'+descr_planet.value+'\r\n');
	body=body.join(boundMiddle)+boundLast;
	xhr_post.open("POST", "planet.php");
	xhr_post.setRequestHeader('Content-Type', 'multipart/form-data; boundary='+bound);
	xhr_post.send(body);
	xhr_post.onreadystatechange=function(){
		if (xhr_post.readyState!=4){
			if (xhr_post.status!=200){
				console.log(xhr_post.status);
			} 
			else{
				msg.innerHTML=xhr_post.responseText;
				planetajax(nameplanet.value);
			}
		}
	}
	
	
})

ssystem.addEventListener('click', function(){
	planetajax(ssystem.innerHTML);
});

merkury.addEventListener('click', function(){
	planetajax(merkury.innerHTML);
});

venus.addEventListener('click', function(){
	planetajax(venus.innerHTML);
});

earth.addEventListener('click', function(){
	planetajax(earth.innerHTML);
});

mars.addEventListener('click', function(){
	planetajax(mars.innerHTML);
});

jupiter.addEventListener('click', function(){
	planetajax(jupiter.innerHTML);
});

saturn.addEventListener('click', function(){
	planetajax(saturn.innerHTML);
});

uran.addEventListener('click', function(){
	planetajax(uran.innerHTML);
});

neptun.addEventListener('click', function(){
	planetajax(neptun.innerHTML);
});