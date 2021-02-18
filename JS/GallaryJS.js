function background(){
	var bColor = document.getElementById("checkColor").value;
	document.body.style.backgroundColor = bColor;
}
//Select background
function backgroundDrop(){
	var slctdColor = document.getElementById("drp1").value;
		
switch(slctdColor) {
		case "red":
		document.body.style.backgroundColor = "#B30000";
		break;
		case "black":
		    document.body.style.backgroundColor = "#0D0D0D";
		break;
		case "blue":
		document.body.style.backgroundColor = "#000099";
		break;
		case "gray":
		document.body.style.backgroundColor = "#4D4D4D";
		break;
		default:
		document.body.style.backgroundColor = '#ffffff';
	}
}

function backgroundDrop2(){
		var selectedtxtColor = document.getElementById("drp2").value;
			
	if (selectedtxtColor == "red") {
			    document.body.style.color = selectedtxtColor;
			    removeProperty();
			}else
		if (selectedtxtColor == "black") {	
			    document.body.style.color = selectedtxtColor;
			    removeProperty();
			}else
		if (selectedtxtColor == "blue") {	
			document.body.style.color = selectedtxtColor;
			removeProperty();
			}else
		if (selectedtxtColor == "gray") {	
				document.body.style.color = selectedtxtColor;
				removeProperty();
				}else {
				document.body.style.color != selectedtxtColor;
				removeProperty();
				}
}

function myFunction1() {
	document.getElementById("font").style.fontSize = "0.8em";
}

function myFunction2() {
	document.getElementById("font").style.fontSize = "1.1em";
}

function myFunction3() {
	document.getElementById("font").style.fontSize = "1.25em";
}

function myFunction4() {
	document.getElementById("font").style.fontSize = "1.4em";
}

function myFunction5() {
	document.getElementById("font").style.fontSize = "1.9em";
}




