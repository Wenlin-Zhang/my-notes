/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/
var bulletArray = new Array();

function drawSplash(ctx, splashArray)
{
	for(var i = 0; i < splashArray.length; i++)
	{
		var splash = splashArray[i];
		ctx.save();
			ctx.translate(splash.x, splash.y);
			ctx.scale(splash.scale, splash.scale);
			ctx.save();
				ctx.scale(splash.up.scaleX, splash.up.scaleY);
				ctx.globalAlpha = splash.up.alpha;
				ctx.drawImage(splashImg.splashUp, -18, -30);
			ctx.restore();
			ctx.globalAlpha = splash.down.alpha;
			ctx.translate(0,1);
			ctx.scale(splash.down.scaleX, splash.down.scaleY);
			ctx.drawImage(splashImg.splashDown, -14, -4.5);
		ctx.restore();
	}
}

function drawBullet(ctx)
{
	for(i=0;i<bulletArray.length;i++)
	{
		var dx1;
		var dx2;
		var dy1;
		var dy2;
		var dX = bulletArray[i].fx - bulletArray[i].x;
		var dY = bulletArray[i].fy - bulletArray[i].y;
		
		bulletArray[i].ang = Math.atan2(dY, dX);
		bulletArray[i].dst = Math.sqrt(dX * dX + dY * dY);
		
		
		
		
		var mult = Math.sqrt((bulletArray[i].fx-bulletArray[i].sx)*(bulletArray[i].fx-bulletArray[i].sx)+(bulletArray[i].fy-bulletArray[i].sy)*(bulletArray[i].fy-bulletArray[i].sy));
		bulletArray[i].speed += (0.01-bulletArray[i].speed)/20;
		bulletArray[i].dist += bulletArray[i].speed;	
		
		var speedBull = 3;
		
		if (bulletArray[i].dst > 0.5)
		{
			bulletArray[i].x += speedBull * Math.abs(bulletArray[i].dst / 10) * Math.cos(bulletArray[i].ang);
			bulletArray[i].y += speedBull * Math.abs(bulletArray[i].dst / 10) * Math.sin(bulletArray[i].ang);
			bulletArray[i].x2 += speedBull* Math.abs(bulletArray[i].dst *0.99 / 10) * Math.cos(bulletArray[i].ang);
			bulletArray[i].y2 += speedBull * Math.abs(bulletArray[i].dst *0.99 / 10) * Math.sin(bulletArray[i].ang);
			bulletArray[i].scale -= bulletArray[i].scale/ (speedBull + 5);	
		
		ctx.beginPath();
		ctx.moveTo(bulletArray[i].x, bulletArray[i].y);
		ctx.lineTo(bulletArray[i].x2, bulletArray[i].y2);		
		ctx.lineWidth = bulletArray[i].scale;
		ctx.strokeStyle = "rgba(255, 200, 50, "+Math.round(bulletArray[i].alpha*100)/100+")";
		ctx.lineCap = 'round';
		ctx.globalCompositeOperation = 'lighter';
		ctx.stroke();
		ctx.globalCompositeOperation = "source-over";
		ctx.closePath();
		}
		else
		{
			
			ctx.save();
				ctx.translate(tankImg.x, tankImg.y);
				ctx.scale(tankImg.scale,tankImg.scale);
				ctx.translate(8, -20);
				tankImg.hit.draw(ctx);
				ctx.translate(8, 20);
				//ctx.fill();
			ctx.restore();
			if(ctx.isPointInPath(bulletArray[i].x+cam.x, bulletArray[i].y+cam.y) && bulletArray[i].x > (houseImg.x+110)*houseImg.scale)
			{
				addShipExp(20+objDx, 56+objDy,  1.4, tankImg.expArray);							
				TweenLite.delayedCall(0.05, addShipExp,[70+objDx, 65+objDy,  0.9, tankImg.expArray]);				
				camShake();			
			}
			frame2();
			bulletArray.splice(i,1);
			i--;
		}		
	}
}

function addBullet(sx,sy,fx,fy,cpx,cpy)
{
	var bull = {};
	bull.sx = sx;
	bull.sy = sy;
	bull.x = sx*0.45;
	bull.y = fy+250;
	bull.x2 = bull.x;
	bull.y2 = bull.y;
	bull.fx = fx;
	bull.fy = fy;
	bull.cpx = cpx;
	bull.cpy = cpy;
	bull.scale = 20;
	bull.dist = 0;
	bull.alpha = 4;
	bull.speed = 0.1;
	bulletArray.push(bull);
}

function drawLightSmoke()
{
	var nCanvas = document.createElement("CANVAS");		
		var w = 100;		
		var h = 92;		
		nCanvas.width = w;
		nCanvas.height = h;	
		var ctx = nCanvas.getContext('2d');	
		ctx.globalAlpha = 1;
		ctx.drawImage(expImg.exp,0,0);
	
		try{
		var buffer = ctx.getImageData(0, 0, w, h),
			data = buffer.data,
			len = data.length,
			i = 0,
			c = {r:120, g:80, b: 80, a:10};
		
		for(i=0; i < len; i += 4) {
			data[i] = data[i] + c.r;
			data[i + 1] = data[i + 1] + c.g;
			data[i + 2] = data[i + 2] + c.b;
			data[i + 3] = data[i + 3] + c.a;
		}
		ctx.putImageData(buffer, 0, 0);
		}catch(e)
		{
		}		
		expImg.light = nCanvas;	
}

function drawWhiteSmoke()
{
	var nCanvas = document.createElement("CANVAS");		
		var w = 40;		
		var h = 40;		
		nCanvas.width = w;
		nCanvas.height = h;	
		var ctx = nCanvas.getContext('2d');	
		ctx.drawImage(smokeImg.pic,0,0);
		try{

		var buffer = ctx.getImageData(0, 0, w, h),
			data = buffer.data,
			len = data.length,
			i = 0,
			c = {r:120, g:120, b: 120, a:0};
		
		for(i=0; i < len; i += 4) {
			data[i] = data[i] + c.r;
			data[i + 1] = data[i + 1] + c.g;
			data[i + 2] = data[i + 2] + c.b;
			data[i + 3] = data[i + 3] + c.a;
		}
		ctx.putImageData(buffer, 0, 0);

	}catch(e){
		ctx.globalCompositeOperation = "source-in";
		ctx.fillStyle = "rgba(240,240,240,1)";
		ctx.globalAlpha = 1;
		ctx.fillRect(0,0,40,40);
	
		ctx.globalCompositeOperation = "source-over";
			
	}
		
		smokeImg.white = nCanvas;		
}

function drawBalck()
{
	var nCanvas = document.createElement("CANVAS");		
	var w = 100;		
	var h = 92;		
	nCanvas.width = w;
	nCanvas.height = h;	
	var ctx = nCanvas.getContext('2d');	
	ctx.drawImage(expImg.exp,0,0);
	try
	{
		var buffer = ctx.getImageData(0, 0, w, h),
		data = buffer.data,
		len = data.length,
		i = 0,
		c = {r:-200, g: -170, b: -170, a:6};
		
		for(i=0; i < len; i += 4) 
		{
			data[i] = data[i] + c.r;
			data[i + 1] = data[i + 1] + c.g;
			data[i + 2] = data[i + 2] + c.b;
			data[i + 3] = data[i + 3] + c.a;
		}
		ctx.putImageData(buffer, 0, 0);
		
		var buffer = ctx.getImageData(0, 0, w, h),
		data = buffer.data,
		len = data.length,
		i = 0,
		c = {r:30, g: 20, b: 10, a:0};
		
		for(i=0; i < len; i += 4) 
		{
			data[i] = data[i] + c.r;
			data[i + 1] = data[i + 1] + c.g;
			data[i + 2] = data[i + 2] + c.b;
			data[i + 3] = data[i + 3] + c.a;
		}
	ctx.putImageData(buffer, 0, 0);
	}catch(e){}		
	expImg.bExp = nCanvas;	
}


function addExp(x,y,scale, expArray)
{

	var i=0;
	var eObj = {};
	eObj.smokeArray = new Array();
	eObj.fireArray = new Array();
	eObj.sparkArray = new Array();		
	eObj.x = x;
	eObj.y = y;
	eObj.sy = y;
	eObj.scale = scale;
	eObj.lineScale = 0;
	eObj.lineAlpha = 1;
	for(i=0;i<0;i++)
	{
		var obj = {};
		obj.x = 0;
		obj.y = 0;
		obj.scale = 0;
		obj.sScale = 3.3+Math.random()*0.3;
		obj.sScale *= 1.2;
		obj.dScale = 0;
		obj.ang = -1.57+Math.random()*2-1;
		obj.sDist = 10+Math.random()*10;
		obj.dist = 0;
		obj.alpha = 0.7+Math.random()*0.3;
		eObj.smokeArray.push(obj)
	}
	
	for(i=0;i<2;i++)
	{
		var obj = {};
		obj.x = 0;
		obj.y = 0;
		obj.scale = 0;
		obj.sScale = 0.4+Math.random()*0.3;	
		obj.dScale = 0;
		obj.ang = Math.random()*5;
		obj.pAng = Math.random()*5;
		obj.dAng =obj.pAng-Math.cos(obj.ang)*1.1; 
		obj.sDist =6+Math.random()*16;		
		obj.dist = 0;
		obj.speed = 12+Math.random()*6;
		obj.alpha = 3;
		obj.bAlpha = 0;
		obj.bFAlpha = 0.8;
		obj.dy = 0;
		obj.dDy = Math.random()*0.3;
		
		if(i==0)
		{			
			obj.sScale = 0.6;
			
			var a =  JSON.stringify(obj);
			a =  JSON.parse(a);
			a.pAng = Math.random()*5;
			a.dAng =a.pAng+Math.cos(obj.ang)*1.8;		
			a.sScale *= 1.2;
			eObj.fireArray.push(a);
			eObj.fireArray.push(obj);			
		}
		else
		{
			var a =  JSON.stringify(obj);
			a =  JSON.parse(a);
			a.pAng = Math.random()*5;
			a.dAng =a.pAng+Math.cos(obj.ang)*1.8;
			a.sScale *= 1.2;
			TweenLite.delayedCall(i/30,addExpFire,[eObj,a]);
			TweenLite.delayedCall(i/30,addExpFire,[eObj,obj]);
		}		
	}	
	expArray.push(eObj);	
}
function addExpFire(eObj,obj)
{
	eObj.fireArray.push(obj);
}

function addShipExp(x,y,scale, expArray)
{
	var i=0;
	var eObj = {};
	eObj.smokeArray = new Array();
	eObj.fireArray = new Array();
	eObj.sparkArray = new Array();	
	eObj.Rays = new Array();
	eObj.raysSmoke = new Array();
	eObj.x = x;
	eObj.y = y;
	eObj.sy = y;
	eObj.scale = scale;
	eObj.lineScale = 0;
	eObj.lineAlpha = 1;
	for(i=0;i<0;i++)
	{
		var obj = {};
		obj.x = 0;
		obj.y = 0;
		obj.scale = 0;
		obj.sScale = 3.3+Math.random()*0.3;
		obj.dScale = 0;
		obj.ang = -1.57+Math.random()*2-1;
		obj.sDist = 10+Math.random()*10;
		obj.dist = 0;
		obj.alpha = 0.7+Math.random()*0.3;
		eObj.smokeArray.push(obj)
	}
	
	for(i=0;i<3;i++)
	{
		var obj = {};
		obj.x = 0;
		obj.y = -18;
		obj.scale = 0.2;
		obj.sScale = 0.3+Math.random()*0.3;	
		obj.dScale = 0;
		obj.ang = Math.random()*5;
		obj.pAng = Math.random()*5;
		obj.dAng =obj.pAng-Math.cos(obj.ang)*1.1; 
		obj.sDist =6+Math.random()*16;		
		obj.dist = 0;
		obj.speed = 12+Math.random()*6;
		obj.alpha = 16;
		obj.bAlpha = 0;
		obj.bFAlpha = 1.3;
		obj.dy = 0;
		obj.dDy = Math.random()*0.1+0.06;
		
		if(i==0)
		{	
			//obj.alpha = 0.6;
			obj.sScale = 0.6;
			
			var a =  JSON.stringify(obj);
			a =  JSON.parse(a);
		a.pAng = Math.random()*5;
		a.dAng =a.pAng+Math.cos(obj.ang)*1.8;
		
		a.sScale *= 1.2;
			eObj.fireArray.push(a);
			eObj.fireArray.push(obj);
			
		}
		else
		{
		
		var a =  JSON.stringify(obj);
			a =  JSON.parse(a);
		a.pAng = Math.random()*5;
		a.dAng =a.pAng+Math.cos(obj.ang)*1.8;
		a.sScale *= 1.2;
			TweenLite.delayedCall(i/30,addExpFire,[eObj,a]);
			TweenLite.delayedCall(i/30,addExpFire,[eObj,obj]);
		}
		
	}
	var rAng = Math.random()*80;
	for(i=0;i<2;i++)
	{
		var obj = {};
		
		obj.sy = 0-Math.random()*20;
		obj.x = 0;
		obj.y = 0;
		obj.timer = Math.round(Math.random()*5) ;
		rAng+=30;
		obj.ang = radian(-90+/*Math.random()*80*/rAng%80-40);	
		obj.sx = Math.cos(obj.ang)*40;		
		obj.dist = Math.random()*10;
		obj.speed = 2.1+Math.random()/2;
		obj.length = 40+Math.random()*80;
		obj.life = 1;
		obj.scale = 0.3;
		obj.smokeArray = new Array();
		eObj.Rays.push(obj);
	}
	for(i=0;i<3;i++)
	{
		var obj = {};
		obj.ang = -1.1+i/1.3;
		obj.sx = 0;
		obj.sy = 0;
		obj.x = obj.sx;
		obj.y = obj.sy;	
		obj.scale = 0.3;		
		obj.alpha = 2;	
		obj.sScale = 0.7+Math.random()*0.3;		
		
		eObj.sparkArray.push(obj);
	}	

	expArray.push(eObj);	
}

function drawShipExp(ctx, expArray)
{
	for(var i=0;i<expArray.length;i++)
	{
		ctx.save();	
		ctx.translate(expArray[i].x,expArray[i].y);
		ctx.scale(expArray[i].scale,expArray[i].scale);
		
		//////////////////////////////
		var fArray = expArray[i].fireArray;
		for(var f=0;f<fArray.length;f++)
		{
			fArray[f].scale+=(fArray[f].sScale-fArray[f].scale)/12;
			fArray[f].dScale +=0.002;
			fArray[f].dist+=(fArray[f].sDist-fArray[f].dist)/12;
			fArray[f].x = Math.cos(fArray[f].ang)*fArray[f].dist*1.2;
			fArray[f].y = Math.sin(fArray[f].ang)*fArray[f].dist/2-8;
			fArray[f].alpha +=(0-fArray[f].alpha)/fArray[f].speed*0.9;
			fArray[f].bAlpha +=(fArray[f].bFAlpha-fArray[f].bAlpha)/30;
			fArray[f].bFAlpha +=(0-fArray[f].bFAlpha)/fArray[f].speed/4;
			//fArray[f].bFAlpha-=0.01;
			fArray[f].dy -= fArray[f].dDy+(fArray[f].alpha-0.6)/8;
			fArray[f].pAng+=(fArray[f].dAng-fArray[f].pAng)/40;
			ctx.save();			
			ctx.translate(fArray[f].x,fArray[f].y+fArray[f].dy);
			ctx.scale(fArray[f].scale+fArray[f].dScale,fArray[f].scale+fArray[f].dScale);
			
			
			ctx.rotate(fArray[f].pAng);
			ctx.globalAlpha =  trueAlpha(fArray[f].bAlpha);
			ctx.drawImage(expImg.bExp,-50,-46);
			
			ctx.globalAlpha = trueAlpha(fArray[f].alpha);
			if(Math.round(fArray[f].alpha*100)/100>1)
			{
			ctx.globalAlpha = 1;	
			}
			ctx.globalCompositeOperation = 'lighter';
			ctx.drawImage(expImg.exp,-50,-46);
			
			ctx.restore();
			if(fArray[f].bAlpha<0.02)
			{
				fArray.splice(f,1);
				f--;
			}
		}
		
		for(var o = 0; o < expArray[i].Rays.length; o++)
		{
			var Ray = expArray[i].Rays[o];
			Ray.dist += Ray.speed;
			Ray.speed += (0-Ray.speed)/60;	
			Ray.scale += (0-Ray.scale)/30;					
			Ray.sy += 0.9;
			Ray.x = Ray.sx+Math.cos(Ray.ang)*Ray.dist;
			Ray.y = Ray.sy+Math.sin(Ray.ang)*Ray.dist;			
			Ray.life -= 0.01;			
			Ray.timer++;
			if(Ray.timer % 10 == 0)
			{
				Ray.timer = 0;
				var obj = {};
				obj.x = Ray.x;
				obj.y = Ray.y;
				obj.scale = 0.03;
				obj.fScale = 0.01+Math.random()*0.1+Ray.scale;
				obj.rotation = Math.random()*5;
				obj.fAlpha = 2+Ray.scale*14.2;
				obj.bAlpha = 5+Ray.scale+80;
				expArray[i].raysSmoke.push(obj);
				
				
			}
			if(Ray.life < 0)
			{
				expArray[i].Rays.splice(o, 1);
				o--;
			}
		}
		
		for(var o = 0; o < expArray[i].raysSmoke.length; o++)
		{
			var smoke = expArray[i].raysSmoke[o];
			smoke.scale += (smoke.fScale-smoke.scale)/20;
			smoke.fAlpha += (0-smoke.fAlpha)/12;
			smoke.bAlpha += (0-smoke.bAlpha)/24;
			
			ctx.save();
				ctx.translate(smoke.x, smoke.y);
				ctx.scale(smoke.scale,smoke.scale);
				ctx.rotate(smoke.rotation);				
				ctx.globalAlpha = trueAlpha(smoke.bAlpha);
				ctx.drawImage(expImg.bExp,-50,-46);				
				ctx.globalAlpha = trueAlpha(smoke.fAlpha)+0.06*trueAlpha(smoke.bAlpha);				
				ctx.drawImage(expImg.exp,-50,-46);
				ctx.rotate(smoke.rotation);
				ctx.scale(1.05,1.05);
				ctx.drawImage(expImg.light,-50,-46);
			ctx.restore();			
			if(smoke.bAlpha < 0.02)
			{
				expArray[i].raysSmoke.splice(o, 1);
				o--;
			}
		}
		var sparkArray = expArray[i].sparkArray;		
		for(var sp=0;sp<sparkArray.length;sp++)
		{
			sparkArray[sp].scale+=(sparkArray[sp].sScale-sparkArray[sp].scale)/15;
			sparkArray[sp].alpha+=(0-sparkArray[sp].alpha)/20;		
			ctx.save();			
			ctx.translate(sparkArray[sp].x,sparkArray[sp].y-10);
			ctx.scale(sparkArray[sp].scale,sparkArray[sp].scale);
			ctx.globalAlpha = trueAlpha(sparkArray[sp].alpha);
			
			ctx.rotate(sparkArray[sp].ang);
			ctx.globalCompositeOperation = 'lighter';
			ctx.drawImage(expImg.sparks,-150/2,-149, 150, 149);
			ctx.restore();
		}
		
		ctx.restore();
	}
}



function drawExp(ctx, expArray)
{
	for(var i=0;i<expArray.length;i++)
	{
		expArray[i].x+=0.1*expArray[i].scale;
		expArray[i].y+=0.1*expArray[i].scale;
		ctx.save();	
		ctx.translate(expArray[i].x,expArray[i].y);
		ctx.scale(expArray[i].scale,expArray[i].scale);		
		var sArray = expArray[i].smokeArray;
		var fArray = expArray[i].fireArray;
		var sparkArray = expArray[i].sparkArray;		
		for(var s=0;s<sArray.length;s++)
		{
			sArray[s].scale+=(sArray[s].sScale-sArray[s].scale)/14;
			sArray[s].dScale +=0.008;
			sArray[s].dist+=(sArray[s].sDist-sArray[s].dist)/12;
			sArray[s].x = Math.cos(sArray[s].ang)*sArray[s].dist;
			sArray[s].y = Math.sin(sArray[s].ang)*sArray[s].dist-sArray[s].dScale*10;		
			sArray[s].alpha -=0.008;
			ctx.save();			
			ctx.translate(sArray[s].x,sArray[s].y-10);
			ctx.scale(sArray[s].scale+sArray[s].dScale,sArray[s].scale+sArray[s].dScale);
			ctx.globalAlpha = sArray[s].alpha;
			
			ctx.rotate(sArray[s].ang+sArray[s].sScale);
			ctx.drawImage(expImg.smoke,-20,-20);
			ctx.restore();
			if(sArray[s].alpha<0.01)
			{
				sArray.splice(s,1);
				s--;
			}
		}		
		
		expArray[i].lineScale += (110-expArray[i].lineScale)/16;
		expArray[i].lineAlpha *=0.9;
		
		
		for(var f=0;f<fArray.length;f++)
		{
			fArray[f].scale+=(fArray[f].sScale-fArray[f].scale)/12;
			fArray[f].dScale +=0.002;
			fArray[f].dist+=(fArray[f].sDist-fArray[f].dist)/12;
			fArray[f].x = Math.cos(fArray[f].ang)*fArray[f].dist*1.2;
			fArray[f].y = Math.sin(fArray[f].ang)*fArray[f].dist/2;
			fArray[f].alpha +=(0-fArray[f].alpha)/fArray[f].speed*1.6;
			fArray[f].bAlpha +=(fArray[f].bFAlpha-fArray[f].bAlpha)/30;
			fArray[f].bFAlpha +=(0-fArray[f].bFAlpha)/fArray[f].speed/1.4;
			//fArray[f].bFAlpha-=0.01;
			fArray[f].dy -= fArray[f].dDy+fArray[f].alpha/2;
			fArray[f].pAng+=(fArray[f].dAng-fArray[f].pAng)/40;
			ctx.save();			
			ctx.translate(fArray[f].x,fArray[f].y+fArray[f].dy);
			ctx.scale((fArray[f].scale+fArray[f].dScale)*2,(fArray[f].scale+fArray[f].dScale)*2);
			
			
			ctx.rotate(fArray[f].pAng);
			ctx.globalAlpha = Math.round(fArray[f].bAlpha*100)/100;
			ctx.drawImage(expImg.bExp,-50,-46);
			
			ctx.globalAlpha = Math.round(fArray[f].alpha*100)/100;
			if(Math.round(fArray[f].alpha*100)/100>1)
			{
			ctx.globalAlpha = 1;	
			}
			ctx.globalCompositeOperation = 'lighter';
			ctx.drawImage(expImg.exp,-50,-46);
			
			ctx.restore();
			if(fArray[f].bAlpha<0.02)
			{
				fArray.splice(f,1);
				f--;
			}
		}
		
		for(var sp=0;sp<sparkArray.length;sp++)
		{
			sparkArray[sp].scale+=(sparkArray[sp].sScale-sparkArray[sp].scale)/12;
			sparkArray[sp].alpha+=(0-sparkArray[sp].alpha)/20;			
			ctx.save();			
			ctx.translate(sparkArray[sp].x,sparkArray[sp].y-10);
			ctx.scale(sparkArray[sp].scale,sparkArray[sp].scale);
			ctx.globalAlpha = sparkArray[sp].alpha;
			
			ctx.rotate(sparkArray[sp].ang);
			ctx.drawImage(expImg.sparks,-34,-74);
			ctx.restore();
		}
		
		if(fArray.length>0)
		{
		var tpgr = ctx.createRadialGradient(0,0,14,0,0,32);
		tpgr.addColorStop(0, "rgba(250, 240, 200, "+Math.round(fArray[0].alpha/3*100)/100+")");	
		tpgr.addColorStop(1, "rgba(250, 200, 150, "+0+")");	
	
		ctx.fillStyle = tpgr;		
		ctx.globalCompositeOperation = "lighter";	
	
		ctx.fillRect(-60,-60,120,120);
		}
		
		ctx.restore();
		if(sArray.length==0&&fArray.length==0&&sparkArray.length==0)
		{
			expArray.splice(i,1);
			i--;
		}
	}
	
}

function addPlaneSmoke(plane)
{
	plane.timer++;	
	if(plane.smokeEnable==true&&plane.timer%6==0)
	{
		plane.timer = 0;
		var smoke = {};
		smoke.x = plane.x;
		smoke.y = plane.y;
		smoke.scale = 0.1;
		smoke.alpha = 0.9;
		smoke.rotation = Math.random()*5;
		smoke.fScale =0.3+Math.random()*0.7;
		smoke.ang = plane.ang;
		planes.smokeArray.push(smoke);
	}
}

function drawPlaneSmoke(ctx)
{
	for(var i =0; i<planes.smokeArray.length; i++)
	{
		var smoke = planes.smokeArray[i];
		smoke.scale += (smoke.fScale-smoke.scale)/30;
		smoke.alpha += (0-smoke.alpha)/100;
		smoke.fScale+=0.002;			
		ctx.save();
		ctx.translate(smoke.x, smoke.y);	
		ctx.rotate(smoke.ang);	
		ctx.scale(smoke.scale*1.4, smoke.scale*0.9);
		ctx.rotate(smoke.rotation);			
		ctx.globalAlpha = smoke.alpha;			
		ctx.drawImage(smokeImg.red, -20, -20);			
		ctx.restore();
		if(smoke.alpha<0.02)
		{
			planes.smokeArray.splice(i,1);
			i--;
		}
	}
}
