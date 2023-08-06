const currentBoard = [];

(function setBoard(){
    const board = document.getElementById('gameBoard');
    for (i=1; i<=9;i++)
    {
        const block = document.createElement('div');
        block.addEventListener('click',changeColor);
        block.classList.add('boardBlock');
        block.number = `${i}`;
        block.check = 'false';
        board.appendChild(block);
        currentBoard.push(block)
        console.log(currentBoard[i]);
    }
})();

function changeColor()
{
    this.classList.add('red')
    console.log(this);
}