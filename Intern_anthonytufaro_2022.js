// Getting required arguments
var myArgs = process.argv.slice(2);
// Building an text array for conversion
var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// text equivalent of numbers
var inTexts = [];

var i = 0;
myArgs.forEach(function (number) {
    eq = "";
    // Split the number into digits
    inNumbers = number.split("");
    // For each digits
    inNumbers.forEach(function(digit) {
        // Appending the string equivalent to eq
        eq += numbers[parseInt(digit)];
    })
    // Add eq to inTexts array
    inTexts[i] = eq;
    i++;
})
// Output inTexts by joining
console.log(inTexts.join(","))