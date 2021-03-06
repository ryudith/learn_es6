'use strict';


(function(root, factory){
	// environment detection
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.returnExports = factory();
	}
}(this, function(){
	// module definition
	let sum = function(x, y){
		return x + y;
	};

	let sub = function(x, y){
		return x - y;
	};

	let math = {
		findSum: function(a, b){
			return sum(a,b)
		},

		findSub: function(a, b){
			return sub(a,b);
		},
	};

	return math;
}));