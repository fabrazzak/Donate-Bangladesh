

function donationHandle() {
    // section hidden and showing 
    addClass("history", "hidden")
    removeClass("donation", "hidden")
    // btn active color 
    addClass("btn-donation", "bg-green-500")
    removeClass("btn-history", "bg-green-500")
    addClass("blog-section", "hidden")
}

function historyHandle() {
    // section hidden and showing 
    addClass("donation", "hidden");
    removeClass("history", "hidden");
    // btn active color 
    addClass("btn-history", "bg-green-500")
    removeClass("btn-donation", "bg-green-500")
    addClass("blog-section", "hidden")

}


function donateNow(inputText, ExistFund, reasonFactModal,   title) {
    const date = new Date()
    // get value and parse integer 
    const donateMoney = inputToNumber(inputText)
    //   get text then perse integer  and  summation 
    const existMoney = textToNumber(ExistFund);
    const totalFund = donateMoney + existMoney;
    // my total money decrease      
    const personalMoney = textToNumber("personal-balance");
    //    All Math , Modal and div showing 
    if (personalMoney > donateMoney) {
        if (donateMoney > 0) {
            const totalPersonalMoney = personalMoney - donateMoney;
            setTextNumber("personal-balance", totalPersonalMoney);
            setTextNumber(ExistFund, totalFund);
            // modal data update 
            modalDataUpdate(reasonFactModal, "donate-reason-place", "donate-money" , donateMoney)
            // history data send 
            createDiv("history-container", title, donateMoney);
            my_modal_5.showModal();
        }
        else {
            alert("Please type positive Number")
        }
    } else {
        alert("Your fund is low")
    }
    document.getElementById(inputText).value = "";
}


function floodDonateNow() {
    donateNow("donate-input", "noakhali-fund", "flood-Noakhali",  "flood-title");
}

function floodReliefDonateNow(){
    donateNow("relief-input", "relief-fund",  "relief-feni",  "relief-title");   
}

function quotaDonateNow(){
    donateNow("quota-input", "quota-fund", "injured-quota",  "quota-title");    
}



// blog section 

document.getElementById("blog-btn").addEventListener("click",function(){

    addClass("history", "hidden")
    addClass("donation", "hidden")
    removeClass("blog-section", "hidden")


})

