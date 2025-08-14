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

let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Small numbers are not supported 2")
    }
    else{
        setTimeout(() => {
        console.log('Yes I am done 2');
        resolve("Tharun 2");        
    }, 1000);}
}) 


let p3=Promise.race([prom1,prom2])
p3.then((a)=>{
    console.log('a');    
}).catch(err=>{
    console.log(err)
})