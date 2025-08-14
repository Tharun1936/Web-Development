let arr = [1,2,3,4,5]
// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e)=>{
    return e**2

})
console.log(newarr)

const greaterThanseven = (e) =>{
    if(e>7)
        return true
    return false
}
console.log(newarr.filter(greaterThanseven))

let arr1 = [3,5,7,9]
const red = (a,b)=>{
    return a+b
}
console.log(arr1.reduce(red))


Array.from("Tharun")