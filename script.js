function toFahrenheit(celsius) {
    // Check if the input is a number
    if (isNaN(celsius)) {
        return "Invalid input";
    }

    let fahrenheit = (celsius * 9/5) + 32;

    // Log the intermediate value for debugging
    console.log(`Celsius: ${celsius}, Fahrenheit (before rounding): ${fahrenheit}`);

    // Return the value formatted to two decimal places
    return parseFloat(fahrenheit.toFixed(2));
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
const result = toFahrenheit(Number(celsius));
alert(result);
