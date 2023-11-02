// Sample array
let numbers = [1,2,3,4,5,6,7,8,9,10];

let sortedArray = numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted array in descending order: " + sortedArray);
