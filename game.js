
const grid = document.getElementById("grid");
const result = document.getElementById("result");

const puzzle = [
  { c:"blue",   r:90,  answer:0 },
  { c:"red",    r:180, answer:90 },
  { c:"red",    r:270, answer:0 },
  { c:"purple", r:90,  answer:180 },
  { c:"purple", r:0,   answer:90 },

  { c:"blue",   r:180, answer:90 },
  { c:"", r:0 },
  { c:"yellow", r:270, answer:0 },
  { c:"", r:0 },
  { c:"purple", r:180, answer:0 },

  { c:"blue",   r:90,  answer:180 },
  { c:"green",  r:270, answer:0 },
  { c:"green",  r:90,  answer:180 },
  { c:"green",  r:180, answer:90 },
  { c:"green",  r:0,   answer:270 }
];

function createTile(tile) {
  const div = document.createElement("div");

  if (!tile.c) {
    div.style.visibility = "hidden";
    return div;
  }

  div.className = `pipe ${tile.c} r${tile.r}`;
  div.dataset.rot = tile.r;
  div.dataset.answer = tile.answer;

  div.addEventListener("click", () => rotate(div));
  return div;
}

function rotate(pipe) {
  let r = (+pipe.dataset.rot + 90) % 360;
  pipe.dataset.rot = r;
  pipe.className = pipe.className.replace(/r\d+/, `r${r}`);
  checkSolved();
}

function checkSolved() {
  const pipes = document.querySelectorAll(".pipe");

  const solved = [...pipes].every(
    p => p.dataset.rot == p.dataset.answer
  );

  result.textContent = solved ? "✅ Puzzle Solved" : "";
}

puzzle.forEach(tile => grid.appendChild(createTile(tile)));



