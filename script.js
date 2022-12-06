
div = document.querySelector('.container');
div.style.cssText="display: grid; grid-template-columns: repeat(16,1fr);";
for(i=0;i<256;i++){
    //result.textContent
    squares= document.createElement('div');
    squares.classList.add(`grid`);
    div.appendChild(squares);
    /*for(j=0;j<16;j++){
        gridcolum=document.querySelector(`.grid${i}`);
        rows= document.createElement('div');
        rows.classList.add(`column${j}`);
        gridcolum.appendChild(rows);
    }*/
}