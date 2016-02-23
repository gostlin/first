function drag(id){
	var obj=document.getElementById(id)
	var offX=0;
	var offY=0;
	
	obj.onmousedown=function(e){
		offX=e.pageX-obj.offsetLeft;
		offY=e.pageY-obj.offsetTop;
		document.onmousemove=function(e){
			obj.style.left=e.pageX-offX+'px';
			obj.style.top=e.pageY-offY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			
		}
	}
}
