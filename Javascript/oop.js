// let animal ={
//     ets:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__protp__=animal;

class Animal{
    constructor(name){
        this.name=name
        console.log("object is created")
    }
    eats(){
        console.log('I am eating');
    }
    jumps(){
        console.log('I am Jumping');    
    }
}
class lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("object is created and LION")
    }
    eats(){
        super.eats()
        console.log('I am eating and roaring');  //method overriding
    }
}
let a=new Animal("Tharun")
console.log(a)
let l=new lion("Tharu")
console.log(l)