/* -------------------------------------------------------------------------------------
--------------                        WARGAMING.NET                       --------------
----------------------------------------------------------------------------------------
--------------                 © 2016 ALL RIGHTS RESERVED                 --------------
--------------------------------------------------------------------------------------*/
function deerInit (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.dBody = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dHandLB = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dHandLT = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dHandRB = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dHandRT = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dHead = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dLegLB = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dLegLT = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dLegRT = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dNeck = function() {
	this.spriteSheet = ss["deer_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.DeerNeck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dNeck();
	this.instance.setTransform(-2.4,-11.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-11.1,16,25);


(lib.DeerLegRTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dLegRT();
	this.instance.setTransform(-8.6,-11.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-13.7,13,14.7);


(lib.DeerLegRBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHandRB();
	this.instance.setTransform(-8,-6.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-6.3,15.2,19.3);


(lib.DeerLegLTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dLegLT();
	this.instance.setTransform(-6.4,-21,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-21,14,24);


(lib.DeerLegLBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dLegLB();
	this.instance.setTransform(-5.2,-1.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-1.9,8.9,20.4);


(lib.DeerHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHead();
	this.instance.setTransform(-14.5,-35.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-35.5,46.5,41);


(lib.DeerHandRTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHandRT();
	this.instance.setTransform(-5.3,-12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-14.2,10.8,18.3);


(lib.DeerHandRBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHandLB();
	this.instance.setTransform(-2.7,-0.1,0.421,0.41,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.1,7.3,14);


(lib.DeerHandLTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHandLT();
	this.instance.setTransform(-7.1,-17.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-19.7,16.6,28.5);


(lib.DeerHandLBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dHandLB();
	this.instance.setTransform(-2.5,4.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,4.1,8.7,14.5);


(lib.DeerBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dBody();
	this.instance.setTransform(-29,-6.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-6.5,41,24.5);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.698)","rgba(0,0,0,0)"],[0.204,0.992],0,0,0,0,0,4.9).s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.Shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.grad();
	this.instance.setTransform(0.8,0.2,7.6,0.414);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-1.8,76,4.1);


(lib.Deer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Deer Leg L Top
	this.instance = new lib.DeerLegLTop();
	this.instance.setTransform(-24.6,5.8,1,1,14.2,0,0,0.4,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.87,rotation:-3.2,x:-22.6,y:4.8},10).to({regX:0.6,scaleX:1.08,scaleY:1.04,rotation:-27.8,x:-22,y:5.6},10).to({regY:-12.8,scaleX:1.06,scaleY:1.03,rotation:-23.1,x:-22.5,y:5.9},5).to({regX:0.4,scaleX:1,scaleY:0.99,rotation:-4.2,x:-22.6,y:3.7},10).to({regX:0.6,regY:-13,scaleY:0.96,rotation:12.2,x:-23.6,y:4},10).to({regX:0.4,regY:-12.7,scaleY:1,rotation:14.2,x:-24.6,y:5.8},10).to({regX:0.5,regY:-13,scaleX:1,scaleY:0.89,rotation:10.3,x:-22.3,y:3.4},6).to({regX:0.6,regY:-12.8,scaleX:1.08,scaleY:0.96,rotation:-7.8,x:-22.5,y:4.1},17).to({regY:-12.7,scaleX:1.07,scaleY:1.03,rotation:-26.3,x:-22,y:5.7},7).to({regX:0.4,regY:-12.8,scaleX:1,scaleY:0.99,rotation:-4.2,x:-22.6,y:3.7},3).to({regX:0.5,regY:-13,scaleY:0.96,rotation:30.3,x:-22.7,y:3.3},5).to({regY:-13.1,scaleX:1,scaleY:0.96,rotation:29.3},16,cjs.Ease.get(-1)).to({regY:-13,scaleX:1,scaleY:0.89,rotation:10.3,x:-22.3,y:3.4},7,cjs.Ease.get(-0.3)).to({regY:-12.7,scaleX:1.07,scaleY:1.04,rotation:-27.3,x:-22.1,y:5.7},10).wait(1).to({regX:0.6,regY:-12.8,scaleX:1.06,scaleY:1.03,rotation:-23.1,x:-22.5,y:5.9},11).wait(1));

	// Deer Leg L Bot
	this.instance_1 = new lib.DeerLegLBot();
	this.instance_1.setTransform(-30.6,17,1,1.087,5.4,0,0,-1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-1.1,scaleY:0.88,rotation:-36.9,x:-25.5,y:16.3},10).to({scaleY:1.05,rotation:-39.4,x:-19.8,y:20.1},10).to({regX:-1.2,scaleX:1,scaleY:0.97,rotation:-36.1,x:-21,y:21},5).to({regX:-1.1,scaleX:1,scaleY:1.03,rotation:-23,x:-25,y:17.8},10).to({regX:-1,regY:-0.3,scaleY:1.12,rotation:-6.7,x:-30.6,y:16.7},10).to({regY:-0.4,scaleY:1.09,rotation:5.4,y:17},10).to({regY:-0.1,scaleX:1,scaleY:0.97,rotation:-61.5,x:-29.2,y:14.4},6).to({regX:-1.2,regY:-0.4,scaleX:1,scaleY:1.05,rotation:-86,x:-26.4,y:19.1},17).to({scaleX:1,scaleY:1.02,rotation:-65.7,x:-20.2,y:20.4},7).to({regX:-1.1,scaleX:1,scaleY:1.03,rotation:-23,x:-25,y:17.8},3).to({regX:-1,regY:-0.3,scaleY:1.12,rotation:18.9,x:-32.5,y:12},5).to({regX:-0.9,regY:-0.2,scaleX:1,scaleY:1.09,rotation:10.8,x:-31.8,y:12.4},16,cjs.Ease.get(-1)).to({regX:-1,regY:-0.1,scaleY:0.97,rotation:-61.5,x:-29.2,y:14.4},7,cjs.Ease.get(-0.3)).to({regX:-1.2,regY:-0.4,scaleX:1,scaleY:1.04,rotation:-75.7,x:-20,y:20.2},10).wait(1).to({scaleX:1,scaleY:0.97,rotation:-36.1,x:-21,y:21},11).wait(1));

	// Deer Hand L Top
	this.instance_2 = new lib.DeerHandLTop();
	this.instance_2.setTransform(-4.1,3.1,1,0.96,-12.4,0,0,0.6,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.95,rotation:10,y:1.7},10).to({regY:-14.5,scaleY:0.8,rotation:20.7,x:-3.5,y:3.9},10).to({scaleY:0.79,rotation:-19.9,x:-5,y:3.5},5).to({scaleY:0.89,rotation:-24.1,x:-4.5},10).to({regY:-14.4,scaleY:0.95,rotation:-14.9,x:-4.6,y:1.4},10).to({regY:-14.7,scaleY:0.96,rotation:-12.4,x:-4.1,y:3.1},10).to({regY:-14.5,scaleX:1,scaleY:0.8,rotation:2.5,x:-3.9,y:2.8},6).to({scaleY:0.71,rotation:-40.3,x:-4.2,y:3.1},6).to({regY:-14.7,scaleX:1,scaleY:0.96,rotation:-59.4,x:-3.7,y:5.2},11).to({regX:0.7,regY:-14.6,scaleX:1,scaleY:0.96,rotation:-47.9,x:-3.2,y:5.6},22).to({regX:0.6,regY:-14.7,scaleX:1,scaleY:0.95,rotation:10,x:-4.1,y:1.7},6).to({regY:-14.5,scaleY:0.8,rotation:20.7,x:-3.5,y:3.9},6).to({scaleX:1,scaleY:0.8,rotation:2.5,x:-3.9,y:2.8},4).to({scaleX:1,scaleY:0.79,rotation:-33.9,x:-4.7,y:0.3},8).to({regY:-14.6,scaleX:1,scaleY:0.79,rotation:-47.7,x:-5,y:-0.6},2).to({_off:true},1).wait(12));

	// Deer Hand L Bot
	this.instance_3 = new lib.DeerHandLBot();
	this.instance_3.setTransform(2,23.5,1,1,-4.9,0,0,1.1,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:5.6,rotation:3.5,x:-6.2,y:22.8},10).to({regX:1.2,regY:5.5,rotation:45.8,x:-7.3,y:20.2},10).to({rotation:19.5,x:2.7,y:18.6},5).to({scaleY:1.3,rotation:-24.7,x:5,y:20.2},10).to({regY:5.4,rotation:-21.9,x:2.2,y:20.3},10).to({regX:1.1,regY:5.7,scaleY:1,rotation:-4.9,x:2,y:23.5},10).to({regX:1.2,regY:5.5,scaleX:1,scaleY:1,rotation:59.4,x:-2.8,y:17.6},6).to({regX:1.1,regY:5.7,scaleX:1,scaleY:1,rotation:52.2,x:6.5,y:14.6},6).to({regX:1,rotation:-38.4,x:16.2,y:15.7},11).to({regY:5.6,scaleX:1,scaleY:1,rotation:-31.3,x:13.9,y:18},22).to({regX:1.1,scaleX:1,scaleY:1,rotation:3.5,x:-6.2,y:22.8},6).to({regX:1.2,regY:5.5,rotation:65.7,x:-7.3,y:20.3},6).to({scaleX:1,scaleY:1,rotation:59.4,x:-2.8,y:17.6},4).to({scaleX:1,scaleY:1,rotation:43.5,x:8.3,y:10.6},10).to({_off:true},1).wait(12));

	// Deer Head
	this.instance_4 = new lib.DeerHead();
	this.instance_4.setTransform(8.6,0.8,1,1,0,0,0,9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-0.4},10).to({y:2},10).to({y:-0.4},15).to({y:2},10).to({y:0.8},16).to({_off:true},56).wait(22));

	// Deer Neck
	this.instance_5 = new lib.DeerNeck();
	this.instance_5.setTransform(4.8,2.9,1,1,0,0,0,4.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:2.3},10).to({y:3.5},10).to({y:2.3},15).to({y:3.5},10).to({y:2.9},16).to({_off:true},56).wait(22));

	// Deer Body
	this.instance_6 = new lib.DeerBody();
	this.instance_6.setTransform(-6.6,-0.1,1,1,0,0,0,-6.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-0.2,rotation:-2,y:-0.7},10).to({regY:-0.1,rotation:3,y:-0.1},10).to({regY:-0.2,rotation:-2,y:-0.7},15).to({regY:-0.1,rotation:3,y:-0.1},10).to({rotation:0},16).to({_off:true},56).wait(22));

	// Deer Hand R Top
	this.instance_7 = new lib.DeerHandRTop();
	this.instance_7.setTransform(-0.6,11.8,1,1,-34,0,0,-1.6,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-1.7,regY:-8.9,rotation:-28.4,x:0.9,y:11.5},10).to({regY:-9,scaleY:0.89,rotation:-22.4,x:-0.1,y:12.5},10).to({scaleY:1.01,rotation:15.1,x:1,y:11.5},15).to({rotation:15.1,x:-0.1,y:11.6},10).to({regX:-1.6,regY:-9.1,scaleY:1,rotation:-34,x:-0.6,y:11.8},10).to({rotation:-28.9,x:0.9,y:7.3},6).to({regX:-1.7,regY:-8.9,scaleY:0.88,rotation:-76.9,x:2.4,y:11.4},14).to({scaleY:0.89,rotation:-58.4,x:3.5,y:11.1},8).to({regY:-9,scaleY:1.01,rotation:-77.5,x:4,y:11.7},8).to({y:10.1},12).to({rotation:15.1,x:0.2,y:11.5},6).to({regX:-1.6,regY:-9.1,scaleY:1,rotation:-28.9,x:0.9,y:7.3},7).to({_off:true},1).wait(22));

	// Deer Hand R Bot
	this.instance_8 = new lib.DeerHandRBot();
	this.instance_8.setTransform(5.8,21.3,1,1.095,45.7,0,0,-1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:1.1,scaleY:1.25,rotation:-23.3,x:6.2,y:22.1},10).to({regY:1,scaleY:1.1,rotation:-21.6,x:3.3,y:22.9},10).to({scaleY:0.99,rotation:5.1,x:-3,y:23},15).to({scaleY:0.88,rotation:21.3,x:-3.9,y:22.9},10).to({scaleY:1.1,rotation:45.7,x:5.8,y:21.3},10).to({regX:-1.1,rotation:61.9,x:6,y:17},6).to({regX:-1.4,regY:1.1,scaleY:1.25,rotation:-2.5,x:10.1,y:15.8},14).to({regX:-1.1,scaleY:1.1,rotation:-55.3,x:13.9,y:17.4},8).to({regX:-1.3,regY:1,scaleY:0.99,rotation:-50.9,x:15.3,y:15.3},8).to({regX:-1.2,y:14.2},12).to({scaleY:0.88,rotation:21.3,x:-4.1,y:23.2},6).to({regX:-1.1,scaleY:1.1,rotation:61.9,x:6,y:17},7).to({_off:true},1).wait(22));

	// Deer Leg R Top
	this.instance_9 = new lib.DeerLegRTop();
	this.instance_9.setTransform(-13.5,13,1,1,-7.7,0,0,-0.8,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-3.1,regY:-5.8,scaleY:1,rotation:-7.5,x:-15.5,y:15.7},0).wait(1).to({scaleY:1.01,rotation:-7.3,x:-15.8,y:15.6},0).wait(1).to({scaleY:1.02,rotation:-6.9,x:-16.3,y:15.5},0).wait(1).to({scaleY:1.03,rotation:-6.5,x:-16.7,y:15.4},0).wait(1).to({scaleY:1.04,rotation:-5.9,x:-17.3,y:15.2},0).wait(1).to({scaleY:1.05,rotation:-5.3,x:-18,y:15},0).wait(1).to({scaleY:1.07,rotation:-4.6,x:-18.9,y:14.8},0).wait(1).to({scaleY:1.09,rotation:-3.7,x:-19.8,y:14.5},0).wait(1).to({scaleY:1.11,rotation:-2.8,x:-20.8,y:14.3},0).wait(1).to({regX:-0.7,regY:-8.3,scaleY:1.13,rotation:-1.8,x:-19.7,y:11.1},0).wait(1).to({regX:-3.1,regY:-5.8,scaleY:1.15,rotation:-0.2,x:-22.4,y:13.9},0).wait(1).to({scaleY:1.17,rotation:1.4,x:-22.9},0).wait(1).to({scaleY:1.2,rotation:3.1,x:-23.4,y:13.8},0).wait(1).to({scaleY:1.22,rotation:4.7,x:-23.8},0).wait(1).to({scaleY:1.24,rotation:6.4,x:-24.3,y:13.7},0).wait(1).to({scaleY:1.27,rotation:8.2,x:-24.8,y:13.6},0).wait(1).to({scaleY:1.29,rotation:9.9,x:-25.3,y:13.5},0).wait(1).to({scaleY:1.32,rotation:11.7,x:-25.8,y:13.4},0).wait(1).to({scaleY:1.34,rotation:13.5,x:-26.4,y:13.3},0).wait(1).to({regX:-0.8,regY:-8.3,scaleY:1.36,rotation:15.4,x:-23.7,y:10.6},0).to({scaleY:1.29,rotation:28.1,x:-24.7,y:9.9},5).to({regY:-8.2,rotation:21.5,x:-18.5,y:8.7},10).to({scaleY:1.52,rotation:-33.5,x:-15.8,y:8.8},10).to({regY:-8.3,scaleY:1,rotation:-7.7,x:-13.5,y:13},10).wait(1).to({regX:-3.1,regY:-5.8,scaleY:1.03,rotation:-6,x:-16.4,y:14.9},0).wait(1).to({scaleY:1.07,rotation:-3.8,x:-17.7,y:13.9},0).wait(1).to({scaleY:1.11,rotation:-1.1,x:-19.3,y:12.6},0).wait(1).to({scaleX:1,scaleY:1.16,rotation:2.1,x:-21.1,y:11.1},0).wait(1).to({scaleY:1.23,rotation:5.8,x:-23.4,y:9.4},0).wait(1).to({regX:-0.7,regY:-8.4,scaleY:1.3,rotation:10.1,x:-23.1,y:4.6},0).to({regY:-8.3,scaleX:1,scaleY:1.29,rotation:-10.5,x:-21.4,y:7.2},7).to({regX:-0.8,regY:-8.2,scaleY:1.52,rotation:-33.5,x:-15.8,y:8.8},20).to({regY:-8.3,scaleY:1,rotation:-7.7,x:-13.5,y:13},3).wait(1).to({regX:-3.1,regY:-5.8,scaleY:1.01,rotation:-7.1,x:-16.1,y:15.5},0).wait(1).to({scaleY:1.04,rotation:-5.9,x:-17.3,y:15.2},0).wait(1).to({scaleY:1.08,rotation:-4.2,x:-19.3,y:14.7},0).wait(1).to({regX:-0.7,regY:-8.3,scaleY:1.13,rotation:-1.8,x:-19.7,y:11.1},0).wait(1).to({regX:-3.1,regY:-5.8,scaleY:1.17,rotation:2,x:-22.6,y:13.3},0).wait(1).to({scaleY:1.22,rotation:5.9,x:-23.2,y:12.5},0).wait(1).to({scaleY:1.27,rotation:9.9,x:-23.9,y:11.6},0).wait(1).to({scaleY:1.32,rotation:14.1,x:-24.6,y:10.7},0).wait(1).to({regX:-0.7,regY:-8.3,scaleY:1.36,rotation:18.4,x:-21.9,y:7.3},0).to({regY:-8.4,scaleX:1,scaleY:1.36,rotation:16.3,x:-23.3,y:6.6},13).to({scaleY:1.3,rotation:10.1,x:-23.1,y:4.6},3).to({regY:-8.3,scaleX:1,scaleY:1.21,rotation:2.1,x:-22.7,y:1.7},4).to({_off:true},1).wait(18));

	// Deer Leg R Bot
	this.instance_10 = new lib.DeerLegRBot();
	this.instance_10.setTransform(-17.2,21.3,1,1,0,0,0,-5.4,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-1.8,regY:2.7,rotation:0.3,x:-13.8,y:25.9},0).wait(1).to({rotation:0.8,x:-14.2},0).wait(1).to({rotation:1.4,x:-14.6,y:25.8},0).wait(1).to({rotation:2.2,x:-15.2},0).wait(1).to({rotation:3.2,x:-16,y:25.7},0).wait(1).to({rotation:4.4,x:-16.8,y:25.6},0).wait(1).to({rotation:5.7,x:-17.8,y:25.5},0).wait(1).to({rotation:7.2,x:-19,y:25.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.9,x:-20.2,y:25.3},0).wait(1).to({regX:-5.4,regY:-1.9,rotation:10.8,x:-24.3,y:20},0).wait(1).to({regX:-1.8,regY:2.7,rotation:11.6,x:-22.3,y:25.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.5,x:-23,y:25.1},0).wait(1).to({rotation:13.4,x:-23.8},0).wait(1).to({rotation:14.4,x:-24.5},0).wait(1).to({rotation:15.3,x:-25.3},0).wait(1).to({rotation:16.2,x:-26.1},0).wait(1).to({rotation:17.2,x:-26.8,y:25},0).wait(1).to({rotation:18.2,x:-27.7},0).wait(1).to({rotation:19.2,x:-28.5},0).wait(1).to({regX:-5.3,regY:-1.9,rotation:20.2,x:-31.1,y:19.4},0).to({scaleY:0.92,rotation:41.2,x:-33.6,y:17.5},5).to({regX:-5.5,scaleX:0.88,rotation:0,skewX:1,skewY:-9,x:-27.2,y:16.2},10).to({regY:-2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-12.4,y:21.3},10).to({regX:-5.4,regY:-1.9,x:-17.2},10).wait(1).to({regX:-1.8,regY:2.7,rotation:3.1,x:-15,y:25.4},0).wait(1).to({rotation:7.1,x:-16.9,y:24.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.1,x:-19.2,y:23.8},0).wait(1).to({rotation:18,x:-22.1,y:22.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:24.8,x:-25.4,y:21.3},0).wait(1).to({regX:-5.4,regY:-2,rotation:32.6,x:-29.7,y:13.9},0).to({regX:-5.3,regY:-1.9,scaleX:1,scaleY:0.92,rotation:-46.1,x:-21.1,y:17.6},7).to({regX:-5.5,regY:-2,scaleY:1,rotation:0,x:-12.4,y:21.3},20).to({regX:-5.4,regY:-1.9,x:-17.2},3).wait(1).to({regX:-1.8,regY:2.7,rotation:1.1,x:-14.4,y:25.8},0).wait(1).to({rotation:3.2,x:-16,y:25.7},0).wait(1).to({rotation:6.5,x:-18.4,y:25.5},0).wait(1).to({regX:-5.4,regY:-1.9,scaleX:1,scaleY:1,rotation:10.8,x:-24.3,y:20},0).wait(1).to({regX:-1.8,regY:2.7,scaleX:1,scaleY:1,rotation:16.4,x:-23.6,y:24.3},0).wait(1).to({rotation:22.3,x:-25.6,y:23.3},0).wait(1).to({rotation:28.3,x:-27.8,y:22.3},0).wait(1).to({rotation:34.5,x:-30,y:21.2},0).wait(1).to({regX:-5.3,regY:-1.9,rotation:41,x:-32,y:14.1},0).to({regX:-5.4,regY:-2,scaleX:1,scaleY:1,rotation:50.4,x:-31.4,y:13.9},13).to({scaleX:1,scaleY:1,rotation:32.6,x:-29.7},3).to({regX:-5.3,scaleX:1,scaleY:1,rotation:9,x:-27.5,y:13.8},4).to({_off:true},1).wait(18));

	// Shadow Hands
	this.instance_11 = new lib.Shadow();
	this.instance_11.setTransform(1.5,33.2,0.283,1.401);
	this.instance_11.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.37,alpha:0.602},10).to({scaleX:0.45,x:-0.8,alpha:0.398},10).to({scaleX:0.28,x:1.5,alpha:0.801},5).to({scaleX:0.37,x:4.5,alpha:0.602},10).to({x:1.5},10).to({scaleX:0.28,alpha:0.801},10).wait(6).to({scaleX:0.37,alpha:0.602},10).to({scaleX:0.45,x:-0.8,alpha:0.398},10).to({scaleX:0.28,x:1.5,alpha:0.801},5).to({scaleX:0.37,x:4.5,alpha:0.602},10).to({x:1.5},10).to({scaleX:0.28,alpha:0.801},10).to({_off:true},1).wait(22));

	// Shadow Legs
	this.instance_12 = new lib.Shadow();
	this.instance_12.setTransform(-21.3,32.9,0.564,1.401);
	this.instance_12.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:0.27,alpha:0.801},10).to({scaleX:0.41,alpha:0.602},10).to({scaleX:0.48,x:-24.3,alpha:0.398},5).to({scaleX:0.27,x:-21.3,alpha:0.801},10).to({scaleX:0.56,x:-16.8,alpha:0.398},10).to({x:-21.3},10).wait(6).to({scaleX:0.27,alpha:0.801},10).to({scaleX:0.41,alpha:0.602},10).to({scaleX:0.48,x:-24.3,alpha:0.398},5).to({scaleX:0.27,x:-21.3,alpha:0.801},10).to({scaleX:0.56,x:-16.8,alpha:0.398},10).to({x:-21.3},10).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-34.6,74,71.2);


// stage content:



(lib.deer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Deer();
	this.instance.setTransform(352.8,212,1,1,0,0,0,-2.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(588.1,376.4,73.9,71.2);

}
var lib, images, createjs, ss;