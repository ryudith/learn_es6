'use strict';



let ref = require('./sample_class.js')
	, self = module.exports = class extends ref {
		constructor (appvar) {
			super(appvar);
		}
		
		showXaddY () {
			super.setVal(10, 5);
			super.printAddVal();
		}
	};