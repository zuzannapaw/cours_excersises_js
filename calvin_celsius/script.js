
const measureKelvin = function(){
	const measurement = {
		type:'temp',
		unit: 'celcius',
		value: Number(prompt('Degrees celsius:'))
	}
	
	const kelvin = measurement.value + 273;
	return(kelvin)
};

console.log(measureKelvin());
// JavaScript Document