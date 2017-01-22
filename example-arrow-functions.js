var names = ['Andrew','Nathan','Vincent','Daniel'];
/*
names.forEach(function(name) {
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
})

names.forEach((name) => console.log(name));

var returnMe = ((name)=> name + '!');

console.log(returnMe('Nate'));

var person = {
	name:'Andrew',
	greet: function () {
		names.forEach((name)=>{
			console.log(this.name + ' says hi to ' + name);
		})
	}
};

person.greet();

*/

function add (a,b) {
	return a+b;
}

console.log(add(1,3));

console.log(add(9,0));

var sum = (a,b)=> a+b; //auto return 
var sumAlt = (a,b) => {
	return a+b;
}

console.log(sum(4,7));

console.log(sumAlt(50,5));