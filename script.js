
var gridBtn = document.querySelector('.select');
var maingrid = document.getElementById('maingrid');
function createGrid(rows,cols){
    clearExisting();
    maingrid.style.setProperty('display','inline-grid');
    maingrid.style.setProperty('grid-template-columns','repeat('+cols+', auto)');
    maingrid.style.setProperty('grid-template-rows','repeat('+rows+', auto)');
    // console.log(maingrid.style);
    var side = Math.sqrt((window.innerHeight*window.innerWidth)/(rows*cols))
    maingrid.style.height = rows*side + "px";
    maingrid.style.width = cols*side + "px"; 
    addDivs(rows*cols,side);
}

function addDivs(count,side){
    console.log('creating divs');
    for(var i = 0;i<(count);i++){
        var div = document.createElement('div');
        div.style.setProperty('height',side+"px");
        div.style.setProperty('width',side+"px");
        div.classList.add('cell');
        maingrid.appendChild(div);
    }
}

function selectGridSize(evt){
    let sqRows = prompt("No of squares vertically");
    let sqCols = prompt("No of squares horizontally?");
    createGrid(sqRows,sqCols);
}

function clearExisting(){
    if(document.getElementById('maingrid')){
        maingrid.removeAttribute('style');
        maingrid.textContent = '';
    }
}
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 


gridBtn.addEventListener('click',(evt) => selectGridSize(evt));