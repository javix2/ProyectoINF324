

//Laboratorios de la carrera Informatica

var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,10);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

    // SCENE
    scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
    
    // OBJECT
    
    //pizarrones
    objetocub(0.4,0.05,2,0.05,2,0.7,0.4,0.7,0.02,2.52,2.55,0xAEB6BF,0xF8F9F9);
    objetocub(0.4,0.72,2,0.72,2,0.8,0.4,0.8,0.02,2.52,2.55,0xAEB6BF,0xF8F9F9);
   
    objetocub(0.7,0.05,2,0.05,2,0.7,0.7,0.7,0.02,-0.21,-0.18,0xAEB6BF,0xF8F9F9);
    objetocub(0.7,0.72,2,0.72,2,0.8,0.7,0.8,0.02,-0.21,-0.18,0xAEB6BF,0xF8F9F9);
    
    objetocub(-2,0.05,-1,0.05,-1,0.7,-2,0.7,0.02,-0.21,-0.18,0xAEB6BF,0xF8F9F9);
    objetocub(-2,0.72,-1,0.72,-1,0.8,-2,0.8,0.02,-0.21,-0.18,0xAEB6BF,0xF8F9F9);
    
    objetocub(-2,0.05,-0.9,0.05,-0.9,0.7,-2,0.7,0.02,2.52,2.55,0xAEB6BF,0xF8F9F9);
    objetocub(-2,0.72,-0.9,0.72,-0.9,0.8,-2,0.8,0.02,2.52,2.55,0xAEB6BF,0xF8F9F9);
    //puertas
    objetocub(-0.3,-0.3,0.0,-0.3,0.0,0.6,-0.3,0.6,0.02,2.52,2.54,0x873600,0xBA4A00);
    objetocub(0.1,0.3,0.25,0.3,0.25,0.6,0.1,0.6,0.02,2.52,2.54,0x1E8449,0xF82407);
    objetocub(2.1,0.3,2.3,0.3,2.3,0.6,2.1,0.6,0.02,-0.21,-0.18,0x1E8449,0xF82407);
    objetocub(-0.65,-0.3,-0.6,-0.3,-0.6,0.6,-0.65,0.6,0.01,-0.2,0.2,0x873600,0xBA4A00);
    objetocub(0.0,-0.3,0.05,-0.3,0.05,0.6,0.0,0.6,0.01,0.0,0.4,0x873600,0xBA4A00);
    objetocub(0.3,-0.3,0.7,-0.3,0.7,0.6,0.3,0.6,0.02,-3.6,-3.55,0x873600,0xBA4A00);
    //paredes
    objetocub(-2.4,-0.3,-0.6,-0.3,-0.6,0.9,-2.4,0.9,0.02,2.5,2.53,0xACE1D1 ,0xF9E79F);
    objetocub(0.0,-0.3,2.6,-0.3,2.6,0.9,0.0,0.9,0.02,2.51,2.53,0xACE1D1,0xF9E79F);
    objetocub(0.0,-0.3,2.6,-0.3,2.6,0.9,0.0,0.9,0.02,-0.22,-0.2,0xACE1D1,0xF9E79F);
    objetocub(-0.7,0.6,0.1,0.6,0.1,0.9,-0.7,0.9,0.02,2.51,2.53,0xACE1D1,0xF9E79F);

    objetocub(-0.65,-0.3,-0.6,-0.3,-0.6,0.9,-0.65,0.9,0.01,0.2,2.52,0xF5B7B1 ,0xF9E79F);
    objetocub(0.0,-0.3,0.05,-0.3,0.05,0.9,0.0,0.9,0.01,0.4,2.52,0xF9E79F,0xF9E79F);
    
    objetocub(0.0,-0.3,0.05,-0.3,0.05,0.9,0.0,0.9,0.01,-2.6,-0.09,0xF9E79F,0xF9E79F);
    objetocub(0.1,-0.3,2.6,-0.3,2.6,0.9,0.1,0.9,0.02,-2.6,-1.0,0x7FB3D5,0xF9E79F);
    objetocub(-1.0,-0.3,2.6,-0.3,2.6,0.9,-1.0,0.9,0.02,-3.9,-3.58,0x7FB3D5,0xF9E79F);
    objetocub(-2.4,-0.3,-1.0,-0.3,-1.0,0.9,-2.4,0.9,0.01,-3.8,-2.9,0x7FB3D5,0xF9E79F);
    
    objetocub(0.0,0.6,0.05,0.6,0.05,0.9,0.0,0.9,0.01,-0.2,0.4,0xF9E79F,0xF9E79F);
    objetocub(0.0,-0.3,0.05,-0.3,0.05,0.6,0.0,0.6,0.01,-0.2,0,0xF9E79F,0xF9E79F);    
    objetocub(-2.4,-0.3,-0.6,-0.3,-0.6,0.9,-2.4,0.9,0.02,-0.22,-0.2,0xACE1D1,0xF9E79F);
    
    objetocub(-2.4,-0.3,-0.6,-0.3,-0.6,0.9,-2.4,0.9,0.02,-2.9,-2.8,0xF9E79F,0xF9E79F);
    
    objetocub(-0.65,-0.3,-0.6,-0.3,-0.6,0.9,-0.65,0.9,0.01,-2.8,-0.7,0xF5B7B1,0xF9E79F);
    objetocub(-0.65,0.6,-0.6,0.6,-0.6,0.9,-0.65,0.9,0.01,-0.7,1.1,0xF5B7B1,0xF9E79F);
    objetocub(-1,-0.3,-0.6,-0.3,-0.6,0.6,-1,0.6,0.02,-0.27,-0.23,0x873600,0xBA4A00);
    
    objetocub(-2,0.05,-1,0.05,-1,0.7,-2,0.7,0.02,-2.8,-2.77,0xAEB6BF,0xF8F9F9);
    objetocub(-2,0.72,-1,0.72,-1,0.8,-2,0.8,0.02,-2.8,-2.77,0xAEB6BF,0xF8F9F9);
    
    //piso
    objetocub(-2.4,-0.32,2.6,-0.3,2.6,-0.31,-2.4,-0.31,0.02, -4.0,5,0xAAB7B8,0xAED6F1);
    
    objetocub(0.4,-0.3,2,-0.3,1.9,-0.2,0.5,-0.2, 0.02,2.52,2.8,0x873600,0xBA4A00);
    objetocub(-2,-0.3,-0.9,-0.3,-1,-0.2,-1.9,-0.2, 0.02,2.52,2.8,0x873600,0xBA4A00);
    objetocub(0.5,-0.3,2,-0.3,1.9,-0.2,0.5,-0.2, 0.02,-0.21,0.07,0x873600,0xBA4A00);
    objetocub(-2,-0.3,-0.9,-0.3,-1,-0.2,-1.9,-0.2, 0.02,-0.21,0.07,0x873600,0xBA4A00);
    objetocub(-2,-0.3,-0.9,-0.3,-1,-0.2,-1.9,-0.2, 0.02,-2.8,-2.66,0x873600,0xBA4A00);

    //lado izquierdo
    PCs(-2,0.0, -1.8,0.0, -1.8,0.15, -2,0.15,3.2, 3,3);
    //PCs(-1.0,0.0, -0.8,0.0, -0.8,0.15, -1.0,0.15,3.2, 2,2);
    PCs(-2.3,0.0, -2.1,0.0, -2.1,0.15, -2.3,0.15,-2.2, 2,4);
    PCs(-1.3,0.0, -1.1,0.0, -1.1,0.15, -1.3,0.15,-2.4, 2,4);
   
    
    //lado derecho
    PCs(0.0,0.0, 0.2,0.0, 0.2,0.15, 0.0,0.15, 3.2, 4,3);
    //PCs(1.5,0.0, 1.7,0.0, 1.7,0.15, 1.5,0.15,3.5, 2,2);
    PCs(2.2,0.0, 2.4,0.0, 2.4,0.15, 2.2,0.15,3.2, 1,1);

    PCss(0.6,0.0,0.8,0.0, 0.8,0.15, 0.6,0.15, 5,2); 
    mesa(0.5,0.0,1.1,0.0,2,4);
    
    
    function PCs(x1,y1,x2,y2,x3,y3,x4,y4,z,N,F){
        var a1=x1; var a2=x2; var a3=x3;var a4=x4;
        var d=0.31;
        var z1=z;
        for(var i=0;i<F;i++){
            a1=x1; a2=x2; a3=x3; a4=x4;
            for(var j=0;j<N;j++){
             //crea monitor   
            objetocub(a1,y1,a2,y2,a3,y3,a4,y4,0.01, z1,z1+0.02, 0x0000,0xAED6F1);
            objetocub(a1+0.09,y1-0.03, a2-0.09,y2-0.03, a3-0.09,y3-0.1, a4+0.09,y4-0.1,0.001, z1,z1+0.005,0x0000,0x0000);
            objetocub(a1+0.06,y1-0.035, a2-0.06,y2-0.035, a3-0.06,y1-0.03, a4+0.06,y1-0.03, 0.001,z1-0.01,z1+0.02, 0x0000,0x0000);   
            //crea escritorio 
            objetocub(a1-0.05,y1-0.055, a2+0.05,y2-0.055, a3+0.05,-0.035, a4-0.05,-0.035,0.01, z1-0.1,z1+0.1, 0xE67E22,0xE67E22);
            objetocub(a1-0.04,-0.3, a1-0.025,-0.3, a1-0.025,y1-0.055, a4-0.04,y2-0.055,0.01, z1-0.1,z1+0.1, 0xE67E22,0xE67E22);
            objetocub(a2-0.05,-0.3, a2+0.05,-0.3, a2+0.05,-0.3+0.05, a2-0.05,-0.3+0.05,0.01, z1-0.1,z1+0.1, 0xE67E22,0xE67E22);
            //crea el cpu
            objetocub(a2-0.05,-0.3+0.05, a2+0.05,-0.3+0.05, a2+0.05,y2-0.055, a2-0.05,y2-0.055,0.01, z1-0.1,z1+0.1, 0x1F618D,0xEAECEE);
            objetocub(a2-0.03,y2-0.09, a2+0.03,y2-0.09, a2+0.03,y2-0.08, a2-0.03,y2-0.08,0.002, z1-0.0,z1+0.11, 0x000000,0xEAECEE);
            objetocub(a2-0.03,y2-0.11, a2+0.03,y2-0.11, a2+0.03,y2-0.10, a2-0.03,y2-0.10,0.005, z1-0.0,z1+0.11, 0x000000,0xEAECEE);
            a1=a1+d;
            a2=a2+d;
            a3=a3+d;
            a4=a4+d;
            }
            z1=z1+0.5;
        }  
    }
    function mesa(x1,y1,x2,y2,N,F){
        var a1=x1; var a2=x2;
        var d=0.9;
        var z=0.5;
        for(var i=0;i<F;i++){
            a1=x1; a2=x2;
            for(var j=0;j<N;j++){
                objetocub(a1,y1,a2,y2,a2,0.05,a1,0.05,0.0,z-0.1,z+0.2,0XD35400   ,0XD4AC0D);
                objetocub(a1+0.02,-0.3,  a1+0.05,-0.3, a1+0.09 ,0.0, a1+0.02,0.0,0.0,z-0.1,z+0.2,0XD35400,0XD4AC0D);
                objetocub(a2-0.05,-0.3,  a2-0.02,-0.3, a2-0.02 ,0.0, a2-0.09,0.0,0.0,z-0.1,z+0.2,0XD35400,0XD4AC0D);
                
                objetocub(a1+0.05,-0.1,  a2-0.05,-0.1, a2-0.05 ,0.08, a1+0.05,0.08,0.1,z+0.3,z+0.35,0xA04000 ,0xBA4A00);
                objetocub(a1+0.05,-0.3,  a2-0.05,-0.3, a2-0.05 ,-0.1, a1+0.05,-0.1,0.1,z+0.21,z+0.35,0xA04000,0xBA4A00);
                
                a1=a1+d;
                a2=a2+d;
            }
            z=z+0.5;
        }
    }
    function objetocub(x1,y1, x2,y2, x3,y3, x4,y4, m, Zi, Zj, color1,color2){
        var pantalla = new THREE.Geometry();
        var display = new THREE.Geometry();
        pantalla.vertices.push( new THREE.Vector3( x1, y1, Zi ) );
        pantalla.vertices.push( new THREE.Vector3( x2, y2, Zi ) );
        pantalla.vertices.push( new THREE.Vector3( x3, y3, Zi ) );
        pantalla.vertices.push( new THREE.Vector3( x4, y4, Zi ) );
        
        pantalla.vertices.push( new THREE.Vector3( x1, y1, Zj ) );
        pantalla.vertices.push( new THREE.Vector3( x2, y2, Zj ) );
        pantalla.vertices.push( new THREE.Vector3( x3, y3, Zj ) );
        pantalla.vertices.push( new THREE.Vector3( x4, y4, Zj ) );
        
        display.vertices.push( new THREE.Vector3( x1+m, y1+m, Zj+0.001 ) );
        display.vertices.push( new THREE.Vector3( x2-m, y2+m, Zj+0.001 ) );
        display.vertices.push( new THREE.Vector3( x3-m, y3-m, Zj+0.001 ) );
        display.vertices.push( new THREE.Vector3( x4+m, y4-m, Zj+0.001 ) );
        //uniendo atras adelante
        pantalla.faces.push( new THREE.Face3( 1, 0, 3 ) );
        pantalla.faces.push( new THREE.Face3( 3, 2, 1 ) );
        pantalla.faces.push( new THREE.Face3( 4, 5, 6 ) );
        pantalla.faces.push( new THREE.Face3( 4, 6, 7 ) );
        //uniendo laterales
        pantalla.faces.push( new THREE.Face3( 0, 4, 7 ) );
        pantalla.faces.push( new THREE.Face3( 0, 7, 3 ) );
        pantalla.faces.push( new THREE.Face3( 5, 1, 2 ) );
        pantalla.faces.push( new THREE.Face3( 5, 2, 6 ) );
        //uniendo arriba
        pantalla.faces.push( new THREE.Face3( 2, 3, 7 ) );
        pantalla.faces.push( new THREE.Face3( 7, 6, 2 ) );
        //uniendo abajo
        pantalla.faces.push( new THREE.Face3( 0, 1, 5 ) );
        pantalla.faces.push( new THREE.Face3( 5, 4, 0 ) );
        //uniendo display
        display.faces.push( new THREE.Face3( 0, 1, 2 ) );
        display.faces.push( new THREE.Face3( 0, 2, 3 ) );
        
        // Material de color
        var material = new THREE.MeshBasicMaterial( { color: color1 } );
        var material2 = new THREE.MeshBasicMaterial( { color: color2 } );
        // Crea el objeto
        var miobjeto = new THREE.Mesh (pantalla, material);
        var miobjeto2 = new THREE.Mesh (display, material2);
        
        scene.add(miobjeto);
        scene.add(miobjeto2);
        
    }
    
    
    
    
    
    
    
    function PCss(x1,y1,x2,y2,x3,y3,x4,y4,N,F){
        var a1=x1; var a2=x2; var a3=x3; var a4=x4;
        var d=0.35;
        var z=-0.85;
        for(var i=0;i<F;i++){
            a1=x1; a2=x2; a3=x3; a4=x4;
            for(var j=0;j<N;j++){
             //crea monitor   
            objetocubi(a1,y1,a2,y2,a3,y3,a4,y4,0.01, z,z+0.02, 0x0000,0xAED6F1);
            objetocubi(a1+0.09,y1-0.03, a2-0.09,y2-0.03, a3-0.09,y2, a4+0.09,y1,0.001, z,z+0.005,0x0000,0x0000);
            objetocubi(a1+0.06,y1-0.035, a2-0.06,y2-0.035, a3-0.06,y2-0.03, a4+0.06,y1-0.03, 0.001,z-0.01,z+0.02, 0x0000,0x0000);
            //crea escritorio 
            objetocubi(a1-0.05,y1-0.055, a2+0.05,y2-0.055, a3+0.05,-0.035, a4-0.05,-0.035,0.01, z-0.1,z+0.1, 0xE67E22,0xE67E22);
            objetocubi(a1-0.04,-0.3, a1-0.025,-0.3, a1-0.025,y1-0.055, a4-0.04,y2-0.055,0.01, z-0.1,z+0.1, 0xE67E22,0xE67E22);
            objetocubi(a2-0.05,-0.3, a2+0.05,-0.3, a2+0.05,-0.3+0.05, a2-0.05,-0.3+0.05,0.01, z-0.1,z+0.1, 0xE67E22,0xE67E22);
            //crea el cpu
            objetocubi(a2+0.05,-0.25, a2-0.05,-0.25, a2-0.05,y2-0.06, a2+0.05,y2-0.06,0.0000009, z-0.1,z+0.1, 0x273746 ,0xEAECEE);  
            objetocubi(a2-0.041,-0.25+0.005, a2+0.041,-0.25+0.005, a2+0.041,y2-0.06-0.005, a2-0.041,y2-0.06-0.005,0.0000009, z-0.1,z-0.1, 0xEAECEE,0xEAECEE);   
            objetocubi(a2+0.03,y2-0.09, a2-0.03,y2-0.09, a2-0.03,y2-0.08, a2+0.03,y2-0.08,0.006, z-0.109,z+0.09, 0x000000,0xEAECEE);
            objetocubi(a2+0.03,y2-0.11, a2-0.03,y2-0.11, a2-0.03,y2-0.10, a2+0.03,y2-0.10,0.005, z-0.109,z+0.09, 0x000000,0xEAECEE);
            a1=a1+d;
            a2=a2+d;
            a3=a3+d;
            a4=a4+d;
            }
            z=z-0.6;
        }  
    }
    
 
    function objetocubi(a1,b1, a2,b2, a3,b3, a4,b4, m, pi, pj, color1,color2){
        var pantalla = new THREE.Geometry();
        var display = new THREE.Geometry();
        pantalla.vertices.push( new THREE.Vector3( pi, b1, a1 ) );
        pantalla.vertices.push( new THREE.Vector3( pi, b2, a2 ) );
        pantalla.vertices.push( new THREE.Vector3( pi, b3, a3 ) );
        pantalla.vertices.push( new THREE.Vector3( pi, b4, a4 ) );
        
        pantalla.vertices.push( new THREE.Vector3( pj, b1, a1 ) );
        pantalla.vertices.push( new THREE.Vector3( pj, b2, a2 ) );
        pantalla.vertices.push( new THREE.Vector3( pj, b3, a3 ) );
        pantalla.vertices.push( new THREE.Vector3( pj, b4, a4 ) );
        
        display.vertices.push( new THREE.Vector3( pi-0.001, b1+m, a1+m ) );
        display.vertices.push( new THREE.Vector3( pi-0.001, b2+m, a2-m ) );
        display.vertices.push( new THREE.Vector3( pi-0.001, b3-m, a3-m ) );
        display.vertices.push( new THREE.Vector3( pi-0.001, b4-m, a4+m ) );
        
        //uniendo atras adelante
	    pantalla.faces.push( new THREE.Face3( 0,3,2 ) );
	    pantalla.faces.push( new THREE.Face3( 2,1,0 ) );
    
        pantalla.faces.push( new THREE.Face3( 4,5,6 ) );
	    pantalla.faces.push( new THREE.Face3( 6,7,4 ) );
        //uniendo laterales
        pantalla.faces.push( new THREE.Face3( 0, 4, 7 ) );
        pantalla.faces.push( new THREE.Face3( 7, 3,0 ) );
        pantalla.faces.push( new THREE.Face3( 1, 2,6 ) );
        pantalla.faces.push( new THREE.Face3( 6,5,1 ) );
        //uniendo arriba
        pantalla.faces.push( new THREE.Face3( 3,7,6 ) );
        pantalla.faces.push( new THREE.Face3( 6,2,3 ) );
        // uniendo abajo
        pantalla.faces.push( new THREE.Face3( 0,1,5 ) );
        pantalla.faces.push( new THREE.Face3( 5,4,0 ) );
        
        //uniendo display
        display.faces.push( new THREE.Face3( 0, 1, 2 ) );
	    display.faces.push( new THREE.Face3( 2, 3, 0 ) );
    
        // Material de color 
        var material = new THREE.MeshBasicMaterial( { color: color1 } );
        var material2 = new THREE.MeshBasicMaterial( { color: color2 } );
        // Crea el objeto
	    var miobjeto = new THREE.Mesh (pantalla, material);
        var miobjeto2 = new THREE.Mesh (display, material2);
        scene.add(miobjeto);
        scene.add(miobjeto2);

    }     
}


function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
