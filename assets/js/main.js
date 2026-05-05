let player = { x: 0, y: 0 };

// build grid automatically
const maze = document.getElementById("maze");

for (let y = 0; y < 3; y++) {
  for (let x = 0; x < 3; x++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.dataset.x = x;
    cell.dataset.y = y;

    maze.appendChild(cell);
  }
}

// memories
const memories = {
  "0,0": {
    img: "assets/img/Pic-1.jpg",
    text: "When I was a little kid"
  },
  "1,0": {
    img: "assets/img/Pic-2.JPG",
    text: "Played soccer growing up"
  },
  "1,1": {
    img: "assets/img/Pic-3.JPG",
    text: "Started reselling sneakers"
  },
  "1,2": {
    img: "assets/img/Pic-4.JPG",
    text: "Traveling the world"
  },
  "2,2": {
    img: "assets/img/Pic-5.JPG",
    text: "Work life"
  }
};

function drawPlayer() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("player");

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);

    if (x === player.x && y === player.y) {
      cell.classList.add("player");
    }
  });
}

function checkMemory() {
  const key = `${player.x},${player.y}`;
  const data = memories[key];

  if (data) {
    document.getElementById("popup-img").src = data.img;
    document.getElementById("popup-text").innerText = data.text;
    document.getElementById("popup").classList.remove("hidden");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") player.x++;
  if (e.key === "ArrowLeft") player.x--;
  if (e.key === "ArrowUp") player.y--;
  if (e.key === "ArrowDown") player.y++;

  player.x = Math.max(0, Math.min(2, player.x));
  player.y = Math.max(0, Math.min(2, player.y));

  drawPlayer();
  checkMemory();
});

// start
drawPlayer();
