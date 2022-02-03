/*
function  ServiceImagesForPhone() {
    let sizeOfTheWindow = visualViewport.width;

    if (sizeOfTheWindow <= 600) {
        let classToBeSelected = document.querySelector('.imgs');
        classToBeSelected.classList.toggle('forPhones');
    } else {
        console.log("Wait until we have the size of phones bro!");
    }
}

ServiceImagesForPhone();
*/

function setImageForPhones() {
    let sizeOfTheWindow = visualViewport.width;
    
    if (sizeOfTheWindow <= 600) {
        console.log("The size of the window is by now: "+sizeOfTheWindow);
        let idToGiveTheClass1 = document.getElementById('img1');      
        idToGiveTheClass1.setAttribute("class", "forPhones");
        let idToGiveTheClass2 = document.getElementById('img2');      
        idToGiveTheClass2.setAttribute("class", "forPhones");
        let idToGiveTheClass3 = document.getElementById('img3');      
        idToGiveTheClass3.setAttribute("class", "forPhones");
        let idToGiveTheClass4 = document.getElementById('img4');      
        idToGiveTheClass4.setAttribute("class", "forPhones");
        let idToGiveTheClass5 = document.getElementById('img5');      
        idToGiveTheClass5.setAttribute("class", "forPhones");
        let idToGiveTheClass6 = document.getElementById('img6');      
        idToGiveTheClass6.setAttribute("class", "forPhones");
    } else {
        console.log("The size of the window is by now: "+sizeOfTheWindow);
        console.log("Wait until we have the size of phones bro!");
    }
}

setImageForPhones();