let player = { x: 0, y: 0 };

// 📸 Your 5 memories
const memories = {
  "0,0": {
    img: "assets/img/Pic-1.jpg",
    text: "When I was a little kid"
  },
  "0,1": {
    img: "assets/img/Pic-2.JPG",
    text: "Played soccer growing up"
  },
  "1,1": {
    img: "assets/img/Pic-3.JPG",
    text: "Started reselling sneakers"
  },
  "1,2": {
    img: "assets/img/Pic-4.JPG",
    text: "Travel the world to create new memories"
  },
  "2,2": {
    img: "assets/img/Pic-5.JPG",
    text: "Ofc I have to work"
  }
};

//  Check if player can move there (must be a path cell)
function canMove(x, y) {
  const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  return cell && cell.classList.contains("path");
}

// 🎮 Draw player position
function drawPlayer() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("player");

    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);

    if (x === player.x && y === player.y) {
      cell.classList.add("player");
    }
  });
}

// 📸 Show memory popup if exists
function checkMemory() {
  const key = `${player.x},${player.y}`;

  if (memories[key]) {
    document.getElementById("popup-img").src = memories[key].img;
    document.getElementById("popup-text").innerText = memories[key].text;
    document.getElementById("popup").classList.remove("hidden");
  }
}

// Movement controls
document.addEventListener("keydown", (e) => {
  let newX = player.x;
  let newY = player.y;

  if (e.key === "ArrowUp") newY--;
  if (e.key === "ArrowDown") newY++;
  if (e.key === "ArrowLeft") newX--;
  if (e.key === "ArrowRight") newX++;

  // only move if valid path
  if (canMove(newX, newY)) {
    player.x = newX;
    player.y = newY;
  }

  drawPlayer();
  checkMemory();
});

// 🚀 initial render
drawPlayer();
