let color="black";
let click=false;

document.addEventListener("DOMContentLoaded", function(){
createBoard(16);

document.querySelector("body").addEventListener("click", function(e){
    if (e.target.tagName != "BUTTON"){
        click = !click;
        let draw=document.querySelector("#draw");
        if (click){
            draw.textContent="You are allowed to draw";
        }
        else {
            draw.textContent="You are not allowed to draw";
        }
    }

})

let promptButton=document.querySelector("#prompt");
promptButton.addEventListener("click", function(){
    let size=getUserInput();
    createBoard(size);
})
});

function createBoard(size){
    let board=document.querySelector(".board");

    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;

    let numDivs=size*size;
    for (i=0; i<numDivs;i++){
        let div=document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend",div);
    }
}

function getUserInput(){
    let input=prompt("Enter the size of the board:");
    let message=document.querySelector("#message");
    if (input == ""){
        message.textContent="Please enter the number!"
    }
    else if (input <0 || input>100 ){
        message.textContent="Enter the number between 0 and 100!"
    }
    else {
        message.textContent="Let's play!"
        return input;
    }
}

function colorDiv(){
    if (click){
        if (color=="random"){
        this.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`
        }
        else {
        this.style.backgroundColor="black";
        }
    }

}

function setColor(colorChoice){
     color=colorChoice;

}

function resetBoard(){
    let divs=document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor="white");
    
}