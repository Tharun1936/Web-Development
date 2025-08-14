let arr = [1,2,3,4,5,6,7]
arr[0]=5500  // mutable
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr[0])

console.log(arr.toString())
console.log(arr.join("and"))
console.log(arr.pop(),arr)
console.log(arr.push(100),arr)
console.log(arr.push("Tharun"),arr)
console.log(arr.shift(),arr)
console.log(arr.unshift("Nandan"),arr)
console.log(delete arr[0],arr)   // important for interview :- Memorry is allocated but it is empty


let a = ["Tharun",19]
let b = ["Nandan",3]
console.log(a.concat(b))

console.log(arr.sort())
console.log(arr.splice(1,3),arr)
console.log(arr.splice(1,3,500,600),arr)