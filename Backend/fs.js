const fs=require("fs")

console.log("Start")
fs.writeFile("Tharun.txt","Tharu is good",()=>{  // create a file
    console.log("Process")
    fs.readFile("Tharun.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("Tharun.txt","Tharun is web developer",(e,d)=>{
    console.log(d)
})
console.log("End")     //due to its asyncronous character 