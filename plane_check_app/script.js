
const checkBaggage = function(items){
	const baggage = items.toLowerCase();

	if (baggage.includes ('knife') || baggage.includes('gun')) {
		console.log('You are NOT allowed on board!');
		
		}else{
			console.log('Welcome aboard')
	}
};
	
checkBaggage('Knife and cellphone');
checkBaggage('Gun for protection');
checkBaggage('Socks and camera');
	
	// JavaScript Document