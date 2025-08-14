let a=1
for (let i = 0; i < 100; i++) {
    
    console.log(a+i)
}


let obj ={
    name:"Tharun",
    college:"DSU",
    Course:"CSE"
}
for (const key in obj) {          // for objects 
    const element = obj[key];
    console.log(key,element)    
}

for (const c of "tharun") {          // for iteratiobn and arrays 
    console.log(c)
    
}

let f=0
while(f<6){
    console.log(f)
    f++
}

let g=11
do {
    console.log(g)
    g++
} while (g<10);