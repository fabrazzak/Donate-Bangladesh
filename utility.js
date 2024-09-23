function getEById(id){

    const element= document.getElementById(id);
    return element

}

function addClass( id, className ){
    const doc= getEById(id);
    doc.classList.add(className)
    
}

function removeClass( id, className ){
    const doc= getEById(id);
    doc.classList.remove(className)
    
}

function textToNumber(id){
    const donateInput = document.getElementById(id).innerText;
    const donateMoney = parseInt(donateInput)
    return donateMoney

}
function inputToNumber(id){
    console.log(id)
    const donateInput = document.getElementById(id).value;
    console.log(donateInput)
    const donateMoney = parseInt(donateInput)
    console.log(donateMoney)
    return donateMoney

}

function setTextNumber(id,value){
    document.getElementById(id).innerText = value;

}

function createDiv(containerId,reasonTitleId, donateMoney){
    const date = new Date()

    const historyContainer = document.getElementById(containerId);
    const floodTitle = document.getElementById(reasonTitleId).innerText;
    const newDiv = document.createElement("div");
    newDiv.classList.add("border", "p-10", "rounded-xl", "space-y-5");
    newDiv.innerHTML = `
          <h2 class="text-2xl font-bold ">${donateMoney} Taka ${floodTitle}</h2> 
          <p> Date: ${date}</p>  `
    const historyAdd= historyContainer.appendChild(newDiv);
    return historyAdd

}


function modalDataUpdate(reasonText,reasonPlace,donateMoneyPlace,donateMoney){

    // modal reason showing 
    const floodNoakhali = document.getElementById(reasonText).innerText;

    document.getElementById(reasonPlace).innerText = floodNoakhali;
    document.getElementById(donateMoneyPlace).innerText = donateMoney;


}

