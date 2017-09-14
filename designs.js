
//clears previous grid and builds new grid based on inputs

const tbl = document.getElementById("pixel_canvas");

document.getElementById("sub").addEventListener("click", function makeGrid() {
  
  //clear previously created grid before building new grid

  tbl.innerHTML = "";

  //select size input and set to width and height variables

  const width = document.getElementById("input_width").value;

  const height = document.getElementById("input_height").value;

  //height and width inputs to build a new grid

  for (let i = 0; i < height; i++) {
    const rows = document.createElement("tr");

    let j = 0;

    while (j < width) {
      const cells = document.createElement("td");

      j++;

      rows.appendChild(cells);
    }

    tbl.appendChild(rows);
  }
  associateCellEvents();
});

//call the changeColour function on the selected table cell

const associateCellEvents = () => {
  for (let i = 0; i < tbl.rows.length; i++) {
    for (let j = 0; j < tbl.rows[i].cells.length; j++)
      tbl.rows[i].cells[j].onclick = function makeGrid() {
        changeColour(this);
      };
  }
};

const changeColour = cell => {
  const colour = document.getElementById("colorPicker").value;

  cell.style.backgroundColor = colour;
};

const validateForm = () => {
  return false;
};
