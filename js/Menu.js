	

        function mouseMove(e) {
            mouse_x = e.x - cb.left;
            mouse_y = e.y - cb.top;
            console.log("X:"+mouse_x, "Y:"+mouse_y);
        }

        function mouseDown(e) {
            mousepressed = true;
        }

        function mouseUp(e) {
            mousepressed = false;
        }


        function menu1() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(menu, 0, 0, canvas.width, canvas.height);

                if (mouse_x >= 468 && mouse_x <= 615 && mouse_y >= 316 && mouse_y <= 372 && mousepressed && how == false && creditos == false) play = true;
                if (mouse_x >= 368 && mouse_x <= 466 && mouse_y >= 440 && mouse_y <= 535 && mousepressed && play == false && creditos == false) how = true;
                if (mouse_x >= 613 && mouse_x <= 716 && mouse_y >= 440 && mouse_y <= 535 && mousepressed && play == false && how == false) creditos = true;
            }
            
        
        function wtf() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(tutorial1, 0, 0, canvas.width, canvas.height);

            if (mouse_x >= 846 && mouse_x <= 946 && mouse_y >= 478 && mouse_y <= 518 && mousepressed) {
                mousepressed = false;
                tutor2 = true;
                how = false;
            }



        }

        function wtf2() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(tutorial2, 0, 0, canvas.width, canvas.height);

            if (mouse_x >= 846 && mouse_x <= 946 && mouse_y >= 478 && mouse_y <= 518 && mousepressed) {
                mousepressed = false;
                tutor2 = false;
                tutor3 = true;
            }


        }

        function wtf3() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(tutorial3, 0, 0, canvas.width, canvas.height);

            if (mouse_x >= 846 && mouse_x <= 946 && mouse_y >= 478 && mouse_y <= 518 && mousepressed) {
                mousepressed = false;
                tutor3 = false;
                menu1();

            }


        }




        function nomedopessoal() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(crl, 0, 0, canvas.width, canvas.height);
            if (mouse_x >= 11 && mouse_x <= 111 && mouse_y >= 10 && mouse_y <= 60 && mousepressed) {
                menu1();
                creditos = false;
            }
        }

     

        function victory1() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(vencedor2, 0, 0, canvas.width, canvas.height);


            if (mouse_x >= 11 && mouse_x <= 111 && mouse_y >= 10 && mouse_y <= 60 && mousepressed) {
                mousepressed = false;
                menu1();

                cabouojogo1 = false;
            }
        }

        function victory2() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(vencedor1, 0, 0, canvas.width, canvas.height);

            if (mouse_x >= 11 && mouse_x <= 111 && mouse_y >= 10 && mouse_y <= 60 && mousepressed) {
                mousepressed = false;
                menu1();

                cabouojogo2 = false;
            }
        }
