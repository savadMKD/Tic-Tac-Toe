const boxes = Array.from(document.getElementsByClassName('box'));
const play_text = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');

const spaces = [];
const O_TEXT = "0";
const X_TEXT = "X";

let current_player;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if(index < 3){
            styleString += 'border-bottom: 3px solid var(--purple);'
        }
        if(index % 3 === 0){
            styleString += 'border-right: 3px solid var(--purple);'
        }
        if(index % 3 === 2){
            styleString += 'border-left: 3px solid var(--purple);'
        }
        if(index > 5){
            styleString += 'border-top: 3px solid var(--purple);'
        }
        box.style = styleString
        box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = current_player;
        e.target.innerText = current_player;

        if(playerHasWon(current_player)){
            play_text.innerText = `${current_player} has Won!`
            return;
        }
        current_player = current_player === O_TEXT ? X_TEXT : O_TEXT
    }
};

const playerHasWon = () => {
    if(spaces[0] === current_player){
        if(spaces[1] === current_player && spaces[2] === current_player){
            console.log(`${current_player} Wins Up Top`)
            return true;
        }
        if(spaces[3] === current_player && spaces[6] === current_player){
            console.log(`${current_player} Wins On The Left`)
            return true;
        }
        if(spaces[4] === current_player && spaces[8] === current_player){
            console.log(`${current_player} Wins On Diagonely`)
            return true;
        }
    }
    else if(spaces[8] === current_player) {
        if(spaces[2] === current_player && spaces[5] === current_player){
            console.log(`${current_player} Wins On The Right`)
            return true;
        }
        if(spaces[6] === current_player && spaces[7] === current_player){
            console.log(`${current_player} Wins On The bottom`)
            return true;
        }
    }
    else if(spaces[4] === current_player) {
        if(spaces[1] === current_player && spaces[7] === current_player){
            console.log(`${current_player} Wins vertically in the middle`)
            return true;
        }
        if(spaces[3] === current_player && spaces[5] === current_player){
            console.log(`${current_player} Wins horizondelly in the middle`)
            return true;
        }
    }
};

const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null
    });
    boxes.forEach(box => {
        box.innerText = '';
    });
    play_text.innerText = `Let's Play!`;
    current_player = O_TEXT
}
restartBtn.addEventListener('click', restart);

restart();
drawBoard();