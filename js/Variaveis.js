 // VARIAVEIS 
 

 var tiroD = 15;
 var tiroD2 = 15;
			

        // Array [IMAGENS] para [ANIMAÇÃO]
        var images = new Array();
        var numFrames = 2;

        var images2 = new Array();
        var numFrames2 = 3;


		var images3 = new Array();
		var numFrames3 = 2;

		var images4 = new Array();
		var numFrames4 = 4;
		
		var images5 = new Array();
		var numFrames5 = 3;
		
		
		var images55 = new Array();
		var numFrames55 = 3;

		var images555 = new Array();
		var numFrames555 = 3;
		
		
		var images5555 = new Array();
		var numFrames5555 = 3;
		
			
		var imageSatan = new Array();
		var numFrames666 = 8;

		
		//SONS
		
		 var audio = new Audio();
        var somMenu = new Audio();
        var audioTutorial = new Audio();
        var audioCreditos = new Audio();
        var audioJogo = new Audio();


        var SomLeao = false;
        var SomMenu = false;
        var SomTutorial = false;
        var SomCredit = false;
        var SomJogo = false;
	
	// IMAGENS
	
	     // rouds

        var roud1 = new Image();
        var roud2 = new Image();
        var roud3 = new Image();
		
        var fundo = new Image();
        var medusa = new Image();
		var medusa2 = new Image();
        var lia1 = new Image();
        var lia12 = new Image();
		var leaov = new Image();
        var guerreiro1 = new Image();
		var guerreiro12 = new Image();
        var vencedor1 = new Image();
        var vencedor2 = new Image();
			//VIDAS
        var v1 = new Image();
        var v2 = new Image();
        var v3 = new Image();
        var v4 = new Image();
        var v5 = new Image();
        var v6 = new Image();
        var v7 = new Image();
        var v8 = new Image();
        var v9 = new Image();
        var v10 = new Image();
        var v11 = new Image();
		        var marcapt = new Image();
				        var marcapsdb = new Image();
						  var preda = new Image();
				var pwup1 = new Image();
					var verda1 = new Image();
						var azula1 = new Image();
						        var lia1 = new Image();
        var lia12 = new Image();

		
		var caralhao = 0;
		var caralhao2 = 0;
		var caralhao3 = 0;
		var caralhao4 = 0;
		
		
		
		// CHAMANDO OS PERSONA
		var touro = new Image();
		var medusas = new Image();
		var rubros = new Image();
		var touro2 = new Image();

    
		// troca de persona
		var troca1 = 0;
		var troca2 = 0;
		
		var roud = {
            x: 500,
            y: 10,
            w: 50,
            h: 50
        }
        var roud2x = 500;
        var roud3x = 500;
	
			   var nomes = {
            x: 0,
            y: -5,
            w: 150,
            h: 50
        }
		
				// GUERREIROS
				
				  //guerreiro 1 
        var g1 = {
            x: 35,
            y: 225,
            w: 100,
            h: 100,
            color: "#00ff00",
            speedx: 3.5,
            speedy: 3.5,
            moveLeft: false,
            moveRight: false,
            moveUp: false,
            moveDown: false,
            tiro1: false,
            tiro2: false,
            tiro3: false,
            tiro4: false,
            tiro5: false,
            tiro6: false,
            tiro7: false,
            tiro8: false,
            contador: 0,
            contadorD: 0

        }

        var bullets = [];
		var bullets2=[];
		

        //guerreiro 2
        var g2 = {
            x: 975,
            y: 250,
            w: 35,
            h: 72,
            color: "#000000",
            speedx: 3.5,
            speedy: 3.5,
            moveLeft2: false,
            moveRight2: false,
            moveUp2: false,
            moveDown2: false,
            tiro1: false,
            tiro2: false,
            tiro3: false,
            tiro4: false,
            tiro5: false,
            tiro6: false,
            tiro7: false,
            tiro8: false,
            contador: 0,
			  contadorD: 0
        }
		// PWUP
		
		
		var pwup = {
		x: 350 + Math.floor(Math.random() * 350),
		y: 50 + Math.floor(Math.random()* 500 ),
		w:50,
		h:50,
		doog : 400,
		VouGanhei:0,
		doog2:400,
		VouGanhei2:0,
		funcionando: false
		}
		
				//VIDAS

				
        var vida = 40;
        var vida2 = 40;
				
				


        var l = {
            x: 10 / 3,
            y: 70,
            w: 20,
            h: 20,
            color: "#00ff00",
            speedx: -7


        }
        var l2 = {
            x: 1000,
            y: 470,
            w: 20,
            h: 20,
            color: "#00ff00",
            speedx: 7

        }


        var px = 650
        var py = 400
        var pw = 50;
        var ph = 50;
        var pcolor = "#00ff00";



        var p2x = 650
        var p2y = 350
        var p2w = 50;
        var p2h = 50;
        var p2color = "#00ff00";

        var p3x = 300
        var p3y = 150
        var p3w = 50;
        var p3h = 50;
        var p3color = "#00ff00";



        var p4x = 300
        var p4y = 200
        var p4w = 50;
        var p4h = 50;
        var p4color = "#00ff00";

		
        var vp1 = 15;
        var vp2 = 15;
        var vp3 = 15;
        var vp4 = 15;
		
		  var play = false;
        var mousepressed = false;
        var mouse_x = 0;
        var mouse_y = 0;
        var how = false;
        var creditos = false;
        var main = true;
		
		   var menu = new Image();
		          var tutorial3 = new Image();
        var tutorial2 = new Image();
        var tutorial1 = new Image();
        var crl = new Image();
  
	
var tutor2 = false;
        var tutor3 = false;
	
		   // TIRO
		   
        var espadadireita = new Image();
        var espadacima = new Image();
        var espadaesquerda = new Image();
        var espadabaixo = new Image();
		   var magia_medusa = new Image();
		
		
		var turno = 0
        var turno2 = 0
		   cabouojogo1 = false;

        cabouojogo2 = false;

		
        var trocaDeTecladoPc = false;
        var trocaDeTecladoNot = false;
