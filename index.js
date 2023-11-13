let turn = "x";

function getBlock(blockId) {
    return document.getElementById(blockId);
}

function reset() {
  // for (let i = 0; i < 9; i++) {
  //   getBlock(`r${Math.floor(i / 3)}c${i}`).textContent = ""
  // }
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

}
