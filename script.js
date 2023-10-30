const inputContent=document.getElementById("input-box");
const listContent=document.getElementById("list-container");
const button=document.querySelector(button);

function addValue(){
    if (inputContent.value===""){
        alert("You must write something")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputContent.value;
        listContent.appendChild(li);

        //add the cross icon in a span tag
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        console.log("Element Created");
    }
    inputContent.value="";
}

//the function that will remove the tasks
listContent.addEventListener("click",function(e){
    /* if (e.target.tagName==="li"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="span"){
        e.target.parentElement.remove();
    } */
    console.log("cliked")

});