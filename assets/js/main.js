let player = { x: 0, y: 0 };

const memories = {
  "1,0": {
    img: "assets/img/Pic-1.jpg",
    text: "This is me when I was young."
  },
  "2,1": {
    img: "assets/img/Pic-2.JPG",
    text: "Soccer was a big part of my life."
  },
  "0,2": {
    img: "assets/img/Pic-3.JPG",
    text: "Started my sneaker business."
  },
  "1,2": {
    img: "assets/img/Pic-4.JPG",
    text: "Traveling the world."
  },
  "2,2": {
    img: "assets/img/Pic-5.JPG",
    text: "Work is important."
  }
};

function drawPlayer() {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.remove("player");

    let x = cell.dataset.x;
    let y = cell.dataset.y;

    if (x == player.x && y == player.y) {
      cell.classList.add("player");
    }
  });
}

function checkMemory() {
  let key = `${player.x},${player.y}`;

  if (memories[key]) {
    document.getElementById("popup-img").src = memories[key].img;
    document.getElementById("popup-text").innerText = memories[key].text;
    document.getElementById("popup").classList.remove("hidden");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") player.y--;
  if (e.key === "ArrowDown") player.y++;
  if (e.key === "ArrowLeft") player.x--;
  if (e.key === "ArrowRight") player.x++;

  // keep inside grid
  player.x = Math.max(0, Math.min(2, player.x));
  player.y = Math.max(0, Math.min(2, player.y));

  drawPlayer();
  checkMemory();
});

drawPlayer();
