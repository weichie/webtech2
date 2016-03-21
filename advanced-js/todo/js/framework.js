/* ---------------------------------------- FRAMEWORK ---------------------------------- */
var WrapperElement = function(element){
    this.element = element;									
    
    if(element.length > 1){
        this.isArray = true;
    }else{
        this.isArray = false;
    }
}

WrapperElement.prototype.toggleClass = function(className){
	if(this.isArray){
		for(var i = 0; i < this.elements.length; i++){
			if(this.element.class == className){
				this.element[i].removeClass(className);
			}else{
				this.element[i].addClass(className);	
			}
		}
	}else{
		if(this.element.class == className){
			this.element.removeClass(className);
		}else{
			this.element.addClass(className);
		}
	}
	return this;
}

WrapperElement.prototype.addClass = function(className){
	if(this.isArray){
		for(var i = 0; i<this.element.length; i++){
			this.element[i].className += " " + className;
		}
	}else{
		this.element.className = className;
	}
	return this;
}

WrapperElement.prototype.prepend = function(item){
	if(this.isArray){
		for(var i = 0; i < this.elements.length; i++){
			
		}
	}else{

	}
	return this;
}

WrapperElement.prototype.keyup = function(action){
	if(this.isArray){
		for(var i = 0; i<this.element.length; i++){
			this.element[i].addEventListener('keyup', action);
		}
	}else{
		this.element.addEventListener('keyup', action);
	}
	return this;
}

WrapperElement.prototype.click = function(action){
	if(this.isArray){
		for(var i = 0; i < this.elements.length; i++){

		}
	}else{

	}
	return this;
}

WrapperElement.prototype.val = function(value){
	if(this.isArray){
		for(var i = 0; i < this.elements.length; i++){
			value = this.element[i].value;
		}
	}else{
		value = this.element.value;
	}
	return value;
}

var $ = function(selector){
	// check if selector is an object already e.g. by passing 'this' on clicks
	if(typeof(selector) == "object"){
		return new WrapperElement(selector);
	}

    var selectedItems = document.querySelectorAll(selector);
	var newElement = new WrapperElement(selectedItems);
	return newElement;
}