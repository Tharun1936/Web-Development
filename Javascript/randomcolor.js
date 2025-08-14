// let boxes=document.querySelector(".container").children
let boxes=document.getElementsByClassName("box")
function getRandomColor(){
    let val1=Math.ceil(0+Math.random()*235);
    let val2=Math.ceil(0+Math.random()*245);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})