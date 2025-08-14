// async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 5000);
//     })
// }


async function getData() {
    // simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // we will make it await 

    let data = await x.json()
    console.log(data)
    return 433;
}


async function main() {   

console.log("Loading modules")
console.log('Do something');
let data=getData()
console.log(data);
console.log("process data")
console.log("task2")

}
main()

