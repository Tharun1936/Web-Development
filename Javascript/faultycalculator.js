let random = Math.random()

let a = prompt("Enter the 1st number")
let b = prompt("Enter the 2nd number")
let c = prompt("Enter the operations")

let obj ={
    "+":"-",
     "-":"+",
     "*":"/",
     "/":"*"
}


console.log(random)
if(random>0.1){
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)        //correct calculatoins 

}
else{
    c = obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)        // Wrong calculations

}