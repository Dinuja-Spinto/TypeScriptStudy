console.log("welcome to TypeScript");
function myFuntion(str, num, val1) {
    if (val1 === void 0) { val1 = "hey"; }
    return str + num + val1;
}
var valu = myFuntion("Dinuja", 10);
console.log(valu);
