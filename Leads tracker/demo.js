
let Myleads=[]
let oldleads=[]
console.log(localStorage.getItem(Myleads))
const ulEl=document.getElementById("ul-el")
const inputEl=document.getElementById("input-el")
let divEl=document.getElementById("div-El")

let leads=JSON.parse(localStorage.getItem(Myleads))
console.log(leads)
if(leads)
{
      Myleads=leads
      render(Myleads)
}
function render(leads)
 {
        let listitems="";   
for( let i=0;i<leads.length;i++)
{ 
      listitems+=`<li>
      <a target='-blank' href=${leads[i]}>
      ${leads[i]}
      </a>
      </li>`
     
}
ulEl.innerHTML=listitems
}  
inputbtn.addEventListener("click",function(){
     Myleads.push(inputEl.value)
     inputEl.value=""
localStorage.setItem("Myleads",JSON.stringify(Myleads))
render(Myleads)
})
 
delbtn.addEventListener("dblclick",function()
{
    localStorage.clear()
    Myleads=[]
    render(Myleads)
})
savebtn.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        Myleads.push(tabs[0].url)
        localStorage.setItem("Myleads",JSON.stringify(Myleads))
        render(Myleads)
        // console.log(tabs)
    
    })
//   Myleads.push(tabs[0].url)
// localStorage.setItem("Myleads",JSON.stringify(Myleads))
// render(Myleads)
})