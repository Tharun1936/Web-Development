let arr = [1,2,3,4,5]

arr.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})


let obj ={
    a:1,b:2,c:3
}
for (const key in obj) {                                //for in 
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        
    }
}


for (const value of arr) {                   // for of
    
    console.log(value)
    
}
