/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/
function drawTank(ctx)
{
	drawShape(ctx,tankImg,tankImg.track);
	
	tankImg.body.y = Math.sin(tankImg.ang*2)*2+2;
	tankImg.body.rotation = Math.sin(tankImg.ang*2)*0.02+0.01;
	tankImg.body.rotation *=0.6;
	tankImg.track.rotation = Math.cos(tankImg.ang*3)*0.0025+0.0012;
	drawShape(ctx,tankImg,tankImg.body);
	drawExp(ctx, tankImg.expBullArray);
	drawShipExp(ctx, tankImg.expArray);	
	tankImg.dustTimer++;
	if(tankImg.dustTimer%4 == 0 && tankImg.dustEnable == true)
	{
		addDust(-60+Math.random()*150,30,1);
	}	
	ctx.save();
		ctx.translate(tankImg.x, tankImg.y);
		ctx.scale(tankImg.scale, tankImg.scale);
		drawDust(ctx);	
	ctx.restore();
	
}