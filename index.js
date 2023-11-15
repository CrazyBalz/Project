let turn = "x";

function getBlock(blockId) {
    return document.getElementById(blockId);
}

function reset() {
    getBlock('r1c1').textContent = ""
    getBlock('r1c2').textContent = ""
    getBlock('r1c3').textContent = ""
    getBlock('r2c1').textContent = ""
    getBlock('r2c2').textContent = ""
    getBlock('r2c3').textContent = ""
    getBlock('r3c1').textContent = ""
    getBlock('r3c2').textContent = ""
    getBlock('r3c3').textContent = ""
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
    checkWinner();
}

function checkWinner() {
    const winners = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [6, 4, 2], [0, 4, 8]]
    let blocks = [];
    blocks = [...blocks, getBlock('r1c1').textContent]
    blocks = [...blocks, getBlock('r1c2').textContent]
    blocks = [...blocks, getBlock('r1c3').textContent]
    blocks = [...blocks, getBlock('r2c1').textContent]
    blocks = [...blocks, getBlock('r2c2').textContent]
    blocks = [...blocks, getBlock('r2c3').textContent]
    blocks = [...blocks, getBlock('r3c1').textContent]
    blocks = [...blocks, getBlock('r3c2').textContent]
    blocks = [...blocks, getBlock('r3c3').textContent]
    console.log(blocks)
}