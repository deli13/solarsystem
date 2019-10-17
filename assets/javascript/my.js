var canvas = document.querySelector("#renderCanvas"); //определяем с каким элементом canvas работаем
// var canvas = $("#renderCanvas").get(0);
// var canvas = document.getElementById("#renderCanvas");
var engine = new BABYLON.Engine(canvas, true); // привязываем canvas к BABYLON
var createScene = function() {  //инициализация сцены

  var scene = new BABYLON.Scene(engine);   // создание сцены
  // scene.clearColor = new BABYLON.Color3(0,0,0);  //заливка сцены

  // Skybox
  var skybox = BABYLON.Mesh.CreateBox("skyBox", 1200.0, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/textureGL/skybox/skybox", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skybox.material = skyboxMaterial;

  var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(5,5,-15), scene);   // создание камеры
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, false);
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,1,0), scene); //создание освещения
  light.intensity=0.5;

  var sphere = new BABYLON.Mesh.CreateSphere("sphere1", 10, 2, scene); //создание объекта
  var spherematerial=new BABYLON.StandardMaterial("texture1", scene);
  spherematerial.wireframe=true;
  sphere.material=spherematerial;
  sphere.position.y=15;

  var boxmaterial= new BABYLON.StandardMaterial('box', scene);
  boxmaterial.diffuseTexture = new BABYLON.Texture("assets/textureGL/wood-texture.jpg", scene);
  var box = BABYLON.Mesh.CreateBox("box", 2.0, scene);
  box.position.y=2;
  box.material=boxmaterial;
  // box.position.x=4;
  // box.position.z=4

  var torus = BABYLON.Mesh.CreateTorus("torus1", 6,1,20, scene);
  torus.position.y=10;

  var cylinder=BABYLON.Mesh.CreateCylinder("cylinder1", 6,5,2,6,1, scene);  // Создание цилиндра
  var cylindermaterial = new BABYLON.StandardMaterial("ground", scene);  // цвет цилиндра
  // cylindermaterial.emissiveColor=BABYLON.Color3.Green();
  cylindermaterial.wireframe=true;
  cylinder.material = cylindermaterial;
  cylinder.position.y=10;

  //  var groundmaterial = new BABYLON.StandardMaterial('ground', scene);
  //  groundmaterial.diffuseTexture = new BABYLON.Texture("assets/textureGL/granite-texture.jpg", scene);
  //  var ground = new BABYLON.Mesh.CreateGround("ground1", 500, 500, 2, scene); // создание земли
  // ground.material =groundmaterial;

  var groundmaterial = new BABYLON.StandardMaterial('ground', scene);   //земля
  groundmaterial.diffuseTexture = new BABYLON.Texture("assets/textureGL/texture1.jpg", scene);
//  var ground = new BABYLON.Mesh.CreateGround("ground1", 500, 500, 2, scene); // создание земли
// ground.material =groundmaterial;
  var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "assets/textureGL/texture1cb.jpg", 500, 500,250,0, 10, scene, false);  //kfylifan
  ground.material=groundmaterial;

  scene.gravity = new BABYLON.Vector3(0, -0.9, 0);  // задаём гравитацию
  scene.collisionsEnabled = true;  // активируем столкновения с объектами

  camera.checkCollisions = true;
  camera.applyGravity = true;

  ground.checkCollisions = true;  // столкновения с ящиком и землёй
  box.checkCollisions = true;

  var alpha2=0;
  // var activetorus=20;
  var alpha=0;
  scene.registerBeforeRender (function(){
    cylinder.position.x=10*Math.sin(alpha);
    cylinder.position.y=10;
    cylinder.position.z=10*Math.cos(alpha);
    torus.position.x=10*Math.sin(alpha);
    torus.position.y=10+Math.sin(alpha2);
    torus.position.z=10*Math.cos(alpha);
// if (activetorus==10) {
    //   activetorus = 1;
    // }
    // else {
    //   activetorus +=0.1;
    // }
    alpha2 +=0.1;
    alpha +=0.01;
  })
  var animation = new BABYLON.Animation("animation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  box.animations.push(animation)
  return scene;
}


var scene = createScene();  //запуск cцены
engine.runRenderLoop(function(){
  scene.render();

});   //рендеринг сцены

window.addEventListener("resize", function (){  //масштабирование сцены
		engine.resize();
	})
