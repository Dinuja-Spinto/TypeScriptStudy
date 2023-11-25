console.log("welcome to TypeScript");

function myFuntion(str: string,num: number,val1: string="hey"): string{
    return str+num+ val1;
}

let valu = myFuntion("Dinuja",10);


console.log(valu);