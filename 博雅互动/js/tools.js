function toggleClass(element,className){
	if(hasClass(element,className)){
		removeClass(element,className);
	}else{
		addClass(element,className);
	}
}

function generateRandomNumber(n,m){
	return parseInt(Math.random() * (m-n+1)) + n;
}

function removeClass(element,className){
	var classNames = element.className;
	if(classNames.indexOf(className) != -1){
		classNames = classNames.replace(new RegExp(className,"g"),function(match,$1){
			return "";
		})
		classNames = classNames.replace(/( ){2,}/g,function(match,$1){
			return " ";
		})
	}
	element.className = classNames.trim();
}

function hasClass(element,className){
	var hasFlag = false;
	if(element.className.indexOf(className) != -1){
		hasFlag = true;
	}
	return hasFlag;
}

function addClass(element,className){
	var classNames = element.className;
	if(classNames.indexOf(className) == -1){
		classNames = classNames.concat(" ").concat(className);
	}
	element.className = classNames;
}

function allSiblings(element){
	var siblings = [];
	var previousSibling4Element = element;
	while(previousSibling4Element = previousSibling4Element.previousSibling){
		if(previousSibling4Element.nodeType == 1){
			siblings.push(previousSibling4Element);
		}
	}
	var nextSibling4Element = element;
	while(nextSibling4Element = nextSibling4Element.nextSibling){
		if(nextSibling4Element.nodeType == 1){
			siblings.push(nextSibling4Element);
		}
	}
	return siblings;
}

function previousAllSibling(element){
	var siblings = [];
	var previousSibling4Element = element;
	while(previousSibling4Element = previousSibling4Element.previousSibling){
		if(previousSibling4Element.nodeType == 1){
			siblings.push(previousSibling4Element);
		}
	}
	return siblings;
}

function nextAllSiblings(element){
	var siblings = [];
	var nextSibling4Element = element;
	while(nextSibling4Element = nextSibling4Element.nextSibling){
		if(nextSibling4Element.nodeType == 1){
			siblings.push(nextSibling4Element);
		}
	}
	return siblings;
}

function fetchElementAttrStyleValue(element,attr){
	if(window.getComputedStyle){ //能力检测
		//高级浏览器或者IE的高版本
		attr = attr.replace(/([A-Z])/g,function(match,$1){
			return "-".concat($1.toLowerCase());
		});
		var value = getComputedStyle(element)[attr];
	}else{
		//IE5\6\7\8
		attr = attr.replace(/-([a-z])/g,function(match,$1){
			return $1.toUpperCase();
		});
		var value = element.currentStyle[attr];
	}
	if(parseInt(value) || parseInt(value) == 0){
		var newValue = parseInt(value);
	}else{
		var newValue = value;
	}
	//var newValue = parseInt(value) ? parseInt(value) : value;
	return newValue;
}

/**
 * 动画框架
 * @param  {[DOM OBJ]} element         [运动对象]
 * @param  {[JSON OBJ]} targetJson     [对象在动画过程中的变化最终结果]
 * @param  {[NUMBER]} animateDuration  [动画的总时间]
 * @return {[null]}                    [没有返回值]
 */
function animate(element,targetJSON,animateDuration,callback){
	if(	typeof element != "object" 
			|| typeof targetJSON != "object" 
			|| typeof animateDuration != "number"){
		throw new Error("运动框架的参数传递有误,请重新检查...");
		return;
	}
	var interval = 20;
	if(navigator.userAgent.indexOf("MSIE") != -1){
		interval = 50; //IE低版本的兼容性处理
	}
	var totalFrame = animateDuration / interval;
	var initJSON = {};
	var totalDeltaJSON = {};
	var deltaJSON = {};
	for(var key in targetJSON){
		initJSON[key] = fetchElementAttrStyleValue(element,key);
		totalDeltaJSON[key] = targetJSON[key] - initJSON[key];
		deltaJSON[key] = totalDeltaJSON[key] / totalFrame;
	}
	element.isAnimated = true; //动画的防抖动或者防止闪动
	//console.log(targetJSON,initJSON,totalDeltaJSON,deltaJSON);
	var frameCount = 0;
	var timer = setInterval(function(){
		frameCount++;
		for(var key in targetJSON){
			if(key == "opacity"){
				initJSON["opacity"] += deltaJSON["opacity"];
				element.style["opacity"] = initJSON["opacity"];
				element.style["filter"] = "alpha(opacity=" + initJSON["opacity"] * 100 + ")";
			}else{
				initJSON[key] += deltaJSON[key];
				element.style[key] = initJSON[key] + "px";
			}
		}
		if(frameCount >= totalFrame){
			for(var key in targetJSON){
				if(key == "opacity"){
					element.style["opacity"] = targetJSON["opacity"];
					element.style["filter"] = "alpha(opacity=" + targetJSON["opacity"] * 100 + ")";
				}else{
					element.style[key] = targetJSON[key] + "px";
				}
			}
			clearInterval(timer);
			callback && callback.call(element);
			element.isAnimated = false; //设置动画结束标志
		}
	},interval)
}