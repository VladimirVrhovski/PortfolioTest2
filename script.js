import anime from "../portfolioTest3/anime.es.js";

let wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

let toggled = false;
const tileOnLoad = (columns, rows) => {
    toggled = !toggled;
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(80, {
            grid: [columns, rows],
            from: Math.floor(columns*rows/2+columns/2)
        })
    })
}
const createTile = index => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}
const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}
const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
}

createGrid();
setTimeout(function () {tileOnLoad(columns,rows);}, 500);