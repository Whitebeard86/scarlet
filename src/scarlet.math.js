var Scarlet.Math = function() {
	
	Scarlet.Math.PIOver2 = Math.PI / 2;
	Scarlet.Math.PIOver4 = Math.PI / 4;
	Scarlet.Math.TwoPI = Math.PI * 2;

};

Scarlet.Math.distance2 = function(x1, y1, x2, y2) {
	var xs = 0;
	var ys = 0;

	xs = x2 - x1;
	xs = xs * xs;
	ys = y2 - y1;
	ys = ys * ys;

	return Math.sqrt(xs + ys);
}

