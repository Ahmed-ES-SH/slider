let arrayimgs = Array.from(document.querySelectorAll(".imgs-container img"));
let slidelength = arrayimgs.length;
let currentside = 1 ;
let slidenumberele = document.querySelector(".slide-number");
let slidecontrol = document.querySelector(".slider-controls .bullets")
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let creatulelement = document.getElementById("bullest")

btnNext.addEventListener("click" , () => {
    if (btnNext.classList.contains("disabled")) {
        return false ;
    }
    else {
        currentside++
        thechecker();
    }
})
btnPrev.addEventListener("click" , () => {
    if (btnPrev.classList.contains("disabled")) {
        return false ;
    }
    else {
        currentside--
        thechecker();
    }
})

// creat bullets
let elementul = document.createElement("ul")
elementul.setAttribute("id","parent-ul")


for(let i = currentside ; i <= slidelength ; i++ ) {
    let elementli = document.createElement("li")
    elementli.setAttribute("data-index",i)
    elementli.appendChild(document.createTextNode(i))
    elementul.appendChild(elementli)
}
creatulelement.appendChild(elementul);

//array for li element
let ul = document.getElementById("parent-ul");
let ularray = Array.from(document.querySelectorAll("#parent-ul li"))

for (let m = 0 ; m< ularray.length ; m++) {
    ularray[m].onclick = function () {
        currentside = parseInt(this.getAttribute("data-index"))
        thechecker();
    }
}




thechecker ();








function thechecker () {
    //number for slider 
    slidenumberele.textContent = `slide # ${currentside} of ${slidelength}`
    
    //remove all class active from li and img
    removeclassactive();
    
    //add class active to elment
    arrayimgs[currentside -1].classList.add("active")

    //add class active to bullet
    ularray[currentside -1].classList.add("active")

    //cheak if currentslider == 1
    if (currentside == 1) {
        btnPrev.classList.add("disabled")
    }
    else {
        btnPrev.classList.remove("disabled")
    }

    //cheak if current == slidlenght
    if (currentside == slidelength) {
        btnNext.classList.add("disabled")
    }
    else{
        btnNext.classList.remove("disabled")
    }
}



function removeclassactive () {
    arrayimgs.forEach((img) => {
        img.classList.remove("active")
    })
    ularray.forEach((bullet) => {
        bullet.classList.remove("active")
    })
}

