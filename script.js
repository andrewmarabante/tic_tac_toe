let currentPlayer = '1';
const currentBoard = [];

(function setBoard(){
    const board = document.getElementById('gameBoard');
    for (i=1; i<=9;i++)
    {
        const block = document.createElement('div');
        block.addEventListener('click',changeBlock);
        block.classList.add('boardBlock');
        block.innerHTML= '';
        block.number = `${i}`;
        block.check = 'false';
        board.appendChild(block);
        currentBoard.push(block)
    }
})();

function changeBlock()
{
    if (currentPlayer === '1')
    {
    let xpic = document.createElement('img');
    this.classList.add('x');
    this.appendChild(xpic);
    xpic.src = 'images/Ximg.png';
    changePlayer();
    }
    else{
    const opic = document.createElement('img');
    this.classList.add('o')
    this.appendChild(opic);
    opic.src = 'images/Oimg.jpeg';
    changePlayer();
}
}

function changePlayer()
{
    if (currentPlayer === '1')
    {
        currentPlayer = '2'
    }
    else{ currentPlayer = '1'}
}