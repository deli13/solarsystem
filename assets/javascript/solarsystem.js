var canvas = document.querySelector("#renderCanvas"); //определяем с каким элементом canvas работаем
var engine = new BABYLON.Engine(canvas, true); // привязываем canvas к BABYLON
var butarccamera = document.getElementById("arcrotate");
var butfreecamera = document.getElementById("freecam");
var FullScreen= document.getElementById("btnFullScreen");
var textursrc = "assets/image/textureGL/";

FullScreen.addEventListener('click', function(){
	canvas.width=window.screen.width;
	canvas.height=window.screen.height;
	if (canvas.requestFullscreen){canvas.requestFullscreen()}
	else if (canvas.mozRequestFullScreen) {canvas.mozRequestFullScreen()}
	else if (canvas.msRequestFullscreen) {canvas.msRequestFullscreen()}
	else if (canvas.webkitRequestFullScreen){canvas.webkitRequestFullScreen()}
})

var createScene = function() {  //инициализация сцены

var scene = new BABYLON.Scene(engine);
scene.clearColor= new BABYLON.Color3.Black();


var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(250,0,250), scene);   // создание камеры
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, false);

var arccamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 250, 0, 250, new BABYLON.Vector3.Zero(), scene);
arccamera.setPosition(new BABYLON.Vector3(250, 0, 250));
arccamera.attachControl(canvas, true);

butarccamera.addEventListener("click", function(){
	scene.activeCamera=arccamera;

})
butfreecamera.addEventListener("click", function(){
	scene.activeCamera=camera;
})



var lightback = new BABYLON.DirectionalLight("lightb", new BABYLON.Vector3(200,0,200), scene); //создание освещения
var lightfront = new BABYLON.DirectionalLight("lightfront", new BABYLON.Vector3(-200,0,-200), scene); //создание освещения
var light2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(200,0,-200), scene); //создание освещения
var light3 = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(-200,0,200), scene); //создание освещения
	var light = new BABYLON.PointLight("light1", new BABYLON.Vector3(0,0,1), scene)
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(0, 0, 0);
lightback.intensity=0.3;
lightfront.intensity=0.3;
light2.intensity=0.3;
light3.intensity=0.3;
// //
// var linesx=new BABYLON.Mesh.CreateLines("lines1", [
//   new BABYLON.Vector3(0,0,0),
//   new BABYLON.Vector3(200,0,0)], scene);

// var linesy=new BABYLON.Mesh.CreateLines("lines2", [
//   new BABYLON.Vector3(0,0,0),
//   new BABYLON.Vector3(0,200,0)], scene);

// var linesz=new BABYLON.Mesh.CreateLines("lines3", [
//   new BABYLON.Vector3(0,0,0),
//   new BABYLON.Vector3(0,0,200)], scene);

// Солнце 1

var solar = new BABYLON.Mesh.CreateSphere("sphere1", 15, 109, scene);
var solarmaterial= new BABYLON.StandardMaterial("texture1", scene);
solarmaterial.diffuseTexture=new BABYLON.Texture(textursrc+"solar.jpg", scene);
solarmaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
solarmaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
solarmaterial.alpha = 1;
solarmaterial.specularPower = 1;


    
solar.material=solarmaterial;
//
 solar.position=light.position;

// солнце 2
// var sun = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, camera, null, 70, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);

// 	// By default it uses a billboard to render the sun, just apply the desired texture
// 	// position and scale
// 	//sun.mesh.material.diffuseTexture = new BABYLON.Texture('/assets/image/textureGL/sun.png', scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);
// 	sun.mesh.material.diffuseTexture = new BABYLON.Texture('/assets/image/textureGL/sun.png', scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);	
// 	sun.mesh.material.diffuseTexture.hasAlpha = true;
// 	sun.mesh.position = new BABYLON.Vector3(1, 1, 1);
// 	sun.mesh.scaling = new BABYLON.Vector3(109, 109, 109);
//  light.position = sun.mesh.position;

	var skybox = BABYLON.Mesh.CreateBox("skyBox", 2000.0, scene);
var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(textursrc+"SkyBox/skybox", scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
skybox.material = skyboxMaterial;

var merkury = new BABYLON.Mesh.CreateSphere("sphere2", 10, 5.38, scene );
var merkuryMaterial = new BABYLON.StandardMaterial("merkuryMaterial", scene);
merkuryMaterial.diffuseTexture = new BABYLON.Texture(textursrc+"planet/mercury.jpg", scene);
merkury.material = merkuryMaterial;


var venera = new BABYLON.Mesh.CreateSphere("sphere3", 10, 5.95, scene);
var veneraMaterial = new BABYLON.StandardMaterial("textureVenera", scene);
veneraMaterial.diffuseTexture = new BABYLON.Texture(textursrc+"planet/venus.jpg", scene);
venera.material = veneraMaterial;


var earth = new BABYLON.Mesh.CreateSphere("sphere4", 10, 6, scene);
var earthMaterial = new BABYLON.StandardMaterial("textureearth", scene);
earthMaterial.diffuseTexture=new BABYLON.Texture(textursrc+"planet/earth.jpeg", scene);
earth.material=earthMaterial;



var mars = new BABYLON.Mesh.CreateSphere("sphere5", 10, 5.53, scene);
var marsMaterial = new BABYLON.StandardMaterial("texturemars", scene);
marsMaterial.diffuseTexture=new BABYLON.Texture(textursrc+"planet/mars.jpg", scene);
mars.material=marsMaterial;


var jupiter = new BABYLON.Mesh.CreateSphere("sphere6", 10, 11, scene);
var jupiterMaterial = new BABYLON.StandardMaterial("texturejupiter", scene);
jupiterMaterial.diffuseTexture = new BABYLON.Texture(textursrc+"planet/Jupiter.jpg", scene);
jupiter.material=jupiterMaterial;




var saturn = new BABYLON.Mesh.CreateSphere("sphere7", 10, 9, scene);
var saturnMaterial = new BABYLON.StandardMaterial("saturnmaterial", scene);
saturnMaterial.diffuseTexture = new  BABYLON.Texture(textursrc+"planet/saturn.jpg", scene);
saturn.material=saturnMaterial;

var saturncircle = new BABYLON.Mesh.CreatePlane("circle", 20, scene);
var saturncircleMaterial = new BABYLON.StandardMaterial("ringsmat", scene);
saturncircleMaterial.diffuseTexture = new BABYLON.Texture(textursrc+"planet/rings.png", scene);
saturncircleMaterial.diffuseTexture.hasAlpha=true;
saturncircleMaterial.backFaceCulling=false;
saturncircle.material=saturncircleMaterial;
saturncircle.rotation.x=1.9;
saturncircle.rotation.z=-1.9;


var uran = new BABYLON.Mesh.CreateSphere("sphere8", 10, 3.9, scene);
var uranMaterial = new BABYLON.StandardMaterial("textureUran", scene);
uranMaterial.diffuseTexture = new BABYLON.Texture(textursrc+"planet/uranus.jpg", scene);
uran.material=uranMaterial;


var neptun = new BABYLON.Mesh.CreateSphere("sphere9", 10, 3.8, scene);
var neptunMaterial= new BABYLON.StandardMaterial("neptunmater", scene);
neptunMaterial.diffuseTexture= new BABYLON.Texture(textursrc+"planet/neptune.jpg", scene);
neptun.material=neptunMaterial;


var almerkury=0;
var alvenera=0;
var alearth=0;
var almars=0;
var aljupiter=0;
var alsaturn=0;
var aluran=0;
var alneptun=0;



scene.registerBeforeRender (function(){

	merkury.position.x=100*Math.sin(almerkury);   //позиция планет
	merkury.position.z=100*Math.cos(almerkury);
	almerkury +=0.015;
	merkury.rotation.y +=0.01;

	venera.position.x=115*Math.sin(alvenera);
	venera.position.z=115*Math.cos(alvenera);
	alvenera +=0.013;
	venera.rotation.y += 0.01;

	earth.position.x=130*Math.sin(alearth);
	earth.position.z=130*Math.cos(alearth);
	alearth += 0.01;
	earth.rotation.y=0.01;

	mars.position.x=140*Math.sin(almars);
	mars.position.z=140*Math.cos(almars);
	almars += 0.008;
	mars.rotation.y=0.01;

	jupiter.position.x=170*Math.sin(aljupiter);
	jupiter.position.z=170*Math.cos(aljupiter);
	aljupiter += 0.006;
	jupiter.rotation.y +=0.01;

	 saturn.position.x=190*Math.sin(alsaturn);
	saturn.position.z=190*Math.cos(alsaturn);
	 alsaturn+=0.005;
	 saturn.rotation.y +=0.01;
	 saturncircle.position.x=saturn.position.x;   //позиция колец сатурна
	 saturncircle.position.z=saturn.position.z;

	uran.position.x=210*Math.sin(aluran);
	uran.position.z=210*Math.cos(aluran);
	aluran+=0.004;
	uran.rotation.y+=0.01;

	neptun.position.x=240*Math.sin(alneptun);
	neptun.position.z=240*Math.cos(alneptun);
	alneptun +=0.001;
	neptun.rotation.y+=0.001;

});


scene.collisionsEnabled=true;
camera.checkCollisions=true;
solar.checkCollisions=true;
merkury.checkCollisions=true;
venera.checkCollisions=true;
earth.checkCollisions=true;
mars.checkCollisions=true;
jupiter.checkCollisions=true;
saturn.checkCollisions=true;
uran.checkCollisions=true;
neptun.checkCollisions=true;
  return scene;
}


var scene = createScene();  //запуск cцены
engine.runRenderLoop(function(){
  scene.render();

});   //рендеринг сцены

window.addEventListener("resize", function (){  //масштабирование сцены
    engine.resize();
  })
