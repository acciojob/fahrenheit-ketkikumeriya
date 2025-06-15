function toFahrenheit(celsius) {
 // Write your code here
	let fahrenheit = (celsius * 9/5) + 32;
	console.log(`Celsius: ${celsius}, Fahrenheit: ${fahrenheit}`);
    return parseFloat(fahrenheit.toFixed(2));

}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
console.log(`Input Celsius: ${celsius}`);
alert(toFahrenheit(Number(celsius)));
