/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/
function drawTextPlate(ctx)
{
	//textPlate.ang+=0.2;
	ctx.save();
	ctx.translate(textPlate.x,textPlate.y);		
		
		var grd = ctx.createLinearGradient(-textPlate.width/2, 0, textPlate.width/2, 0);
		grd.addColorStop(0, "rgba(210, 12, 0, "+trueAlpha(textPlate.alpha*0)+")");
		grd.addColorStop(0.4, "rgba(210, 12, 0, "+trueAlpha(textPlate.alpha)+")");
		grd.addColorStop(0.6, "rgba(210, 12, 0, "+trueAlpha(textPlate.alpha)+")");
		grd.addColorStop(1, "rgba(210, 12, 0, "+trueAlpha(textPlate.alpha*0)+")");		
		ctx.fillStyle = grd;	
		ctx.fillRect(-textPlate.width/2, -textPlate.height/2, textPlate.width, textPlate.height)
		ctx.textBaseline = "middle";
		ctx.textAlign = "left";		
		for(var i =0; i<textPlate.animText.length;i++)
		{
			ctx.fillStyle = "rgba(255, 255, 255, "+trueAlpha(textPlate.animText[i].alpha)+")";			
			ctx.font = textPlate.animText[i].font;	
	
		var scale = 1;
			if(ctx.measureText(textPlate.animText[i].text.replace("$", "").replace("%", "")).width>260)
			{	
				scale = 260/ctx.measureText(textPlate.animText[i].text.replace("$", "").replace("%", "")).width;					
				//ctx.scale(scale,scale);
			}
			
					ctx.save();
		 ctx.translate(0, textPlate.animText[i].y);
		ctx.scale(scale,scale);
			var sr = textPlate.animText[i].text.indexOf("$");
			var fr = textPlate.animText[i].text.indexOf("%");			
			if(sr!=-1)
			{
				ctx.fillText(textPlate.animText[i].text.slice(0,sr), textPlate.animText[i].x, 0);
				var dx = ctx.measureText(textPlate.animText[i].text.slice(0,sr)).width;
				var color =Math.round((Math.sin(textPlate.ang)+1)*90);				
				ctx.fillStyle = "rgba(255, 0, 0, "+trueAlpha(textPlate.animText[i].alpha)+")";
				ctx.fillText(textPlate.animText[i].text.slice(sr+1,fr), textPlate.animText[i].x+dx, 0);
			}
			else
			{
				ctx.fillText(textPlate.animText[i].text, textPlate.animText[i].x, 0);
			}
		ctx.restore();
		}
	ctx.restore();
}


function showText(textArray, delay)
{	

	var i=0;
	delay = delay || 2.5;	
	
	/*
	for(i=0;i<textPlate.textArray.length;i++)
	{
		textPlate.textArray[i].alpha = 0;
	}*/
	for(i=0;i<textPlate.animText.length;i++)
	{		
		TweenLite.killTweensOf(textPlate.animText[i]);		
		TweenLite.to(textPlate.animText[i], 0.3,{delay: (textPlate.animText.length-i)/5, x:textPlate.animText[i].x-60, alpha:0, ease:Circ.easeIn});
	}
	TweenLite.delayedCall(textPlate.animText.length/5+0.3, function (){
	textPlate.animText.splice(0,textPlate.animText.length);
	textPlate.animText = new Array();
	for(i=0;i<textArray.length;i++)
	{
		textPlate.textArray[textArray[i]].alpha=1;		
		var tx = textPlate.textArray[textArray[i]].x;
		TweenLite.from(textPlate.textArray[textArray[i]], 0.4,{delay: i/5, x:tx+60, alpha:0, ease:Circ.easeOut});		
		//TweenLite.to(textPlate.textArray[textArray[i]], 0.4,{delay: (textArray.length-i)/5+delay, x:tx-100, alpha:0, ease:Circ.easeIn});
		textPlate.animText.push(textPlate.textArray[textArray[i]]);
	}	
	
	});
	
}


