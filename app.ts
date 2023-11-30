// console.log("welcome to TypeScript");

// function myFuntion(str: string,num: number,val1: string="hey"): string{
//     return str+num+ val1;
// }

// let valu = myFuntion("Dinuja",10);


// console.log(valu);

function performAction(event:Event){
    const val = (<HTMLInputElement>document.getElementById("textbox")).value;
    let liTag = document.createElement("li");
    liTag.innerHTML = val; 
    document.querySelector(".list")?.appendChild(liTag);
}