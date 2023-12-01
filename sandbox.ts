let character = 'Dinuja';
let num = 10;

character = 'Pinto';

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(14));

//arrays
let names = ['mario', 'anna', 'yoshi'];
names.push('test');

let nums = [2, 3, 4]
nums.push(29)

let mixed = ['Ken', 4, 'abc', 10]
mixed.push('hello')
mixed.push(18)

//objects
let person = {
    firstName: 'Dinuja',
    lastName: 'Pinto',
    age: 20
};

person.age = 22;
person.lastName = 'sri'

person = {
    firstName: 'Dinuja',
    lastName: 'Pinto',
    age: 20
};

let ninjas: string[] = [];
ninjas.push('abs')

//union types
let mix: (string | number | boolean)[] = [];
mix.push(10);
mix.push('hello');
mix.push(false);

console.log(mix);

let uid: string | number;
uid = 123;
uid = 'abc'

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}
ninjaTwo = {name:'dinuja',age: 12, beltColor:'black'}
ninjaTwo = {name:'dinujaS',age: 122, beltColor:'darkblack'}