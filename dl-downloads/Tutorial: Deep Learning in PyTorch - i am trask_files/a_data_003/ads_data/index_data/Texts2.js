/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/

var string_1_1 = "THIS SEASON…";
var string_2_1 = "HUNT THE ENEMY";
var string_3_1 = "IN MASSIVE";
var string_3_2 = "IRON TANKS";

function setStrings()
{
	textPlate.textArray = new Array();
	var textObj = {};
	textObj.x = 0;
	textObj.y = 0;
	textObj.alpha = 1;
	textObj.font = 'bold 13pt '+font;	
	textObj.text = string_1_1;
	textPlate.textArray.push(textObj);
	
	textObj = {};
	textObj.x = 0;
	textObj.y = 0;
	textObj.alpha = 1;
	textObj.font = 'bold 13pt '+font;
	textObj.text = string_2_1;
	textPlate.textArray.push(textObj);
	
	textObj = {};
	textObj.x = 0;
	textObj.y = -10;
	textObj.alpha = 1;
	textObj.font = 'bold 13pt '+font;
	textObj.text = string_3_1;
	textPlate.textArray.push(textObj);
	
	textObj = {};
	textObj.x = 0;
	textObj.y = 10;
	textObj.alpha = 1;
	textObj.font = 'bold 13pt '+font;
	textObj.text = string_3_2;
	textPlate.textArray.push(textObj);
	
	textPlate.animText = new Array();
	textPlate.frame1 = [0];
	textPlate.frame2 = [1];
	textPlate.frame3 = [2,3];	
}

