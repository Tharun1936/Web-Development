async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(19)
        },1000);
    })
}

(async function main() {
    // let a=await sleep()
    // console.log(a)
    // let b=await sleep()
    // console.log(b)     iief
    
    // let[x,y,...rest]=[1,2,3,4,5,6,7]
    // console.log(x,y,rest)    destructure

    let obj={
        a:1,b:2,c:3
    }
    let{a,b}=obj
    console.log(obj)

})()