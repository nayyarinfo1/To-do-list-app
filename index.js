const input =document.querySelector('#todo-input');
const btn =document.querySelector('#add-btn');
const text =document.querySelector('#text');

function add(){
    if(input.value == ""){
        alert("Please enter task...")
    }else{
        let newele=document.createElement("ul");
        newele.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.append(newele);
        input.value="";
        newele.querySelector("i").addEventListener("click",remove);
        function remove(){
            newele.remove()
        }
    }
}




