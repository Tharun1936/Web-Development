let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    // alert("You were clicked")
    document.querySelector(".box").innerHTML="<b>You were clicked </b> enjoy"
})
button.addEventListener("contextmenu",()=>{
    alert("Don't Right click")
})