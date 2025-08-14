// objective = ("Crazy","Amazing","Fire")
// shop_name = ("Engine","Food","Garments")
// another_word = ("Bros","Limited","Hub")


let random = Math.random()
let first,second,third;


if (random<0.33){
    first = "Crazy"
}
else if(random<0.66 && random>=0.33)
{
    second = "Amazing"
}
else{
    third = "Fire"
}

let rand = Math.random()
if (rand<0.33){
    first = "Engine"
}
else if(rand<0.66 && rand>=0.33)
{
    second = "Food"
}
else{
    third = "Garments"
}

let ran = Math.random()
if (ran<0.33){
    first = "Bros"
}
else if(ran<0.66 && ran>=0.33)
{
    second = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)