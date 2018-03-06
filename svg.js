var growing = true;
var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleR = 0;

var growId;

var growCircle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    c1.setAttribute("cx", 150);
    c1.setAttribute("cy", 200);
    c1.setAttribute("r", circleR);
    pic.appendChild(c1);
    
    if(growing == true){
	circleR += 1;
	if(circleR >= 150){
	    growing = false;
	}
    }
    else{
	circleR -= 1;
	if(circleR <= 0){
	    growing = true;
	}
    }

    pic.removeChild(pic.childNodes[0]);
}

var growWrap = function(e){
    rectX = 150;
    rectY = 200;
    growId = setInterval(growCircle, 25);
}

pic.addEventListener("click", growWrap);

var clearFxn = function(e){
    clearInterval(growId);
    while(pic.childNodes[0] != null){
	pic.removeChild(pic.childNodes[0]);
    }
}

clearButt.addEventListener("click", clearFxn);

