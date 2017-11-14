var Pattern = {};
Pattern.tPattern = {};
Pattern.bPattern = {};
Pattern.tPattern.height = 200;
Pattern.bPattern.height = 200;
Pattern.tPattern.alpha = 0;
Pattern.bPattern.alpha = 0;
Pattern.tPattern.fillGradient = [[0,1],[0.6,0.6],[1,0]];
Pattern.tPattern.patternGradient = [[0,0.9],[0.6,0.6],[1,0]];

Pattern.bPattern.fillGradient = [[0,0],[0.4,0.5],[1,1]];
Pattern.bPattern.patternGradient = [[0,0],[0.4,0.5],[1,1]];

function drawPattern(ctx)
{
	ctx.save();
	ctx.globalAlpha = Pattern.tPattern.alpha;
	ctx.drawImage(Pattern.tPattern.pic,0,0);	
	ctx.globalAlpha = Pattern.bPattern.alpha;
	ctx.drawImage(Pattern.bPattern.pic,0,0);	
	ctx.restore();
}

function drawPatternElements()
{
	var i=0;	
	var nCanvas = document.createElement("CANVAS");		
	nCanvas.width = w;
	nCanvas.height = h;	
	ctx = nCanvas.getContext('2d');			
	tpgr = ctx.createLinearGradient(0, 0, Pattern.tPattern.height, 0);
	for(i=0;i<Pattern.tPattern.patternGradient.length;i++)
	{
		tpgr.addColorStop(Pattern.tPattern.patternGradient[i][0], "rgba(0, 0, 0, "+Pattern.tPattern.patternGradient[i][1]+")");
	}		
		
	

	
	iPattern = ctx.createPattern(Pattern.pic, 'repeat');
	ctx.fillStyle = iPattern;
	ctx.fillRect(0,0,w,h);
	ctx.globalCompositeOperation = "source-in";
	ctx.fillStyle = tpgr;
	ctx.fillRect(0,0,w,h);	
	ctx.globalCompositeOperation = "destination-over";
	tpgr = ctx.createLinearGradient(0, 0, Pattern.tPattern.height, 0);
	for(i=0;i<Pattern.tPattern.fillGradient.length;i++)
	{
		tpgr.addColorStop(Pattern.tPattern.fillGradient[i][0], "rgba(0, 0, 0, "+Pattern.tPattern.fillGradient[i][1]+")");
	}
	ctx.fillStyle=tpgr;
	ctx.fillRect(0,0,w,h);
	Pattern.tPattern.pic = nCanvas;	
	
	//////////////////////////////////////////////////////////
	var nCanvas = document.createElement("CANVAS");		
	nCanvas.width = w;
	nCanvas.height = h;	
	ctx = nCanvas.getContext('2d');			
	tpgr = ctx.createLinearGradient(w-Pattern.bPattern.height, 0, w, 0);
	for(i=0;i<Pattern.bPattern.patternGradient.length;i++)
	{
		tpgr.addColorStop(Pattern.bPattern.patternGradient[i][0], "rgba(0, 0, 0, "+Pattern.bPattern.patternGradient[i][1]+")");
	}	
		
	

	
	iPattern = ctx.createPattern(Pattern.pic, 'repeat');
	ctx.fillStyle = iPattern;
	ctx.fillRect(0,0,w,h);
	ctx.globalCompositeOperation = "source-in";
	ctx.fillStyle = tpgr;
	ctx.fillRect(0,0,w,h);	
	ctx.globalCompositeOperation = "destination-over";
	tpgr = ctx.createLinearGradient(w-Pattern.bPattern.height, 0, w, 0);
	for(i=0;i<Pattern.bPattern.fillGradient.length;i++)
	{
		tpgr.addColorStop(Pattern.bPattern.fillGradient[i][0], "rgba(0, 0, 0, "+Pattern.bPattern.fillGradient[i][1]+")");
	}
	ctx.fillStyle=tpgr;
	ctx.fillRect(0,0,w,h);
	Pattern.bPattern.pic = nCanvas;
	
}

