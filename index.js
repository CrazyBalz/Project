let turn = "x";
let state = [];

function getBlock(blockId) {
    return document.getElementById(blockId);
}

function onClick(input) {
    const block = getBlock(input)
    console.log("Clicked: ", input);
    console.log(block);
    if (block.textContent != '') {
        alert("You clicked a box that was already filled");
        return
    }
    if (turn == 'x') {
        block.textContent = 'X';
        turn = 'o'

    }
    else {
        block.textContent = 'O';
        turn = 'x';
    }

}
