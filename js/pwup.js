	function PowerUpZica1(){
			
			 if (g1.x < pwup.x + pwup.w - 22 && g1.x + g1.w -22> pwup.x && g1.y < pwup.y + pwup.h -21 && g1.h + g1.y -20 > pwup.y) {
				
				pwup.x =-100
				pwup.doog --
				pwup.VouGanhei = 1;
				console.log("foi com o a medusa");
				 
                }
				
					 if (g2.x < pwup.x + pwup.w  && g2.x + g2.w > pwup.x && g2.y < pwup.y + pwup.h  && g2.h + g2.y  > pwup.y) {
				
				pwup.x =-100
				pwup.doog2--
				pwup.VouGanhei2 = 1;
				console.log("foi com o guerreiro");
				 
                }
				
				if (pwup.doog <= 399){
				
				pwup.doog--
				}
				
				
				if (pwup.doog2 <= 399){
				
				pwup.doog2--
				}
				
					if(pwup.doog == 0){
					pwup.VouGanhei = 0;
					pwup.doog = 400
				 	pwup.x = 100 + Math.floor(Math.random() * 900);
					pwup.y = 50 + Math.floor(Math.random()* 500 );
				 }
				 
				 if(pwup.doog2 == 0){
					pwup.VouGanhei2 = 0;
					pwup.doog2 = 400
				 	pwup.x = 100 + Math.floor(Math.random() * 900);
					pwup.y = 50 + Math.floor(Math.random()* 500 );
				 }
				if(pwup.VouGanhei == 1){
					
						g1.speedx = 4.5;
						g1.speedy = 4.5;
		}else{
			
			g1.speedx = 3.5;
			g1.speedy = 3.5;
		} 

				
				if(pwup.VouGanhei2 == 1){
				
							g2.speedx = 4.5;
						g2.speedy = 4.5;
		}else{
			
			g2.speedx = 3.5;
			g2.speedy = 3.5;
		} 
			console.log("TAFUNFANDO:"+pwup.VouGanhei);
				
			
			}

console.log("DOOG :" +pwup.doog)
