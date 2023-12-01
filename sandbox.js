var character = 'Dinuja';
var num = 10;
character = 'Pinto';
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(14));
//arrays
var names = ['mario', 'anna', 'yoshi'];
names.push('test');
var nums = [2, 3, 4];
nums.push(29);
var mixed = ['Ken', 4, 'abc', 10];
mixed.push('hello');
mixed.push(18);
//objects
var person = {
    firstName: 'Dinuja',
    lastName: 'Pinto',
    age: 20
};
person.age = 22;
person.lastName = 'sri';
person = {
    firstName: 'Dinuja',
    lastName: 'Pinto',
    age: 20
};
var ninjas = [];
ninjas.push('abs');
//union types
var mix = [];
mix.push(10);
mix.push('hello');
mix.push(false);
console.log(mix);
var uid;
uid = 123;
uid = 'abc';
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'dinuja', age: 12, beltColor: 'black' };
ninjaTwo = { name: 'dinujaS', age: 122, beltColor: 'darkblack' };
