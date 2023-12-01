// console.log("welcome to TypeScript");
// function myFuntion(str: string,num: number,val1: string="hey"): string{
//     return str+num+ val1;
// }
// let valu = myFuntion("Dinuja",10);
// console.log(valu);
function performAction(event) {
    var _a;
    var val = document.getElementById("textbox").value;
    var liTag = document.createElement("li");
    liTag.innerHTML = val;
    (_a = document.querySelector(".list")) === null || _a === void 0 ? void 0 : _a.appendChild(liTag);
}
