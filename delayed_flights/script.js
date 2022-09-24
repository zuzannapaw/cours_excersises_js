

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0,3).toUpperCase()

const flight = flights.split('+');
//console.log(flight);

for(const data of flight){
	const [type,from,to,time] = data.split(';');
//	console.log(type,from,to,time);
	const output = ` ${type.startsWith("_Delayed")?"!":''}${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)}(${time.replace(':','h')})`.padStart(35);
	
	console.log(output);
};



