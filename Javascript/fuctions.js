 function guys(name) {
     console.log("Hello "+ name +"")
     console.log("Hii "+ name +"")
     console.log("Heyy "+ name +"")
     console.log("What's up "+ name +"")
    
}

guys("Tharun")
guys("Nikki")

function sum(a , b ,c=3) {
    console.log(a+b+c)
    console.log(a,b,c)
    
}
sum(3,5)
sum(4,6,2)
sum(2)

result=sum(4,6)
console.log("The sum of two number is : ",result)

const func1 = (x) =>{
    console.log("This is arrow function: ",x)
}

func1(3)
func1(45)
func1(64)