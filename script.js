const container = document.querySelector("#container");

// function for creating square grid divs
function createGrid(n) {
  // delete the HTML content of the div element
  container.innerHTML = "";

  const containerWidth = container.clientWidth; // Dynamically get the container's width
  // Calculate the size of each square based on the container's width
  const squareSize = containerWidth / n;

  // loop to create nxn squares
  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div");

    // add style with css
    square.classList.add("square");

    // Set the size for each square
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect for random color
    square.addEventListener("mouseover", (event) => {
      event.currentTarget.style.backgroundColor = getRandomColor();
    });

    // append the grid item to the container
    container.appendChild(square);
  }
}

// function to generate a random RGB color to set up a hover effect to the squares
function getRandomColor() {
  // item.currentTarget.style.backgroundColor = "pink";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// create the initial 16x16 grid
createGrid(16);

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  let input = prompt("Enter the number of squares per side (max 100):");
  let number = parseInt(input);

  if (isNaN(number)) {
    alert("Please enter a valid number.");
  } else if (number >= 1 && number <= 100) {
    createGrid(number);
  } else {
    alert("Enter a number  between 1 and 100.");
  }
});
