let currentPlayer = '1';
let counter = 0;
const currentBoard = [];

(function setBoard(){
    const board = document.getElementById('gameBoard');
    for (i=0; i<9;i++)
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
    if (!this.classList.contains('x') && !this.classList.contains('o'))
    {
        if (currentPlayer === '1')
        {
            const xpic = document.createElement('img');
            this.classList.add('x');
            this.appendChild(xpic);
            xpic.src = 'images/Ximg.png';
            changePlayer();
            checkGame();
            }
            else{
            const opic = document.createElement('img');
            this.classList.add('o')
            this.appendChild(opic);
            opic.src = 'images/Oimg.jpeg';
            changePlayer();
            checkGame();
        }
    }
    else{console.log('already picked')}
}

function changePlayer()
{
    if (currentPlayer === '1')
    {
        currentPlayer = '2'
    }
    else{ currentPlayer = '1'}
}

function checkGame()
{
    const b1 = currentBoard[0];
    const b2 = currentBoard[1];
    const b3 = currentBoard[2];
    const b4 = currentBoard[3];
    const b5 = currentBoard[4];
    const b6 = currentBoard[5];
    const b7 = currentBoard[6];
    const b8 = currentBoard[7];
    const b9 = currentBoard[8];
    counter ++;
    
    if ((b1.classList.contains('x') === true && b2.classList.contains('x') === true && b3.classList.contains('x') === true)
        || (b1.classList.contains('o') === true && b2.classList.contains('o') === true && b3.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b4.classList.contains('x') === true && b5.classList.contains('x') === true && b6.classList.contains('x') === true)
    || (b4.classList.contains('o') === true && b5.classList.contains('o') === true && b6.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b7.classList.contains('x') === true && b8.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b7.classList.contains('o') === true && b8.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b1.classList.contains('x') === true && b4.classList.contains('x') === true && b7.classList.contains('x') === true)
    || (b1.classList.contains('o') === true && b4.classList.contains('o') === true && b7.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b2.classList.contains('x') === true && b5.classList.contains('x') === true && b8.classList.contains('x') === true)
    || (b2.classList.contains('o') === true && b5.classList.contains('o') === true && b8.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b3.classList.contains('x') === true && b6.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b3.classList.contains('o') === true && b6.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b1.classList.contains('x') === true && b5.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b1.classList.contains('o') === true && b5.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if ((b3.classList.contains('x') === true && b5.classList.contains('x') === true && b7.classList.contains('x') === true)
    || (b3.classList.contains('o') === true && b5.classList.contains('o') === true && b7.classList.contains('o') === true)
    )
    {
        console.log('game');
    }
    else if(counter > 8)
    {
        console.log('tie')
    }
}