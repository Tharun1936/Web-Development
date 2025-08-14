console.log("I am Tharun")
setTimeout(()=>{
    document.console.log("Heyy There,,")
},3000);

const callback=(arg)=>{
    console.log(arg)
}
const loadscript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Tharun");
    document.head.append(sc)
}
loadscript(" ",callback)