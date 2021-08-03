console.log("hi")
const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

const globalStore=[];

var generateNewCard=(taskData)=>` <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
<div class="card">
    <div class="card-header d-flex justify-content-end gap-1">
        <button type="button" class="btn btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-primary"><i class="fas fa-trash-alt"></i></button>

    </div>
    <div class="card-body">
        <img src=${taskData.imageUrl} class="card-img-top" alt="...">
    <h5 class="card-title mt-2 text-primary fw-bold">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
</div>

</div>`;


const loadInitialCard=()=>{

    const getCardData=localStorage.getItem("tasky");
    //converting back to normal data
    const {cards}=JSON.parse(getCardData);
    cards.map((cardObject)=>{
        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
        globalStore.push(cardObject);
    })
};



var saveChanges=()=>{
var taskData={
        id:`${Date.now()}`,
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,

    };
    console.log(taskData);




taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
}


