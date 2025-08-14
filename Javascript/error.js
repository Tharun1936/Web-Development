let a=prompt("Enter the first number")
let b=prompt("Enter the second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}
let sum = parseInt(a)+parseInt(b)


try {
    console.log("The sum is ",sum*x)
} catch (error) {
    console.log("Error ide guru check maadu numbers na!")
}
finally{
    console.log("Files are being closed")
}