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

	var sun = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, arccamera, null, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
	sun.mesh.material.diffuseTexture = new BABYLON.Texture('/assets/image/textureGL/sun.png', scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);	
	sun.mesh.material.diffuseTexture.hasAlpha = true;
	sun.mesh.position = new BABYLON.Vector3(90, 0, 90);
	sun.mesh.scaling = new BABYLON.Vector3(50, 50, 50);
 	light.position = sun.mesh.position;

var neptun = new BABYLON.Mesh.CreateSphere("sphere2", 15, 15, scene );
var neptunMaterial = new BABYLON.StandardMaterial("neptunMaterial", scene);
neptunMaterial.diffuseTexture = new BABYLON.Texture("assets/image/textureGL/planet/neptune.jpg", scene);
neptunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
neptunMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
neptunMaterial.alpha = 0.6;
neptunMaterial.specularPower = 1;
neptun.material = neptunMaterial;

scene.registerBeforeRender (function(){
	neptun.rotation.y +=0.01;
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