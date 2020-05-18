let messedRoom = [1,2,"2","4", "7","4","591","392","10",4,591,392,2,5,10,2,1,1,1,20,20]

//first sort all itens in crescent order
let ordenedRoom = messedRoom.sort(function(a, b){return a-b});

//now you have:
// [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 392, 591]

//organized in functions that determine if the number repeats or not, if it repeats its pushed to the repeated array
//if its not to the other
//attention to the include array method.
//also checking if its not string for the bonus in both functions
const repeated = (ordenedArr) => {
	let theRepeated = []
	for(i = 0;i < ordenedArr.length; i++){

		if(ordenedArr.includes(ordenedArr[i], i+1)
		 && !theRepeated.includes(ordenedArr[i]) 
		 && typeof ordenedArr[i] !== "string"){

			theRepeated.push(ordenedArr[i]);
		}
	}		
	return theRepeated;
}

const nRepeated = (ordenedArr, repeatedArr) => {
	let notRepeated = [];
	for(i = 0;i < ordenedArr.length; i++){
		if(!repeatedArr.includes(ordenedArr[i]) && typeof ordenedArr[i] !== "string"){

			notRepeated.push(ordenedArr[i]);

			}
		}
	return notRepeated;
}

//separating the strings for the bonus

const areStrings = (ordenedArr, repeatedArr,notRepeated ) => {
	let strings = []
	for(i = 0;i < ordenedArr.length; i++){
		if(!repeatedArr.includes(ordenedArr[i])
		 && !notRepeated.includes(ordenedArr[i])
		 && typeof ordenedArr[i] === "string"){

			strings.push(ordenedArr[i]);
			ordenedArr.splice(i,1)
			}	
		}
	return strings;	
}


//declare the separated repeated and not repeated ones cause you will concat it after, 
//and its in the scope of the function, so take it out

//declarating the strings too
let theRepeated = repeated(ordenedRoom);

let notRepeated = nRepeated(ordenedRoom, theRepeated);

let strings = areStrings(ordenedRoom, theRepeated, notRepeated);

// console.log("reprerat" + theRepeated);
// console.log("NONreprerat" + notRepeated);

//now you have respectively in each array
// [1, 2, 20]
// [4, 5, 10, 392, 591]


//now that you know what numbers repeat you have to group them in arrays of the repeaters
//with this for loop you use the first and last index to slice the first array and then push it into the new array

const separate = (repeatedArr, ordenedArr) =>{
	let separatedOnes = []

		for(i = 0; i < repeatedArr.length; i++){

			let index = ordenedRoom.indexOf(repeatedArr[i]);
			let finalIndex = ordenedArr.lastIndexOf(repeatedArr[i]) +1;

			separatedOnes.push(ordenedArr.slice(index, finalIndex));
		}
	return separatedOnes	
}

let separatedOnes = separate(theRepeated, ordenedRoom);

//this console already consoles a array with the repeted ones in their own arrays
// console.log(notRepeated);


//do a sort function that can check if the values in the array are > or < than the numbers
//remembering to filter the strings
const arraySort = (a, b) => {
	if(Array.isArray(a) && typeof a !== "string"){
		return a[0] - b
	}if(Array.isArray(b)&& typeof a !== "string"){
		return a - b[0];
	}else{
		return a-b
	}
}

//just concat and organize them them
//pushing the strings because if you concat it merges into the other array
//pushing it just puts one array inside the other
const concatAndOrganize = () =>{
	let allFinal = separatedOnes.concat(notRepeated);
	//you can sort them using the sort method with the comparation function as a parameter
	let organizedFinal = allFinal.sort(arraySort)

	organizedFinal.push(strings);

	return organizedFinal;
}

concatAndOrganize();