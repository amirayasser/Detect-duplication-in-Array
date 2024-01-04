// Detect duplication in Array

const array1 = [3, 8, 6, 0, -1, 7]
const array2 = [2, 4, 11, 7, 3, 2, 11]


// 1) Using Set and size

function checkDuplication(array) {
    let setFromArray = new Set(array)
    if (setFromArray.size !== array.length){
        return "yes, there is duplication"
    } else {
        return "no, it's unique"
    }
}
console.log(checkDuplication(array1)) // no, it's unique
console.log(checkDuplication(array2)) // yes, there is duplication

// ----------------------------------------------

//  2) Using indexOf and lastIndexOf

function hasDuplicates(array) {
    for(let i = 0; i< array.length; i++){
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i]) ){
            return true
        } else {
            return false
        }
    }
}
console.log(hasDuplicates(array1)) // true
console.log(hasDuplicates(array2)) // false

// ----------------------------------------------

// 3)  Using some() and indexOf 

function hasDuplications(array) {
    return array.some((element, index) => {
        array.indexOf(element) !== index
    });
}
console.log(hasDuplications(array1)); // false
console.log(hasDuplications(array2)); // true

// ----------------------------------------------

// 4) Using some() and reduce() 

function hasDupl(array) {
//  some function needs to return the result of the condition inside hasDupl
// so i use return before some 
    return array.some((ele, index, arr) => {
        // Using reduce to count occurrences of each element
        const occurrence = arr.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1
            return acc
        }, {})
        // Check if the current element has more than one occurrence
        return occurrence[ele] > 1;
    })
}
console.log(hasDupl(array1)) // false 

// -----------------------------------------

// 4) Using some() and reduce() and Object.values()

function hasDuplic(array) {
    const occurrenceMap = array.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    console.log(occurrenceMap)

    return Object.values(occurrenceMap).some(count => count > 1);
}

// occurrenceMap:
// {2: 2, 3: 1, 4: 1, 7: 1, 11: 2}
console.log(hasDuplic(array2)); // true

// occurrenceMap:
// {0: 1, 3: 1, 6: 1, 7: 1, 8: 1, -1: 1}
console.log(hasDuplic(array1)); // false

