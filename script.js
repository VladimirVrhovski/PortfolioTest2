import anime from './anime.es.js';

let wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

let toggled = false;

const tileOnClick = index => {
    toggled=!toggled;
    
    document.getElementById("container").classList.toggle("toggled");
    document.body.classList.toggle("overflow");

    document.getElementById("openMenu").checked = false;

    window.scrollTo({top: 0, behavior: "smooth"});

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

const createTile = index => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = e => tileOnClick(index);
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index))
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
window.onresize = () => createGrid();

window.scrollTo({top: 0, behavior: "smooth"});

function home() {
    document.getElementById("container").classList.remove("toggled");
    document.getElementById("openMenu").checked = false;
    window.scrollTo({top: 0, behavior: "smooth"});
}