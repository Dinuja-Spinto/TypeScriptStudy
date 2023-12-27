import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let character = 'Dinuja';
let num = 10;
character = 'Pinto';
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(14));
//arrays
let names = ['mario', 'anna', 'yoshi'];
names.push('test');
let nums = [2, 3, 4];
nums.push(29);
let mixed = ['Ken', 4, 'abc', 10];
mixed.push('hello');
mixed.push(18);
//objects
let person = {
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
let ninjas = [];
ninjas.push('abs');
//union types
let mix = [];
mix.push(10);
mix.push('hello');
mix.push(false);
console.log(mix);
let uid;
uid = 123;
uid = 'abc';
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'dinuja', age: 12, beltColor: 'black' };
ninjaTwo = { name: 'dinujaS', age: 122, beltColor: 'darkblack' };
//dunamic(any) type
let age = 25;
console.log(age);
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'hello', year: 2023 };
let mixture = [];
mixture.push(true);
mixture.push('hello');
mixture.push(23);
console.log(mixture);
let ninja;
ninja = { name: 'pinto', age: 12 };
console.log(ninja);
ninja = { name: 12, age: 'dinuja' };
console.log(ninja);
//functions
let greet;
greet = () => {
    console.log('hello,again');
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(a + ' hello');
};
add(2, 5, 'hey');
const logDetails = (uid, item) => {
    console.log(`${item} has a Uid of ${uid}`);
};
const gree = (user) => {
    console.log(`${user.name} says hello`);
};
logDetails(123, 'watch');
gree({ name: 'pinto', uid: 456 });
//function signature
let greets;
greets = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action == 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${age} years old.`);
};
//classes
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor(c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) { }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
const invOne = new Invoice('mario', 'mario website', 200);
const invTwo = new Invoice('Dinuja', 'dinuja website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//invOne.client = 'pinto';
invTwo.amount = 123;
console.log(invoices);
//DOM
const form = document.querySelector('.new-item-form');
console.log(form);
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
let docOne;
let docTwo;
docOne = new Invoice('Dinuja', 'web work', 250);
docTwo = new Payment('pinto', 'pumbling work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
