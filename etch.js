// Bind querySelector to be lazier
//const $q = document.querySelector.bind(document);
const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.btn-reset');
let gridSize = 16;

window.onload = (e) => {
  createGrid(gridSize);
  setEvents(resetButton);
};



function createGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
      const div = document.createElement('div');
      div.classList.add('game-grid');
      div.style.cssText = `grid-row: ${i}; grid-column: ${j}`;
      setEvents(div);
      gridContainer.appendChild(div);
    }
  }
}

function setEvents(element) {
  if (element.className === 'game-grid' ) {
    element.addEventListener('mouseenter', () => {
      element.style.background = 'black';
    })
  } else if (element.className === 'btn-reset') {
    element.addEventListener('click', (e) => {
      resetGrid();
    })
  }
}

function resetGrid() {
  let newSize = undefined;
  do {
    newSize = prompt('Please enter a new grid size between 16 and 64');
  } while ((+newSize < 16) || (+newSize > 64));
  wipeGrid();
  resizeGrid(newSize);
}

function resizeGrid(newSize) {
  gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 16fr)`;
  gridContainer.style.gridTemplateRows =  `repeat(${newSize}, 16fr)`;
  createGrid(newSize);
}

function wipeGrid() {
  let div = document.querySelectorAll('.game-grid');
  div.forEach((grid) => {
    grid.parentNode.removeChild(grid);
  });
}