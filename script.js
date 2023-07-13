document.addEventListener("DOMContentLoaded", function(){
createBoard(16);
console.log("hi");
});

function createBoard(size){
    let board=document.querySelector(".board");

    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns =`repeat(${size}, 1fr)`;

    let numDivs=size*size;
    for (i=0; i<numDivs;i++){
        let div=document.createElement("div");
        div.style.backgroundColor="lightblue";
        board.insertAdjacentElement("beforeend",div);
    }
}
