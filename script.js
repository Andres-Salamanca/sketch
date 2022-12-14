
let div = document.querySelector('.container');
let slider = document.querySelector('.slider');
let grids;
removeElements();
createBoard();
slider.onchange =function(){
    removeElements()
    createBoard();
};
function createBoard(){
    div.style.cssText=`display: grid; grid-template-columns: repeat(${slider.value},1fr);`;
    for(i=0;i<(slider.value*slider.value);i++){//need to change the for maximun depending on number of squares
        let squares= document.createElement('div');
        squares.classList.add(`grid`);
        div.appendChild(squares);
    }
    grids = document.querySelectorAll('.grid')
    console.log(grids);
    grids.forEach(grid =>{
        grid.addEventListener('mouseover',()=>{
            grid.style.cssText='background-color:black;';
        });
    })

}
function removeElements() {
    const list = document.querySelector(".container");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    }
}
