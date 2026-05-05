let player = { x: 0, y: 0 };

const size = 3;

// build grid
const maze = document.getElementById("maze");

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.x = x;
    cell.dataset.y = y;
    maze.appendChild(cell);
  }
}

const memories = {
  "0,0": { img: "", text: "Start" },
  "1,0": { img: "", text: "Memory 1" },
  "2,1": { img: "", text: "Memory 2" },
  "0,2": { img: "", text: "Memory 3" },
  "2,2": { img: "", text: "End" }
};

function draw() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("player");

    if (
      parseInt(cell.dataset.x) === player.x &&
      parseInt(cell.dataset.y) === player.y
    ) {
      cell.classList.add("player");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") player.x++;
  if (e.key === "ArrowLeft") player.x--;
  if (e.key === "ArrowUp") player.y--;
  if (e.key === "ArrowDown") player.y++;

  player.x = Math.max(0, Math.min(2, player.x));
  player.y = Math.max(0, Math.min(2, player.y));

  draw();
});

draw();
