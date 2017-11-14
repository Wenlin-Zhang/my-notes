/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 AUTHOR: ALEXEY SERGIENYA                   --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/



/* -------------------------------------------------------------------------------------
----------------------------------     VARIABLES     -----------------------------------
--------------------------------------------------------------------------------------*/

var canvasInteractive, 
	canvasPattern,
	canvasDarker,
	canvasButton,
	canvasMain,
	w, h;

var imagesToLoad = 
	{  
		bg : "images/bg.jpg",
		house : "images/house.jpg",
		tank : "images/tank.jpg",
		smoke: "images/smoke.png",
		sparks: "images/sparks.jpg",
		explosion: "images/explosion.png",
		bullet: "images/bullet.png",
		pattern: "images/pattern.png",
		logo : "images/Logo.jpg",		
		button : "images/Button.jpg",
		dust : "images/dust.png",
		dear : "images/deer_atlas_.png"
 	};
	
var logoImg     = {},	
	houseImg    = {},
	bgImg       = {},
	tankImg     = {},
	expImg      = {},
	aimImg      = {},
	bulletIcon  = {},
	bulletPlate = {},
	textPlate   = {},
	cam         = {},
	dustImg     = {},
	darkerImg   = {};

var overFl = false;
var mousePos = {};
var frame = 0;
var interactiveEnable = false;
var isInteractive = false;
var autoPlayTimer = 0;

var deerImg = {};
var ss;
var cjs;


/* -------------------------------------------------------------------------------------
----------------------------------     FUNCTIONS     ----------------------------------- 
--------------------------------------------------------------------------------------*/


/* -------------------------------     START BANNER  ---------------------------------*/
function start()
{
	canvasInteractive = document.querySelector("#Interactive");
	canvasDarker      = document.querySelector("#Darker");
	canvasPattern     = document.querySelector("#Pattern");
	canvasButton      = document.querySelector("#Button");
	canvasMain        = document.querySelector("#Main");

	//
	w = canvasInteractive.width; 
	h = canvasInteractive.height;

	//
	loadImages(imagesToLoad, function(imagesLoaded)
	{
		Button.ctx        = canvasButton.getContext('2d');
		//
		darkerImg.canvas = canvasDarker;
		//
		deerImg.pic = imagesLoaded.dear;
		bgImg.pic = imagesLoaded.bg;
		houseImg.pic = imagesLoaded.house;
		tankImg.pic = imagesLoaded.tank;
		bulletIcon.pic = imagesLoaded.bullet;
		dustImg.pic = imagesLoaded.dust;
		
		expImg.smoke =  imagesLoaded.smoke;			
		expImg.exp =  imagesLoaded.explosion;
		expImg.sparks =  imagesLoaded.sparks;
		
		logoImg.pic = imagesLoaded.logo;		
		Button.pic = imagesLoaded.button;
		
		Pattern.pic = imagesLoaded.pattern;
		
		//
		init();
	});
}

/* -------------------------------     INIT BANNER   ---------------------------------*/
function init()
{
	// OBJECTS INIT
	mousePos.x = w/2;
	mousePos.y = h/2;
	//
	
	drawBalck();
	drawLightSmoke();
	drawPatternElements();
	setAgainPlate(); 
	againPlate.width = 400;
	
	darkerImg.alpha = 1;
	drawDarker(darkerImg);
	TweenLite.to(darkerImg, 1.4, {alpha: 0, ease:Power1.easeOut, onUpdate:drawDarker, onUpdateParams:[darkerImg]});
	
	var cjs = createjs;	
	
	ss = {};
	ss["deer_atlas_"] = new createjs.SpriteSheet({"images": ["images/deer_atlas_.png"], "frames": [[0,84,82,49],[83,135,13,29],[34,135,30,53],[30,190,25,36],[66,135,15,33],[0,0,93,82],[81,170,13,38],[0,187,28,48],[57,190,22,24],[0,135,32,50]]});
	deerInit(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss)
	
	aimImg.shape = new cjs.Shape();
	aimImg.shape.graphics.f("#FFFFFF").s().p("AgLFaIAAiCIAYAAIAACCgAAbDVQBJgJA0g0QA0g1AKhIIAQAAQgKBPg5A5Qg5A5hPAKgAiiCjQg5g5gKhPIARAAQAJBIA0A1QA1A0BIAJIAAARQhPgKg5g5gAgYAaQgLgMAAgOQAAgOALgLQAKgKAOAAQAPAAALAKQALALgBAOQABAOgLAMQgLAKgPAAQgOAAgKgKgADYANIAAgZICCAAIAAAZgAlZANIAAgZICCAAIAAAZgADWgaQgKhJg0g0Qg0g0hJgKIAAgQQBPAKA5A5QA5A5AKBPgAjlgaQAKhPA5g5QA5g5BPgKIAAAQQhIAKg1A0Qg0A0gJBJgAgLjXIAAiCIAYAAIAACCg");
	
	houseImg.shape = new cjs.Shape();
	houseImg.shape.graphics.bf(houseImg.pic, null, new createjs.Matrix2D(1,0,0,1,-142.9,-83.5)).s().p("ACiMPIkPAIIicgsIjwAFIhmgXIl6gFIlwg5Ig1h6IBcgSIHTgZIABl4IgfgcIAGgOICchHIAkhIIADgaIhVgWIAPgRIGakZICRhaIBJgfIAPAPIgFAlIBGhFIAVABIgDAnIAhAAIATgOIANgmIAPADIAAAMIBSg9IA3gEIARglIIui5IIaKdIghANIhsAIIACC1IAdAYIA6AVIhJAVIA1AvIgdAYIAHDKIgDBFIAqAdIgDAFIAUABIAAABIgHAaIAWgCIgCAVIAkANIgRANIAgAIIAOAFIAVACIgNAaIAiAWIgRAMIAhAdIhYAZIgtAhIg5gNIhUAtIhrgNIhSAvIhmgPIg6AcIhGgMIg4AOIkJAagAs7B9IAADvIA/AAIAHgKIAAi0IgTAAIAAgZIAVgjIgYgCg");
	
	tankImg.track = new cjs.Shape();
	tankImg.track.graphics.bf(tankImg.pic, null, new createjs.Matrix2D(1,0,0,1,-139.9,-87.5)).s().p("AvwDTIkUizQgfgtAOg3IhQgCIAdhnIAngoIBYgFII7AzIRfhCIJ4BHIEdBkQgYBCg/ApIk2CkIn2gSIhfAmIiIAFgAKvCeIBgAAQgbgcgQgmIgIAAQgLAkgiAegAQigDIAEBnIB1hBIgHgVIgxgUg");
	tankImg.track.setTransform(0,0);
	tankImg.track.offsetX = 139.9;
	tankImg.track.offsetY = 87.5;
	
	tankImg.body = new cjs.Shape();
	tankImg.body.graphics.bf(tankImg.pic, null, new createjs.Matrix2D(1,0,0,1,-143.7,-68.5)).s().p("AK7DlICjhrImyACIgpAiIxkAUIpvjKIg8CKIALiXIBshUIA4gGIAAgXIBHgMIABgNIBLgHIDrAMIAAgwIFWgNIATBXIJggyIFgAWIGOA2IAwgeIAbAJIAVgPIArAKIAUAnIFUAvIBCCHIgCA9IhtgBIiagdIhqB8g");
	tankImg.body.setTransform(0+120,0);
	tankImg.body.offsetX = 143.7-120;
	tankImg.body.offsetY = 68.5;
	
	tankImg.bush1 = new cjs.Shape();
	tankImg.bush1.graphics.bf(tankImg.pic, null, new createjs.Matrix2D(1,0,0,1,-167,-27.6)).s().p("Ar4C6IgogGIABiyICdhBIBAgIIAAgjIAjgCIABgsIArgCIABgeIAcgBIAHAVIA2gBIABgdIAxgBIAUAMIABASIAuAVIAtA8IAJAAIAAgeIgLgdIgIgHIAMgEIAaAAIAMAEIgJAJIgEAfIABAcIAKAAIAAgXIBWABIAlAUIAbAAIAAgKIA/AAIAaAdIAoAAIAAAKIA9AAIBOgoIApgBIAbAMIFhiBIBjgyQApgLAbAfQALAngVAnQgQAPgggFIgyATIgjABIldB5IABAbIAagTIALAOIgPAWIASAaIgPAPIgOAJIADANIAaADIgDAWIgcAFIgIApIhYAbIABAtIlQgTIp5Ayg");
	tankImg.bush1.setTransform(0,0);
	tankImg.bush1.offsetX = 20;
	tankImg.bush1.offsetY = -40;
	
	tankImg.bush2 = new cjs.Shape();
	tankImg.bush2.graphics.bf(tankImg.pic, null, new createjs.Matrix2D(1,0,0,1,-272.9, -30.5)).s().p("AojgfIA+grIDogrIAdgjIAAgOIAagiIAagCIADANIAjgCIAIggIAwAAIAOAhIBCAHIASgSIAUAHIgJAPIABAjIBHAAQAVAAALAEQAMAEAFAPIATgBIAAgVIBEAAIABAVIAagdIAhAmIC4AZIBBAyIAACaIgeAXIg6AQIAAAeIh1AAIgNgMImXACIlzAwIhjABg");
	tankImg.bush2.setTransform(0,0);
	tankImg.bush2.offsetX = 5;
	tankImg.bush2.offsetY = -34;
	
	tankImg.hit = new cjs.Shape();
	tankImg.hit.graphics.ef("#010000").s().p("A02EgIgChMIhQgMIAbi1IEXh3IImgoIAFjDIFVidIEVAIIHsCaIAAEJIMXBbIBHDCInYEPI/EACg");
	
	tankImg.body.childrens = new Array();
	tankImg.body.childrens.push(tankImg.bush2);
	
	deerImg.mc =new lib.Deer();	
	
	// LISTENERS
	canvasInteractive.addEventListener('click', mClick, false);
	canvasInteractive.addEventListener('mousemove', mMove, false);
	canvasInteractive.addEventListener('mouseover', mOver, false);
	canvasInteractive.addEventListener('mouseout', mOut, false);
	document.addEventListener("visibilitychange", canvasWidthChange);	
	
	setStartPos();
	
	TweenLite.ticker.addEventListener("tick", update);
	// RAF
	//requestID = window.requestAnimationFrame(update);
}
var objDx = 30;
var objDy = 20;

function setStartPos()
{
	Button.x = w-100;
	Button.y = h/2;
	Button.clickable = false;
	
	logoImg.x = 100;
	logoImg.y = h/2;
	logoImg.scale = 1;
	logoImg.alpha = 0;
	logoImg.center = false;
	
	
	
	bulletPlate.width = 100;
	bulletPlate.height = 20;
	bulletPlate.sx = w;
	bulletPlate.sy = h/2;
	bulletPlate.x = bulletPlate.sx+140;
	bulletPlate.y = bulletPlate.sy;
	bulletPlate.scale = 1.2;
	bulletPlate.alpha = 1;
	bulletPlate.textY = 0;
	bulletPlate.textAlpha = 0;
	
	textPlate.width = 300;
	textPlate.height = 80;
	textPlate.sx = 16;
	textPlate.sy = h/2;
	textPlate.x = textPlate.sx;
	textPlate.y = textPlate.sy;
	textPlate.scale = 1;
	textPlate.alpha = 1;
	
	deerImg.mc.scale = 1;
	deerImg.mc.x = 20+objDx;
	deerImg.mc.y = 20+objDy;
	deerImg.ang = 0;
	deerImg.dAng = 0;
	deerImg.speed = 0;
	
	bgImg.x = 0;
	bgImg.y = 0;
	bgImg.scale = 1;	
	
	houseImg.x = -140+objDx;
	houseImg.y = 5+objDy;
	houseImg.scale = 1;
	houseImg.alpha = 1;
	
	aimImg.x = 0;
	aimImg.y = 0;
	aimImg.scale = 1;
	aimImg.alpha = 0;
	aimImg.ang = 0;	
	
	tankImg.x = -120+objDx;
	tankImg.sy = 30+objDy;
	tankImg.y = tankImg.sy;
	tankImg.scale = 0.7;
	tankImg.alpha = 1;
	
	tankImg.offsetX = -140;
	tankImg.offsetY = -80;
	tankImg.rotation = 0;
	tankImg.ang = 0;
	tankImg.expBullArray = new Array();
	tankImg.expArray = new Array();
	tankImg.destroy = false;
	tankImg.dustTimer = 0;	tankImg.dustEnable = false;
	
	cam.x = w/2;
	cam.y = h/2-30;
	cam.dx = 0;
	cam.dy = 0;
	cam.amp =0;
	cam.ang =0;
	cam.sScale = 1;
	cam.scale = cam.sScale;
	cam.rotate = 0;
	
	
	
	Pattern.tPattern.alpha = 0;
	Pattern.bPattern.alpha = 0;
	
	setStrings();
	showText(textPlate.frame1);
	animate();
}

/* -------------------------------   UPDATE BANNER   ---------------------------------*/
function update()
{
	var ctx = canvasMain.getContext("2d");
	ctx.save();
		ctx.translate(cam.x+cam.dx, cam.y+cam.dy);
		ctx.scale(cam.scale, cam.scale);
		ctx.rotate(cam.rotate);
		ctx.drawImage(bgImg.pic,-bgImg.pic.width/2,-bgImg.pic.height/2);
		
		deerImg.ang+=deerImg.dAng;
		deerImg.dAng = 0.01;
		
		switch (frame)
		{
			case 0:
				deerImg.mc.x = Math.sin(deerImg.ang)*(30+(Math.cos(deerImg.ang*1.4)+1)*20);
							
			break
			case 1:
				if(deerImg.mc.x > -100)
				{
					deerImg.mc.x += -1.4;		
				}
			break
		}
		
		if(frame < 2)
		{
			
			if(overFl == false)
			{
				autoPlayTimer++;
			}
			if(autoPlayTimer == 700 && frame == 0)
			{
				tankAnim1();		
			}	
			if(autoPlayTimer == 900)
			{
				autoPlayTimer = 0;
				shoot();				
			}	
		deerImg.mc.timeline.position = deerImg.mc.x*1.9%54;
		if(deerImg.mc.timeline.position<0){deerImg.mc.timeline.position+=54;}	
		deerImg.mc.gotoAndStop(deerImg.mc.timeline.position);
		ctx.save();
			ctx.translate(deerImg.mc.x+objDx,deerImg.mc.y);
			ctx.scale(deerImg.mc.scale, deerImg.mc.scale);
			deerImg.mc.draw(ctx);
		ctx.restore();				
		}
		
		drawTank(ctx);
		drawShape(ctx,houseImg,houseImg.shape);
		
		if(frame == 2)
		{
			drawTank(ctx);					
		}		
		drawBullet(ctx);		
	ctx.restore();
	
	
	drawBulletPlate(ctx);
	drawTextPlate(ctx);
	if(interactiveEnable == true)
	{
		aimImg.ang+=0.04;
		if(overFl == true)
		{
			aimImg.x += (mousePos.x-aimImg.x)/5;
			aimImg.y += (mousePos.y-aimImg.y)/5;
		}
		else
		{
			aimImg.x += (w/2+Math.sin(aimImg.ang)*30-aimImg.x+10)/6;
			aimImg.y += (h/2+Math.cos(aimImg.ang)*20-aimImg.y+20)/6;
		}
		ctx.shadowColor = "black";
		ctx.shadowBlur = 4;
		drawShape(ctx, aimImg, aimImg.shape);
		ctx.shadowColor = "transparent";		
	}
	if(frame == 2)
	{
		drawPattern(ctx);
		logoImg.alpha = trueAlpha(logoImg.alpha);
		drawLogo(ctx, logoImg);
		cam.amp += (0-cam.amp)/40;
		cam.ang += 0.3;
		cam.dy = Math.sin(cam.ang)*cam.amp;		
	}
	
	
	// RAF
	//requestID = window.requestAnimationFrame(update);
}

function drawBulletPlate(ctx)
{
	ctx.save();
		ctx.translate(bulletPlate.x, bulletPlate.y);
		ctx.scale(bulletPlate.scale, bulletPlate.scale);
		var grd = ctx.createLinearGradient(-100, 0, 0, 0);
		grd.addColorStop(0, "rgba(255, 0, 0, 0)");
		grd.addColorStop(0.3, "rgba(255, 0, 0, "+trueAlpha(bulletPlate.alpha)+")");
		grd.addColorStop(0.8, "rgba(255, 0, 0, "+trueAlpha(bulletPlate.alpha)+")");
		grd.addColorStop(1, "rgba(200, 0, 0, "+trueAlpha(bulletPlate.alpha)+")");			
		ctx.fillStyle = grd;			
		
		
		ctx.shadowColor = "rgba(0,0,0,1)";
		ctx.shadowBlur = 10; 	
		ctx.fillRect(-100, -10, 140, 20);		
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		
		ctx.font = 'bold 23pt '+font;
		ctx.fillStyle = "rgba(255, 255, 255, "+trueAlpha(bulletPlate.textAlpha)+")";
		ctx.fillText("x4", -24, -3+bulletPlate.textY-30);		
		ctx.fillStyle = "rgba(255, 255, 255, "+trueAlpha(1-bulletPlate.textAlpha)+")";
		ctx.fillText("x5", -24, -3+bulletPlate.textY);
		ctx.shadowColor = "transparent";
		
		ctx.drawImage(bulletIcon.pic, -76, -28)
		
		
	ctx.restore();	
}

/* -------------------------------   ANIMATE BANNER   ---------------------------------*/
function animate()
{
	TweenLite.delayedCall(3, frame1);
	TweenLite.to(textPlate, 0.5, { y:textPlate.sy, ease:Back.easeOut});
}
function frame1()
{
	
	interactiveEnable = true;
	TweenLite.to(aimImg, 0.2, { alpha:1, ease:Sine.easeOut});
	
	TweenLite.to(bulletPlate, 0.5, { x:bulletPlate.sx, ease:Back.easeOut});
	showText(textPlate.frame2);
	canvasInteractive.style.cursor = 'none';	
	if(overFl == true)
	{
		mOver();
	}
	
//	TweenLite.delayedCall(2.8,showText,[textPlate.frame1,2.2]);
	
	
}

function frame2()
{
	canvasInteractive.style.cursor = 'pointer';
	TweenLite.killDelayedCallsTo(addExpBull);
	tankImg.destroy = true;				
	
	TweenLite.to(darkerImg, 1, {delay:1.4, alpha: 1, ease:Power1.easeOut, onUpdate:drawDarker, onUpdateParams:[darkerImg], onComplete:function()
	{
		TweenLite.to(darkerImg, 1.2, {alpha: 0, ease:Power1.easeIn, onUpdate:drawDarker, onUpdateParams:[darkerImg]});
		frame = 2;
		deerImg.mc.x = -1000;	
		
		houseImg.scale = 0.84;
		houseImg.y = 24;
		houseImg.x += 0;
		
		cam.y = h/2-60;
		
		textPlate.y = -150;
		bulletPlate.x = w+140;
		
		tankImg.expArray.splice(0, tankImg.expArray.length)
		
		tankImg.y = tankImg.sy+20;
		tankImg.x = -200;
		tankImg.body.childrens = new Array();
		tankImg.body.childrens.push(tankImg.bush1);
		tankImg.scale = 1;
		tankImg.ang = -Math.PI/2;
		tankImg.dustEnable = true;
		TweenLite.to(tankImg, 2.7, { x:0, y:tankImg.sy+30, ease:Power2.easeOut});
		TweenLite.to(tankImg, 2, {delay:0.1, ang:Math.PI,  ease:Power1.easeOut});
		TweenLite.delayedCall(2.2, function(){tankImg.dustEnable = false;});
		//TweenLite.to(tankImg, 0.8, {delay:1.2, ang:Math.PI/2*3,  ease:Sine.easeInOut});
		
		TweenLite.to(Pattern.bPattern, 2, {delay:2.3, alpha:1, ease:Sine.easeOut});
		TweenLite.to(Pattern.tPattern, 2, {delay:2.3, alpha:1, ease:Sine.easeOut});
		
		logoImg.alpha = 0;
		logoImg.scale = 3;
		TweenLite.to(logoImg, 0.4, {delay:2, alpha:1, scale:1, ease:Power2.easeOut});
		TweenLite.delayedCall(2.3, camScale);			
		TweenLite.delayedCall(3, showButton);	
		TweenLite.delayedCall(3.6, showAgainPlate);	
		
		TweenLite.delayedCall(12,restartBanner);
		cam.amp = 8;
		//TweenLite.to(cam, 4, {  amp:0, ease:Power2.easeOut});
		
	}});
	
}

function tankAnim1()
{
	tankImg.ang = -Math.PI/2;
	TweenLite.to(tankImg, 1.3, { x:20+objDx, y:tankImg.sy+10, ease:Sine.easeOut});
	TweenLite.to(tankImg, 1, { ang:Math.PI/2,  ease:Sine.easeOut, delay:0.6});
	frame = 1;	
	TweenLite.delayedCall(2, addExpBull);	
	TweenLite.delayedCall(0.9, showText, [textPlate.frame3]);
	TweenLite.delayedCall(1.6, function(){tankImg.dustEnable = false;});	
	
	
	
}

function addExpBull()
{
	
	addExp(20+objDx, 10+objDy, 0.7, tankImg.expBullArray);
	TweenLite.delayedCall(0.05, addExp, [20+objDx, 10+objDy, 0.4, tankImg.expBullArray]);
	TweenLite.delayedCall(4, addExpBull);	
	TweenLite.delayedCall(0.05, camShake);		
}

function camShake()
{
	//cam.y = 4;
	TweenLite.killTweensOf(cam);	
	TweenLite.to(cam, 0.05, {dy: 10, rotate:-0.02,  ease:Power2.easeOut});
	TweenLite.to(cam, 1.4, {delay:0.05, dy: 0,  ease:Elastic.easeOut});
	TweenLite.to(cam, 2, {delay:0.05, rotate:0,  ease:Elastic.easeOut});	
}

function camScale()
{
	//cam.y = 4;
	TweenLite.killTweensOf(cam);	
	TweenLite.to(cam, 0.04, {scale: cam.sScale*0.97, ease:Power2.easeOut});
	TweenLite.to(cam, 1, {delay:0.04, scale: cam.sScale*1,  ease:Elastic.easeOut});	
}

function restartBanner ()
{
	hideAgainPlate ();
	hideButton ();
	TweenLite.to(darkerImg, 1.4, {alpha: 1, ease:Power1.easeIn, onUpdate:drawDarker, onUpdateParams:[darkerImg], onComplete: function()
	{
		darkerImg.alpha = 1;			
		TweenLite.to(darkerImg, 1.4, {alpha: 0, ease:Power1.easeOut, onUpdate:drawDarker, onUpdateParams:[darkerImg]});				
		canvasInteractive.style.cursor = 'default';		
		autoPlayTimer = 0;
		frame = 0;
		interactiveEnable = false;
		isInteractive = false;
		tankImg.body.childrens = new Array();
		tankImg.body.childrens.push(tankImg.bush2);
		setStartPos();
	}});
}

/* -------------------------------------------------------------------------------------
----------------------------------      SERVICE      ----------------------------------- 
--------------------------------------------------------------------------------------*/

function drawShape(ctx, parent, shape)
{
	if(parent.alpha >0)
	{	
		ctx.save();
			ctx.translate(parent.x,parent.y);					
			if(parent.hasOwnProperty('scaleX'))
			{
				ctx.scale(parent.scaleX,parent.scaleY);
			}
			else
			{
				ctx.scale(parent.scale,parent.scale);
			}
			if(shape == tankImg.track)
			{
				var g = ctx.createRadialGradient(0, 0, 5, 0, 0, 100);
				g.addColorStop(0,   "rgba(0, 0, 0, 1)");
				g.addColorStop(1, "rgba(0, 0, 0, 0)");
				ctx.fillStyle = g;	
				ctx.save();
				ctx.translate(0,30)
				ctx.scale(2.2,0.2);
				ctx.fillRect(-100,-100,200,200)
				ctx.restore();				
			}
			ctx.rotate(parent.rotation);
			ctx.translate(parent.offsetX,parent.offsetY);
			ctx.globalAlpha = parent.alpha;			
			ctx.translate(shape.offsetX,shape.offsetY);	
			ctx.rotate(shape.rotation);
			ctx.translate(shape.x,shape.y);			
			shape.draw(ctx);
			
			if(shape.childrens)
			{
				for(var i=0;i<shape.childrens.length;i++)			
				{
					ctx.save();
					ctx.translate(shape.childrens[i].offsetX,shape.childrens[i].offsetY)
					shape.childrens[i].draw(ctx);
					ctx.restore();
					//drawShape(ctx,parent,shape.childrens[i]);
				}
			}
		ctx.restore();	
	}
}

function trueAlpha (alpha)
{
	if(alpha>1)
	{
		return 1;
	}
	else if(alpha<0)
	{
		return 0;
	}
	else
	{
		return Math.round(alpha*100)/100;
	}
}

function mOver()
{
	overFl = true;
	autoPlayTimer = 0;
	if(interactiveEnable == true && frame == 0)
	{
		//deerImg.mc.timeline.position = 90;
		//deerImg.mc.dX = deerImg.mc.x;		
		tankAnim1();
	}
}

function mOut()
{
	overFl = false;		
	
}

function mMove(evt)
{	
	mousePos = getMousePos(evt);
	if(overFl == false)
	{
		mOver();
	}
	
}
function shoot()
{
	addBullet(0,h/2,aimImg.x-cam.x, aimImg.y-cam.y, 0, aimImg.y-cam.y-20);
	TweenLite.to(bulletPlate, 0.4, {  textY:30, textAlpha:1, ease:Back.easeOut});
	interactiveEnable = false;
}

// MOUSE CLICK
function mClick(e)
{
	// some if / else for interactive banner
	//setURL();
	if(interactiveEnable == true)
	{
		shoot();
	}
	if(frame == 2 && againPlate.isOver == false)
	{
		setURL();
	}
	
}

// GO TO URL
function setURL()
{
	// GOOGLE
	ExitApi.exit();

	/*// CPM STAR
	var regex = new RegExp("[\?&]clickTAG=([^&#]*)");
	var results = regex.exec(location.search);
	var clickTAG = results === null?"":decodeURIComponent(results[1].replace(/\+/g," "));
	window.open(clickTAG, "_blank");*/

	/*// CITY ADS
	window.open(document.links[0].href, '_blank');*/

	/*// YANDEX
	window.open(getUrlParam('link1'), '_blank');*/
}

// GET URL CLICKTAG FOR YANDEX
function getUrlParam(name) 
{
	  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	  results = regex.exec(location.search);
	  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// GET MOUSE COORDINATES
function getMousePos(e)
{
   var rect = canvasInteractive.getBoundingClientRect();
   return {
	  x: e.clientX - rect.left,
	  y: e.clientY - rect.top
   };
}

// LOADING IMAGES
function loadImages(imagesToBeLoaded, drawCallback)
{
	var imagesLoaded = {};
	var loadedImages = 0;
	var numberOfImagesToLoad = 0;
	//
	for(var name in imagesToBeLoaded)
	{
		numberOfImagesToLoad++;
	}
	
	for(var name in imagesToBeLoaded)
	{
		imagesLoaded[name] = new Image();
		imagesLoaded[name].crossOrigin='Anonymous';
		imagesLoaded[name].onload = function()
		{
			if(++loadedImages >= numberOfImagesToLoad)
			{
				drawCallback(imagesLoaded);
			}
		};
		//
		imagesLoaded[name].src = imagesToBeLoaded[name];
	}
}

// DISABLING BUG IN CHROME TAB
function canvasWidthChange()
{              
    canvasMain.width = w + 1;
    canvasMain.width = w;      
}

// CLEAR ANY CANVAS
function clearCanvas(canv)
{
	var ctx = canv.getContext("2d");
	//
	ctx.clearRect(0, 0, w, h);
}

// CLEAR ALL ACTIVE CANVASES
function clearAll()
{
	clearCanvas(canvasMain);
}

// CONVERT DEGREES TO RADIANS
function radian(a)
{
	return a * Math.PI / 180;
}


/* -------------------------------------------------------------------------------------
----------------------------------      ACTIONS      ----------------------------------- 
--------------------------------------------------------------------------------------*/

//
window.onLoad = loadFonts();