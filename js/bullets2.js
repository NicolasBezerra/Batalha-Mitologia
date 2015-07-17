// TIRO 

     function Bullet2(x, y, width, height, color, vx, vy) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.width = width;
                this.height = height;
                this.color = color;
            };



            Bullet2.prototype.update = function() {
                this.x += this.vx;
                this.y += this.vy;
            };
			
			
			
            function UpdateTiro2() {
                    //		Jogador 1

					var tiroD2 = 15;
				
				
				
				
                    // jogador 2

                    // tiro na diagonal
                    if (g2.tiro4 == true && g2.tiro1 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x + 30, g2.y - 10, 12, 12, "#00ffff", 9, -9));
                        g2.contador = tiroD2;
                    }

                    if (g2.tiro2 == true && g2.tiro1 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x - 10, g2.y + 2, 12, 12, "#00ffff", -9, -9));
                        g2.contador = tiroD2;
                    }

                    if (g2.tiro3 == true && g2.tiro2 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x - 5, g2.y + 60, 12, 12, "#00ffff", -9, 9));
                        g2.contador = tiroD2;
                    }

                    if (g2.tiro4 == true && g2.tiro3 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x + 25, g2.y + 60, 12, 12, "#00ffff", 9, 9));
                        g2.contador = tiroD2;
                    }


                    if (g2.tiro2 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x - 10, g2.y + (g2.h / 2), 12, 12, "#00ffff", -9, 0));
                        g2.contador = tiroD2;
                    }

                    // jogador 2
                    if (g2.tiro4 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x + 35, g2.y + (g2.h / 2), 12, 12, "#00ffff", 9, 0));
                        g2.contador = tiroD2;
                    }

                    // jogador 2
                    if (g2.tiro1 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x + 10, g2.y - 10, 12, 12, "#00ffff", 0, -9));
                        g2.contador = tiroD2;
                    }

                    // jogador 2
                    if (g2.tiro3 == true && g2.contador == 0) {
                        bullets2.push(new Bullet2(g2.x + 12, g2.y + 70, 12, 12, "#00ffff", 0, 10));
                        g2.contador = tiroD2;
                    }




                    if (g2.contador > 0) {
                        g2.contador--;
                    }
                 
                    if (g2.tiro2 == true) {
                        g2.tiro2 = false;
                    }
                
                    if (g2.tiro1 == true) {
                        g2.tiro1 = false;
                    }
                  
                    if (g2.tiro3 == true) {
                        g2.tiro3 = false;
                    }
                 
                    if (g2.tiro4 == true) {
                        g2.tiro4 = false;
                    }

                    for (var i = 0, len = bullets2.length; i < len; i++) {
                        var b = bullets2[i];
                        b.update();
                    }

                    for (var i = 0, len = bullets2.length; i < len; i++) {
                        context.fillStyle = bullets2[i].color;
						context.drawImage(imageSatan[Math.floor(currentFrame) % numFrames], bullets2[i].x - 20 , bullets2[i].y - 18 , bullets2[i].width + 25 , bullets2[i].height+ 25);
                
							
						
						
						console.log(caralhao);
                    }
					


                    //colisao com o canvas
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x >= 1300 || bullets2[j].x <= -100 || bullets2[j].y <= -100 || bullets2[j].y >= 700) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                            }
                        }

                    }
                    //leao 1
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < l.x + l.w + 70 &&
                                bullets2[j].x + bullets2[j].width > l.x &&
                                bullets2[j].y < l.y + l.h + 40 &&
                                bullets2[j].height + bullets2[j].y > l.y) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vidal--;
                                if (vidal <= 0) {
                                    l.x = -500
                                }
                            }
                        }
                    }
                    // leao2		
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < l2.x + l2.w + 70 &&
                                bullets2[j].x + bullets2[j].width > l2.x &&
                                bullets2[j].y < l2.y + l2.h + 40 &&
                                bullets2[j].height + bullets2[j].y > l2.y) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vidal2--;
                                if (vidal2 <= 0) {
                                    l2.x = -500
                                }
                            }
                        }

                    }


                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {

                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < g2.x + g2.w &&
                                bullets2[j].x + bullets2[j].width > g2.x &&
                                bullets2[j].y < g2.y + g2.h &&
                                bullets2[j].height + bullets2[j].y > g2.y) {
                                vida -= 2;
                                //bum.w += 20;
                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);

                            }
                        }
                    }

                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {

                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < g1.x + g1.w &&
                                bullets2[j].x + bullets2[j].width > g1.x &&
                                bullets2[j].y < g1.y + g1.h &&
                                bullets2[j].height + bullets2[j].y > g1.y) {
                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vida2 -= 2;
                                //bum2.w += 20;
                            }
                        }

                    }


                    // pedras
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {

                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < px + pw &&
                                bullets2[j].x + bullets2[j].width > px &&
                                bullets2[j].y < py + ph &&
                                bullets2[j].height + bullets2[j].y > py) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vp1--;
                                if (vp1 <= 0) {
                                    px = -500
                                }
                            }


                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < p2x + p2w &&
                                bullets2[j].x + bullets2[j].width > p2x &&
                                bullets2[j].y < p2y + p2h &&
                                bullets2[j].height + bullets2[j].y > p2y) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vp2--;
                                if (vp2 <= 0) {
                                    p2x = -500
                                }
                            }
                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < p3x + p3w &&
                                bullets2[j].x + bullets2[j].width > p3x &&
                                bullets2[j].y < p3y + p3h &&
                                bullets2[j].height + bullets2[j].y > p3y) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vp3--;
                                if (vp3 <= 0) {
                                    p3x = -500
                                }
                            }
                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets2.length; j < len_; j++) {
                        if (typeof bullets2[j] == 'undefined') {} else {
                            if (bullets2[j].x < p4x + p4w &&
                                bullets2[j].x + bullets2[j].width > p4x &&
                                bullets2[j].y < p4y + p4h &&
                                bullets2[j].height + bullets2[j].y > p4y) {

                                bullets2.splice(j, 1);
                                //bullets2[j].x.splice(j, 1);
                                // bullets2[j].y.splice(j, 1);
                                vp4--;
                                if (vp4 <= 0) {
                                    p4x = -500
                                }
                            }

                        }
                    }
                }