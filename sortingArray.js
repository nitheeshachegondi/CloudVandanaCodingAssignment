const numbers = [5, 1, 3, 7, 2, 8, 4, 6];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // Output: [8, 7, 6, 5, 4, 3, 2, 1]