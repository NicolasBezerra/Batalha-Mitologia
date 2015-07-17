// TIRO 
     function Bullet(x, y, width, height, color, vx, vy) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.width = width;
                this.height = height;
                this.color = color;
            };



            Bullet.prototype.update = function() {
                this.x += this.vx;
                this.y += this.vy;
            };
			
			
			
            function UpdateTiro() {
                    //		Jogador 1

            //var vtiro = 15;
			var tiroD = 15;
				
				
                    // tiro na diagonal
                    if (g1.tiro1 == true &&  g1.tiro4 == true&& g1.contadorD == 0) {
                        bullets.push(new Bullet(g1.x + 100, g1.y - 10, 12, 12, "#00ffff", 8, -8));
                        g1.contadorD = tiroD;
                    }

                    if (g1.tiro1 == true &&  g1.tiro2 == true&& g1.contadorD == 0) {
                        bullets.push(new Bullet(g1.x -10, g1.y - 2, 12, 12, "#00ffff", -8, -8));
                        g1.contadorD = tiroD;
                    }

                    if (g1.tiro3 == true   && g1.tiro4 == true && g1.contadorD == 0) {
                        bullets.push(new Bullet(g1.x + 10, g1.y + 95, 12, 12, "#00ffff", -8, 8));
                        g1.contadorD = vtiroD;
                    }

                    if (g1.tiro2 == true && g1.tiro3 == true &&  g1.contadorD == 0) {
                        bullets.push(new Bullet(g1.x + 65, g1.y + 95, 12, 12, "#00ffff", 8, 8));
                        g1.contadorD = vtiroD;
                    }
					
					
                    if (g1.contadorD > 0) {
                        g1.contadorD--;
                    }


// tiro normal loko

                    if (g1.tiro4 == true && g1.contador == 0) {
                        bullets.push(new Bullet(g1.x + 100, g1.y + (g1.h / 2), 12, 12, "#000000", 9, 0));
                        g1.contador = tiroD;
                    }

                    if (g1.tiro2 == true && g1.contador == 0) {
                        bullets.push(new Bullet(g1.x - 10, g1.y + (g1.h / 2), 12, 12, "#00ffff", -9, 0));
                        g1.contador = tiroD;
                    }

                    if (g1.tiro3 == true && g1.contador == 0) {
                        bullets.push(new Bullet(g1.x + (g1.w / 2) - 6, g1.y + 100, 12, 12, "#00ffff", 0, 9));
                        g1.contador = tiroD;
                    }

                    if (g1.tiro1 == true && g1.contador == 0) {
                        bullets.push(new Bullet(g1.x + (g1.w / 2) - 6, g1.y - 5, 12, 12, "#00ffff", 0, -9));
                        g1.contador = tiroD;
                    }

                    if (g1.contador > 0) {
                        g1.contador--;
                    }
					


                    if (g1.tiro1 == true) {
                        g1.tiro1 = false;
                    }
                    
                    if (g1.tiro2 == true) {
                        g1.tiro2 = false;
                    }
                   
                    if (g1.tiro3 == true) {
                        g1.tiro3 = false;
                    }
				   
                    if (g1.tiro4 == true) {
                        g1.tiro4 = false;
                    }

                    for (var i = 0, len = bullets.length; i < len; i++) {
                        var b = bullets[i];
                        b.update();
                    }

                    for (var i = 0, len = bullets.length; i < len; i++) {
                        context.fillStyle = bullets[i].color;
                        context.fillRect(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height);
                        context.drawImage(magia_medusa, bullets[i].x - 50 / 2, bullets[i].y - 50 / 2, bullets[i].width + 50, bullets[i].height + 50)
                    }


                    //colisao com o canvas
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x >= 1300 || bullets[j].x <= -100 || bullets[j].y <= -100 || bullets[j].y >= 700) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                            }
                        }

                    }
                    //leao 1
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < l.x + l.w + 70 &&
                                bullets[j].x + bullets[j].width > l.x &&
                                bullets[j].y < l.y + l.h + 40 &&
                                bullets[j].height + bullets[j].y > l.y) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vidal--;
                                if (vidal <= 0) {
                                    l.x = -500
                                }
                            }
                        }
                    }
                    // leao2		
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < l2.x + l2.w + 70 &&
                                bullets[j].x + bullets[j].width > l2.x &&
                                bullets[j].y < l2.y + l2.h + 40 &&
                                bullets[j].height + bullets[j].y > l2.y) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vidal2--;
                                if (vidal2 <= 0) {
                                    l2.x = -500
                                }
                            }
                        }

                    }


                    for (var j = 0, len_ = bullets.length; j < len_; j++) {

                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < g2.x + g2.w &&
                                bullets[j].x + bullets[j].width > g2.x &&
                                bullets[j].y < g2.y + g2.h &&
                                bullets[j].height + bullets[j].y > g2.y) {
                                vida -= 2;
                                //bum.w += 20;
                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);

                            }
                        }
                    }



                    // pedras
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {

                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < px + pw &&
                                bullets[j].x + bullets[j].width > px &&
                                bullets[j].y < py + ph &&
                                bullets[j].height + bullets[j].y > py) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vp1--;
                                if (vp1 <= 0) {
                                    px = -500
                                }
                            }


                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < p2x + p2w &&
                                bullets[j].x + bullets[j].width > p2x &&
                                bullets[j].y < p2y + p2h &&
                                bullets[j].height + bullets[j].y > p2y) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vp2--;
                                if (vp2 <= 0) {
                                    p2x = -500
                                }
                            }
                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < p3x + p3w &&
                                bullets[j].x + bullets[j].width > p3x &&
                                bullets[j].y < p3y + p3h &&
                                bullets[j].height + bullets[j].y > p3y) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vp3--;
                                if (vp3 <= 0) {
                                    p3x = -500
                                }
                            }
                        }

                    }

                    // pedras
                    for (var j = 0, len_ = bullets.length; j < len_; j++) {
                        if (typeof bullets[j] == 'undefined') {} else {
                            if (bullets[j].x < p4x + p4w &&
                                bullets[j].x + bullets[j].width > p4x &&
                                bullets[j].y < p4y + p4h &&
                                bullets[j].height + bullets[j].y > p4y) {

                                bullets.splice(j, 1);
                                //bullets[j].x.splice(j, 1);
                                // bullets[j].y.splice(j, 1);
                                vp4--;
                                if (vp4 <= 0) {
                                    p4x = -500
                                }
                            }

                        }
                    }
                }