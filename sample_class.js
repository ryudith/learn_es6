'use strict';



let self = module.exports = class {
	constructor (appvar) {
		this.appvar = appvar;
		this.x = 0;
		this.y = 0;
	}
	
	setVal (x, y) {
		this.x = x;
		this.y = y;
	}
	
	addVal () {
		return this.x + this.y;
	}
	
	printAddVal () {
		console.log(this.addVal());
	}
}