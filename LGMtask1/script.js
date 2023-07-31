const text=document.getElementById("text");
const add=document.getElementById("add");
const clear=document.getElementById("clear");
const complete=document.getElementById("complete");
const tasks=document.getElementById("tasks");
const del=document.getElementById("del");
text.onkeyup = () => {
    let ud = text.value;
    if (ud.trim() != 0) { 
        add.classList.add("active");
    }else{
        add.classList.remove("active");
    }
};
showTasks();
add.onclick=()=>{
    let temptext=text.value;
    let temptask=localStorage.getItem("New Todo");
    if(temptask==null){
        arr=[];
    }
    else{
        arr=JSON.parse(temptask);
    }
    arr.push(temptext);
    localStorage.setItem("New Todo",JSON.stringify(arr));
    showTasks();
    add.classList.remove("active");
}
function showTasks(){
    let temptasks=localStorage.getItem("New Todo");
    if(temptasks==null){
        arr=[];
    }
    else{
        arr=JSON.parse(temptasks);
    }
    let n=document.getElementById("number");
    n.textContent=arr.length+"  Tasks TO-DO";
    if(arr.length==0){
        clear.classList.remove("active");
    }
    else{
        clear.classList.add("active");
    }
    newtasks='';
    arr.forEach((element,index)=>{
        newtasks+= `<li>${element}<span><button onclick="Complete(${index})"><i class="fa fa-check"></i></button><button onclick="Delete(${index})";><i class="fa fa-trash-o"></i></button></span></li><hr></hr>`;
    })
    tasks.innerHTML=newtasks;
    text.value="";
}
function Delete(index){
    let temptasks=localStorage.getItem("New Todo");
    arr=JSON.parse(temptasks);
    arr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(arr));
    showTasks();
}
function Complete(index){
    let li=tasks.getElementsByTagName("li");
    li[index].classList.toggle("line-through");
}
clear.onclick=()=>{
    arr=[];
    localStorage.setItem("New Todo",JSON.stringify(arr));
    showTasks();
}