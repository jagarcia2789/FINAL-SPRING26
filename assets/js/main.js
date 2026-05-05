document.addEventListener("DOMContentLoaded", () => {

let player = { x: 0, y: 0 };

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

function canMove(x, y) {
  const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  return cell && cell.classList.contains("path");
}

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

function checkMemory() {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-text");

  if (!popup || !img || !text) return; // safety check

  const key = `${player.x},${player.y}`;

  if (memories[key]) {
    img.src = memories[key].img;
    text.innerText = memories[key].text;
    popup.classList.remove("hidden");
  }
}

document.addEventListener("keydown", (e) => {
  let newX = player.x;
  let newY = player.y;

  if (e.key === "ArrowUp") newY--;
  if (e.key === "ArrowDown") newY++;
  if (e.key === "ArrowLeft") newX--;
  if (e.key === "ArrowRight") newX++;

  if (canMove(newX, newY)) {
    player.x = newX;
    player.y = newY;
  }

  drawPlayer();
  checkMemory();
});

drawPlayer();

});
