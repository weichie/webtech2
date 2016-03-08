function Wrapper(el){
	this.el = el;
	this.isArray = el.length > 1 ? true : false;
}

Wrapper.prototype.on = function(event, callback){
	if(this.isArray){
		for(var i = 0; i < this.el.length; i++){
			this.el[i].addEventListener(event, callback);
		}
	}
	//geef alles door naar de volgende wrapper, anders stopt de lus na deze functie
	return this;
}

Wrapper.prototype.css = function(prop, val){
	if(this.isArray){
		for(var i = 0; i < this.el.length; i++){
			this.el[i].style[prop] = val;
		}
	}else{
		this.el[0].style[prop] = val;
	}
	//geef alles door naar de volgende wrapper, anders stopt de lus na deze functie
	return this;
}

var $ = function(sel){
	console.log(typeof(sel));
	var elements = document.querySelectorAll(sel);
	return new Wrapper(elements);
}