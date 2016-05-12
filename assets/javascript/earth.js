var canvas = document.querySelector("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var FullScreen= document.getElementById("btnFullScreen");

FullScreen.addEventListener('click', function(){
	canvas.width=window.screen.width;
	canvas.height=window.screen.height;
	if (canvas.requestFullscreen){canvas.requestFullscreen()}
	else if (canvas.mozRequestFullScreen) {canvas.mozRequestFullScreen()}
	else if (canvas.msRequestFullscreen) {canvas.msRequestFullscreen()}
	else if (canvas.webkitRequestFullScreen){canvas.webkitRequestFullScreen()}
})

var createScene = function(){
var scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3.Black();

var arccamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", -25, 20, 25, new BABYLON.Vector3.Zero(), scene);
arccamera.setPosition(new BABYLON.Vector3(-25, 20, 25));
	arccamera.lowerRadiusLimit = 30;
	arccamera.upperRadiusLimit = 150;
arccamera.attachControl(canvas, true);

	var light = new BABYLON.PointLight("light1", new BABYLON.Vector3(20,20,50), scene);
	// light.diffuse = new BABYLON.Color3(1, 1, 1);
	// light.specular = new BABYLON.Color3(0, 0, 0);
	// var light2 = new BABYLON.DirectionalLight("Direct1", new BABYLON.Vector3(20,20,50), scene);
	// light2.intensity=0.5;

	var sun = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, arccamera, null, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
	//sun.mesh.material.diffuseTexture = new BABYLON.Texture('/assets/image/textureGL/sun.png', scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);
	sun.mesh.material.diffuseTexture = new BABYLON.Texture('/assets/image/textureGL/sun.png', scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);	
	sun.mesh.material.diffuseTexture.hasAlpha = true;
	sun.mesh.position = new BABYLON.Vector3(40, 0, 40);
	sun.mesh.scaling = new BABYLON.Vector3(50, 50, 50);
 	light.position = sun.mesh.position;

var earth = new BABYLON.Mesh.CreateSphere("sphere2", 15, 15, scene );
var earthMaterial = new BABYLON.StandardMaterial("earthMaterial", scene);
earthMaterial.diffuseTexture = new BABYLON.Texture("/assets/image/textureGL/planet/earth.jpeg", scene);
earthMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
earthMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
earthMaterial.alpha = 0.6;
earthMaterial.specularPower = 1;
earth.material = earthMaterial;

scene.registerBeforeRender (function(){
	earth.rotation.y +=0.01;
})


return scene;
}

var scene = createScene();  //запуск cцены
engine.runRenderLoop(function(){
  scene.render();

});   //рендеринг сцены

window.addEventListener("resize", function (){  //масштабирование сцены
    engine.resize();
  })