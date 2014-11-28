var Scarlet.Game = function () {

	this.gl = null;
	this.width = 0;
	this.height = 0;
	this.target = null;

	this.loadFunc = null;
	this.updateFunc = null;
	this.drawFunc = null;

};


Scarlet.Game.prototype.initialize = function (width, height, target, assign) {
	this.width = width || 0;
	this.height = height || 0;
	this.canvas = document.getElementById(target);

	try {
		// Try to grab the standard context. If it fails, fallback to experimental.
		this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
	} catch (e) {}

	if (!gl) {
		gl = null;
		console.log("unable to initialize WEBGL context");
		return false;
	}

	if (typeof assign !== 'undefined') {
		if (typeof assign.load !== 'undefined')
			this.loadFunc = assign.load;
		if (typeof assign.update !== 'undefined')
			this.updateFunc = assign.update;
		if (typeof assign.draw !== 'undefined')
			this.drawFunc = assign.draw;
	}
	
	return true;
};

Scarlet.Game.prototype.start = function () {
	var self = this;
	
	/* load function */
	if (typeof this.loadFunc !== "undefined") {
		this.loadFunc();
	}
}