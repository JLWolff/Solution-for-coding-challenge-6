// [1,2,3], 4

let array = [1,2,3,5,6,3,4,7,9];

//for this question you only need one function
//that do the process of checking the numbers to return the sum
const checkSum = (array,target) =>{
	
	//allocate the variables of the final array an the temporary one to separate the pairs in arrays
	let targetSum = [];
	let temporaryArr = [];
	//do the find() function callback function to already filter it
	const findSum = number => array[i] + number === target;

	//for loop to check the entire array and see that you have some things to be true
	//that's to not have same numbers as options, and do not repeat like 6,7 and 7,6
	//look at the push to the targetSum being the concat of the two in the temporary so they are always separed
	//and you dont even have to clean the temporaryArr cause you didn't even allocate tha concat in it
	//also attention to the toString() in the if test to see under the arrays inside the array and do not repeat
	for(i = 0; i<array.length; i++){
		if(array.find(findSum)
			&& !targetSum.toString().includes(array[i] || array.find(findSum))
			&& array[i] !== array.find(findSum)){

			targetSum.push(temporaryArr.concat(array[i], array.find(findSum)));

		}
	}
	return targetSum;
}

checkSum(array, 13);
