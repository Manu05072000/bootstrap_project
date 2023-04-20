//parent element to store cards
const taskContainer=document.querySelector(".task-container");
//global store
let globalStore=[];





const newCard= ({id,imageUrl,taskTitle,taskDescription,taskType})=>
`
<div class="col-lg-4" id=${id}>
      <div class="card text-center">
        <div class="card-header d-flex justify-content-end gap-2">
          <button type="button"id=${id} class="btn btn-outline-success"onclick="editCard.apply(this,arguments)">
            <i class="fa fa-pencil"></i>
          </button>
<button type="button" id=${id} class="btn btn-outline-danger" onclick="deleteCard.apply(this,arguments)">
  <i class="fa fa-trash"id=${id}onclick="deleteCard.apply(this,arguments)" ></i>
</button>
</div>
<img src=${imageUrl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">${taskTitle}</h5>
          <p class="card-text">${taskDescription}</p>
          <h5><span class="badge bg-primary">${taskType}</span></h5>
        </div>
        <div class="card-footer text-muted">
          <button type="button"id=${id} class="btn btn-outline-primary float-end">Open Task</button>
        </div>
      </div>
    </div>`;
    
const loadInitialTaskCards=()=>{
  //access local storage
const getInitialData=localStorage.getItem("tasky");
if(!getInitialData)return;
  //convert stringified-object to object

const { cards } =JSON.parse(getInitialData);

  //map around the array to generate html card and inject it to DOM
  cards.map((cardObject) =>{
    const createNewCard=newCard(cardObject);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
    globalStore.push(cardObject);
  });
};

const updateLocalStorage = () =>
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

const saveChanges = () => {
    const taskData = {
        id:`${Date.now()}`,//unique number for card id
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,
    };
    //html code
const createNewCard=newCard(taskData);
   taskContainer.insertAdjacentHTML("beforeend",createNewCard);

   globalStore.push(taskData);
   //add to local storage

   updateLocalStorage();


};

const deleteCard=(event)=>{


//id
event=window.event;
const targetID=event.target.id;
const tagname=event.target.tagName;

console.log(targetID);

globalStore=globalStore.filter((cardObject)=>cardObject.id !== targetID);

updateLocalStorage();

if (tagname==="BUTTON"){
  return taskContainer.removeChild(
    event.target.parentNode.parentNode.parentNode

  );
}

return taskContainer .removeChild(
  event.target.parentNode.parentNode.parentNode.parentNode

);


const editCard=(event)=>{
  console.log("hey edit is called!");
  
  event=window.event;
const targetID=event.target.id;
const tagname=event.target.tagName;

let parentElement;
parentElement=event.target.parentNode.parentNode;
}


};