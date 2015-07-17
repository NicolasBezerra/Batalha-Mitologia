        // criando funções para uso do teclado 
        // guerreiro 2
        var p2IsFire = false;
        var _keyDown2 = function(e) {

            switch (e.keyCode) {
                case 37: // seta esquerda
                    g2.moveLeft2 = true;
                    break;

                case 39: // seta direita
                    g2.moveRight2 = true;
                    break;

                case 38: //seta para cima 
                    g2.moveUp2 = true;
             
			 break;

                case 40: //seta para baixo
                    g2.moveDown2 = true;
                    break;

                case 16: //troca de tecla
                    trocaDeTecladoPc = true;
                    break;

                case 17: //troca de tecla
                    trocaDeTecladoNot = true;
                    break;




                case 74: //G

                    if (p2IsFire == false) {
                        g1.tiro3 = true;
                        p2IsFire = true;
                        break;
                    }




                case 85: // T
                    if (p2IsFire == false) {
                        g1.tiro1 = true;
                        p2IsFire = true;
                        break;
                    }

                case 72: //F
                    if (p2IsFire == false) {
                        g1.tiro2 = true;
                        p2IsFire = true;
                        break;
                    }

                case 75: //H
                    if (p2IsFire == false) {
                        g1.tiro4 = true;
                        p2IsFire = true;
                        break;
                    }
            }
        }

        var _keyUp2 = function(e) {

            switch (e.keyCode) {
                case 37: // seta esquerda
                    g2.moveLeft2 = false;
                    break;

                case 39: // seta direita
                    g2.moveRight2 = false;
                    break;

                case 38: //seta para cima 
                    g2.moveUp2 = false;
                    break;

                case 40: //seta para baixo
                    g2.moveDown2 = false;
                    break;




                case 74: //G
                    g1.tiro3 = false;
                    p2IsFire = false;
                    break;


                case 85: // T
                    g1.tiro1 = false;
                    p2IsFire = false;
                    break;


                case 72: //F

                    g1.tiro2 = false;
                    p2IsFire = false;
                    break;


                case 75: //H
                    g1.tiro4 = false;
                    p2IsFire = false;
                    break;


            }
        }


        //teclas guerreiros 1
        var p1IsFire = false;
        var _keyDown1 = function(e) {

            switch (e.keyCode) {
                case 65: // seta esquerda
                    g1.moveLeft = true;
                    break;

                case 68: // seta direita
                    g1.moveRight = true;
                    break;

                case 87: //seta para cima 
                    g1.moveUp = true;
                    break;

                case 83: //seta para baixo
                    g1.moveDown = true;
                    break;

               case 101: // 9
                    if (p1IsFire == false) {
                        g2.tiro1 = true;
                        p1IsFire = true;
                        break;
                    }

                case 97: // I
                    if (p1IsFire == false) {
                        g2.tiro2 = true;
                        p1IsFire = true;
                        break;
                    }

                case 98: //O
                    if (p1IsFire == false) {
                        g2.tiro3 = true;
                        p1IsFire = true;
                        break;
                    }

                case 99: //P
                    if (p1IsFire == false) {
                        g2.tiro4 = true;
                        p1IsFire = true;
                        break;
                    }/*
					
					 case 57: // 9
                    if (p1IsFire == false) {
	
                        g2.tiro1 = true;
                        p1IsFire = true;
                        break;
                    }

                case 73: // I
                    if (p1IsFire == false) {
					
                        g2.tiro2 = true;
                        p1IsFire = true;
                        break;
                    }

                case 79: //O
                    if (p1IsFire == false) {
			
                        g2.tiro3 = true;
                        p1IsFire = true;
                        break;
                    }

                case 80: //P
                    if (p1IsFire == false) {
					
                        g2.tiro4 = true;
                        p1IsFire = true;
                        break;
                    }
*/

            }
        }

        var _keyUp1 = function(e) {

            switch (e.keyCode) {
                case 65: // seta esquerda
                    g1.moveLeft = false;
                    break;


                case 68: // seta direita
                    g1.moveRight = false;
                    break;



                case 87: //seta para cima 
                    g1.moveUp = false;
                    break;


                case 83: //seta para baixo
                    g1.moveDown = false;
                    break;




               case 101: // 9

                    g2.tiro1 = false;
                    p1IsFire = false;
                    break;


                case 97: // I

                    g2.tiro2 = false;
                    p1IsFire = false;
                    break;


                case 98: //O

                    g2.tiro3 = false;
                    p1IsFire = false;
                    break;


                case 99: //P

                    g2.tiro4 = false;
                    p1IsFire = false;
                    break;/*
					
					case 57: // 9
						
                    g2.tiro1 = false;
                    p1IsFire = false;
                    break;


                case 73: // I
					
                    g2.tiro2 = false;
                    p1IsFire = false;
                    break;


                case 79: //O

                    g2.tiro3 = false;
                    p1IsFire = false;
                    break;


                case 80: //P

                    g2.tiro4 = false;
                    p1IsFire = false;
                    break;
*/


            }
        }

