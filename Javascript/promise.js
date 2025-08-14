console.log('This is Promise');
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Small numbers are not supported")
    }
    else{
        setTimeout(() => {
        console.log('Yes I am done');
        resolve("Tharun");        
    }, 3000);}
}) 

       

        

prom1.then((a)=>{
    console.log('a');
}).catch((err)=>{
    console.log(err)
})


