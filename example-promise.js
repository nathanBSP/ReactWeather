

function addPromise (a,b) {
	return new Promise(function(resolve,reject){
		if(typeof a === 'number' && typeof b === 'number')
		{
			var result = a+b;
			resolve(result);
		}
		else
		{
			reject('You must enter numbers');
		}
	});
}

addPromise(1,2).then(function(result){
	console.log('promise succes', result);
}, function(err){
	console.log('promise error', err);
})

addPromise(10,2).then(function(result){
	console.log('promise succes', result);
}, function(err){
	console.log('promise error', err);
})

addPromise('a',2).then(function(result){
	console.log('promise succes', result);
}, function(err){
	console.log('promise error', err);
})

addPromise('a','b').then(function(result){
	console.log('promise succes', result);
}, function(err){
	console.log('promise error', err);
})