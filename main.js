$(document).on('ready', function() {
  
var animals  = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
// }

// for(var i=0; i<animals.length-1; i++) {
//  console.log(animals[i]);
// }

// for(var i=0; i<animals.length; i=i+2) {
//  console.log(animals[i]);
// }

// for(var i=animals.length-1; i>-1; i--) {
//  console.log(animals[i]);
// }

	for(var i=0; i<animals.length; i++){
		console.log(animals[i]);
		if(i>0 && i<animals.length-1) {
			console.log(animals[i]);
		}
	}
});