// ============== SECTION 11: BUBBLE SORT =======================

	//ELEMENTARY SORTING ALGORITHMS INTRODUCTION
		// Process of rearranging the items in a collection (arr) so that the items are in some kind of order

		//WHAT IS SORTING?

			//Examples
				//Sorting numbers from smallest to largest
				//Sorting names alphabetically
				//Sorting movies based on release year
				//Sorting movies based on revenue
	 function sort(arr) {
	 	//this requires you to fill in code here to make this work
	 	return arr
	 }

	 // console.log(sort([23,45,6,12,13]));


	//WHY DO WE NEED TO LEARN THIS?
		// Sorting is an incredibly common task, so it's good to know how it works.
		// There are many different ways to sort things, and different techniques have their own advantages and disadvantages
		// This is a CLASSIC INTERVIEW TOPIC

	//OBJECTIVES
		//Implement BUBBLE SORT
		//Implement SELECTION SORT
		//Implement INSERTION SORT
		//Understand why it is important to learn these simpler sorting algorithms

//======== JAVASCRIPT BUILT HAS A IN SORT METHOD ========
	//Doesn't always work the way you'd expect it to
	['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
	//['Algorithms', 'Colt', 'Data Structures', 'Steele']
	[6,4,15,10].sort();
	// [10, 15, 4, 6] - doesn't work with integers/numbers

	// Telling JS how to Sort
		//The built-in sort method accepts an optionsl comparator function
		//You can use this comparator function to tell JS how you want it to sort
		//The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
		// If it returns a negative number, a should come before b
		// If it returns a positive number, a should come after b
		// If it return 0, a and b are the same as far as the sort is concerned

		//EXAMPLE
			function numberCompare(num1, num2) {
				return num1 - num2;
			}

			// console.log([6, 4, 15, 10].sort(numberCompare));
			// [4,6,10,15]

			//With the above helper function and the built-in .sort() JS method we can return the arr sorted in ascending order
				//** to return the arr in DESCENDING order you would reverse the vars to: num2 - num1;


// ========= BubbleSort Overview =========
	// A sorting algorithm where:
		//Two adjacent values are compared one at a time
			//If first value < second value they remain in place
			//If first value is > second value their positions are swapped
			//After swapping the process repeating picking up at the second value that was swapped 
	// Example
	// [29,10,14,30,37,14,18]
	//step 1
	// [10,14,29,30,15,18,37]
	//step 2
	// [10,14,29,14,18,30,37]
	//step 3
	// [10,14,14,18,29,30,37]

	//Before we sort, we must swap!
		//Many sorting algos involve some type of swapping functionality (swapping to numbers to put them in order)

		//Example es5
		function swapES5(arr, idx1, idx2) {
			let temp = arr[idx1];
			arr[idx1] = arr[idx2];
			arr[idx2] = temp;
		}

		//Example es2015
		const swapES2015 = (arr, idx1, idx2) => {
			[arr[idx1], arr[idx2]] = [arr[idx2], [arr][idx1]];
		}

	//BubbleSort Pseudocode
		// Write a function called bubbleSort which takes in an arr (assumed to be numbers)
		// Start looping from the end of the arr towards the beginning with i
		// Start an inner loop with a variable called j from the beginning until i - 1
		// If arr[j] > arr[j + 1], swamp those two values!
		// Return the sorted array

	//YOUR SOLUTION
	const bubbleSort = (arr) => {
		for ( let i = arr.length-1; i > 0; i-- ) {
			for ( let j = 0; j < i-1; j++ ) {
				console.log(arr, arr[j], arr[j+1]);
				if ( arr[j] > arr[j+1] ) {
					let temp = arr[j];
					arr[j] = arr[j+1];
					arr[j] = temp;
				}
			}
			console.log('ONE PASS COMPLETE!');
		}
		return arr;
	};

	// bubbleSort([37,45,29,8,12,88,-3]);

	//INSTRUCTOR'S SOLUTION
	const bubbleSortInstructor = (arr) => {
		for (let i = arr.length; i > 0; i--) {
			for (let j = 0; j < i-1; j++) {
				console.log(arr, arr[j], arr[j+1]);
				if (arr[j] > arr[j+1]) {
					let temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp; 
					//the above 3 lines are how we perform a swap
				}
			}
			console.log('ONE PASS COMPLETE!');
		}
		return arr;
	};

	bubbleSortInstructor([37,45,29,8,12,88,-3]);

// ========= Bubble Sort Optimization =========
	//TO OPTIMIZE THIS:

	const bubbleSortOptimized = (arr) => {
		let noSwaps;
		for (let i = arr.length; i > 0; i--) {
			noSwaps = true;
			for (let j = 0; j < i-1; j++) {
				console.log(arr, arr[j], arr[j+1]);
				if (arr[j] > arr[j+1]) {
					let temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
					noSwaps = false;
					//the above 3 lines are how we perform a swap
				}
			}
			console.log('ONE PASS COMPLETE!');
			if(noSwaps) break;
		}
		return arr;
	};
	//Check to see if all the way through if we made any swaps
	//if there are no swaps, then return the array and the code is finished running

	bubbleSortOptimized([8,1,2,3,4,5,6,7]);
	//we are running this function on a NEARLY SORTED array
		// when the data is nearly sorted the time Big O Time Complexity is closer to O(n) (linear)
			//this is the best case scenario
				//** if you know your data is nearly sorted then bubble sort isn't a bad choice
				//** for just about every other context there are far better sorting algorithms


// ========= Bubble Sort Big O Time Complexity ========= 