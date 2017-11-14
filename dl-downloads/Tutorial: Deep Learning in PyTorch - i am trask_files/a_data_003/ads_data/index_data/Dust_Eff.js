/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/

var dustArray = new Array();
function addDust(dx,dy,dalpha)
{
	var dustObj = {};
	dustObj.x = dx;
	dustObj.y = dy;
	dustObj.alpha = 0;
	dustObj.scale = 0.4;	
	dustObj.ang =-0.3+Math.random()*0.6;
	dustArray.push(dustObj);
}

function drawDust(ctx)
{	
	var speed = 0.9;	
	for(var i=0;i<dustArray.length;i++)
	{
		ctx.save();
			ctx.translate(dustArray[i].x,dustArray[i].y);
			ctx.scale(dustArray[i].scale,dustArray[i].scale);
			ctx.globalAlpha = dustArray[i].alpha;
			ctx.rotate(dustArray[i].ang);
			ctx.drawImage(dustImg.pic,-30,-21);
		ctx.restore();
		dustArray[i].x-=speed*2;
		dustArray[i].y-=0.5;
		dustArray[i].scale = dustArray[i].scale+(3-dustArray[i].scale)/40;
		if(dustArray[i].scale<2)
		{
			dustArray[i].alpha = dustArray[i].alpha+(speed/3-dustArray[i].alpha)/10;
		}
		else
		{
			dustArray[i].alpha = dustArray[i].alpha+(-0.1-dustArray[i].alpha)/30;
		}
		if(dustArray[i].alpha<0)
		{
			dustArray.splice(i,1);			
			i--;
		}
	}
}