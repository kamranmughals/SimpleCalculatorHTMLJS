

/* With simple Javascript
*/
// let inputBox = document.getElementById("input-area")
// let displayArea = document.getElementById("display-area")
// let num = document.querySelectorAll("#num")
// let point = document.querySelectorAll("#dec")
// let remove = document.getElementById("del")
// let operator = document.querySelectorAll("#op") 
// let clr = document.getElementById("ac")
// let equalArea = document.querySelector(".is-equal")


// for(let x of num){
//     x.addEventListener("click",(e) =>{
//         e.preventDefault();
//         let n = x.value;
//         inputBox.value += n
        
//     });
// }
// remove.addEventListener("click",() =>{
//     inputBox.value = inputBox.value.slice(0, -1);
// })
// for(let o of operator){
//     o.addEventListener("click", (e) => {
//         let ch = {'*': 'x'}
//         let op = o.value;
//         op = op.replace(/[*]/g, m => ch[m]);
//         inputBox.value += op
//     });
// }
// for(let p of point){
//     p.addEventListener("click", () =>{
//         let pn = p.value;
//         inputBox.value += pn;
// })
// }
// equalArea.addEventListener("click", () => {
//     let calc = inputBox.value;
//     displayArea.value = eval(calc.replace(/×/g, '*').replace(/÷/g, '/'));
// })
// clr.addEventListener("click", () =>{
//     inputBox.value = ""
//     displayArea.value = ""
// })


/* With Jquery
*/
$(function(){
    // Numbers in Calculator
    $(function(){
        $("button[id=num").on("click", function(){
            let num = $(this).val();
            let inpt = $("#input-area").val()
            $("#input-area").val(inpt + num)
        })
    })
    // Delete Operator
    $(function(){
        $("#del").click(function(){
            let inpt = $("#input-area").val()
            $("#input-area").val(inpt.slice(0, -1))
        })
    })
    // decimal
    $(function(){
        $("button[id=dec]").click(function(){
            let dec = $(this).val();
            let inpt = $("#input-area").val()
            $("#input-area").val(inpt + dec)
        })
    })
    // Arithmethic operators
    $(function(){
        $("button[id=op]").click(function(){
            let ch = {'*': '×', '/': '÷'}
            let inpt = $("#input-area").val()
            let op = $(this).val();
            $("#input-area").val(inpt + op.replace(/[*]/g, m => ch[m]).replace(/[/]/g, m => ch[m]))
        })
    })
    // Clear all
    $(function(){
        $("button[id=ac]").click(function(){
            let clr = $(this).val();
            $("#input-area").val(clr)
            $("#display-area").val(clr)
        })
    })
    // Calculations
    $(function(){
        $("button[id=equal]").click(function(){
            let eq = $("#input-area").val();
            $("#display-area").val(eval(eq.replace(/×/g, '*').replace(/÷/g, '/')));
        })
    })
});
