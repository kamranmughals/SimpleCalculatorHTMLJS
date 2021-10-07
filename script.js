


let inputBox = document.getElementById("input-area")
let displayArea = document.getElementById("display-area")
let num = document.querySelectorAll("#num")
let point = document.querySelectorAll("#dec")
let remove = document.getElementById("del")
let operator = document.querySelectorAll("#op") 
let clr = document.getElementById("ac")
let equalArea = document.querySelector(".is-equal")


for(let x of num){
    x.addEventListener("click",(e) =>{
        e.preventDefault();
        let n = x.value;
        inputBox.value += n
        
    });
}
remove.addEventListener("click",() =>{
    inputBox.value = inputBox.value.slice(0, -1);
})
for(let o of operator){
    o.addEventListener("click", (e) => {
        let ch = {'*': 'x'}
        let op = o.value;
        op = op.replace(/[*]/g, m => ch[m]);
        inputBox.value += op
    });
}
for(let p of point){
    p.addEventListener("click", () =>{
        let pn = p.value;
        inputBox.value += pn;
})
}
equalArea.addEventListener("click", () => {
    let calc = inputBox.value;
    displayArea.value = eval(calc.replace(/×/g, '*').replace(/÷/g, '/'));
})
clr.addEventListener("click", () =>{
    inputBox.value = ""
    displayArea.value = ""
})