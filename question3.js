//converting hex to rgb

let hex = "#FF0000";

const hexToRgb = (hex) =>{
	//separate the hex in r, g and b with the string index of letters		
	let r = hex[1] + hex[2];
	let g = hex[3] + hex[4];
	let b = hex[5] + hex[6];
	//use parseInt to transform the hexadecimal string in a decimal number giving the str as the first argument 
	//and the base to convert from as the second
	return "rgb("+ parseInt(r, 16) +","+ parseInt(g, 16) +","+ parseInt(b, 16) + ")";
}

// hexToRgb("#2F3A01")

const rbgToHex = (rgb) => {
	//here i declared the var to have the pure number of rgb
	let justRGB = ""
	//and sliced the rgb to be only the numbers and commas
	justRGB = rgb.slice(rgb.indexOf("(")+1, rgb.indexOf(")"))
	//here i separated the red green and blue slicing the string, but could have used substr also
	let r = justRGB.slice(0, justRGB.indexOf(","));
	let g = justRGB.slice(justRGB.indexOf(",") +1, justRGB.lastIndexOf(","));
	let b = justRGB.slice(justRGB.lastIndexOf(",") +1, justRGB.length);

	//parseint to transform into decimal in, cause by now its a string with decimal
	//then the number to a hexadec string by the tostring(16)
	r = parseInt(r).toString(16);
	g = parseInt(g).toString(16);
	b = parseInt(b).toString(16);

	return "#" + r + g + b;
}

// rbgToHex("rgb(255,110,8)")

const autoDetec = (color) => {
	if(color.includes("#")){
		return hexToRgb(color);
	}
	else if(color.includes("rgb(")){
		return rbgToHex(color);
	}else{
		console.log(`please insert the correct color format, #XXYYZZ for hexadec, and rgb(x,y,z) for decimals`)
	}
	
}