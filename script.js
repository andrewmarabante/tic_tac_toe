let currentPlayer = '1';
let counter = 0;
let freeze = 'false';
let xscore = 0;
let oscore = 0;
document.getElementById('reset').addEventListener('click', reset)
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
    if (!this.classList.contains('x') && !this.classList.contains('o') && (freeze === 'false'))
    {
        if (currentPlayer === '1')
        {
            this.classList.add('x');
            changePlayer();
            checkGame();
            }
            else{
            this.classList.add('o')
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
    const xwl = document.getElementById('xwl');
    const owl = document.getElementById('owl');
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
        if ((b1.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b4.classList.contains('x') === true && b5.classList.contains('x') === true && b6.classList.contains('x') === true)
    || (b4.classList.contains('o') === true && b5.classList.contains('o') === true && b6.classList.contains('o') === true)
    )
    {
        if ((b4.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b7.classList.contains('x') === true && b8.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b7.classList.contains('o') === true && b8.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        if ((b7.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b1.classList.contains('x') === true && b4.classList.contains('x') === true && b7.classList.contains('x') === true)
    || (b1.classList.contains('o') === true && b4.classList.contains('o') === true && b7.classList.contains('o') === true)
    )
    {
        if ((b1.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b2.classList.contains('x') === true && b5.classList.contains('x') === true && b8.classList.contains('x') === true)
    || (b2.classList.contains('o') === true && b5.classList.contains('o') === true && b8.classList.contains('o') === true)
    )
    {
        if ((b2.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b3.classList.contains('x') === true && b6.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b3.classList.contains('o') === true && b6.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        if ((b3.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b1.classList.contains('x') === true && b5.classList.contains('x') === true && b9.classList.contains('x') === true)
    || (b1.classList.contains('o') === true && b5.classList.contains('o') === true && b9.classList.contains('o') === true)
    )
    {
        if ((b1.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if ((b3.classList.contains('x') === true && b5.classList.contains('x') === true && b7.classList.contains('x') === true)
    || (b3.classList.contains('o') === true && b5.classList.contains('o') === true && b7.classList.contains('o') === true)
    )
    {
        if ((b3.classList.contains('x') === true))
        {
            xscore++;
            xwl.innerHTML = 'You Win'
            freeze = 'true'
        }
        else{
            oscore++;
            owl.innerHTML = 'You Win'
            freeze = 'true'
        }
    }
    else if(counter > 8)
    {
        xwl.innerHTML = 'Tie'
        owl.innerHTML = 'Tie'
    }
}

function reset()
{
    for (i=0;i<9; i++)
    {
        if(currentBoard[i].classList.contains('x') === true)
        {
            currentBoard[i].classList.remove('x')
        }
        else if(currentBoard[i].classList.contains('o') === true)
        {
            currentBoard[i].classList.remove('o')
        }
    }
    counter = 0;
    currentPlayer = '1';
    freeze = 'false';
    document.getElementById('xwl').innerHTML = '';
    document.getElementById('owl').innerHTML = '';
}