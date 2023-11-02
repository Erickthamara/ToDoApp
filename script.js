const inputContent=document.getElementById("input-box");
const listContent=document.getElementById("list-container");
const button=document.querySelector('button');
const task=document.getElementById("task1");


/* 
button.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
      'e.target.textContent gives content of selected element: ',
      e.target.textContent
    )
  }) */

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
       // xButton.innerHTML="X";
        li.appendChild(span);
        console.log("Element Created");
        saveData();
    }
    inputContent.value="";
}

//the function that will remove the tasks
listContent.addEventListener("click",e=>{
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    } 
    console.log("cliked")

});

//function to save tasks on browser after refreshing

function saveData(){
    localStorage.setItem("data",listContent.innerHTML);
}

//show tasks on opening the page
function showTask(){
    listContent.innerHTML=localStorage.getItem("data");
}

//whenever the script is called it will run
showTask()