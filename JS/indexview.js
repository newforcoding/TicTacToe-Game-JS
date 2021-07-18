export default class Indexview{

 updateBoard(index){
     this.updateTurn(index);
    const winningCombination = index.findWinningCombinations()
    console.log(winningCombination)
     for(let i=0;i<index.board.length;i++){
         const tile = document.querySelector(`.board-title[data-index='${i}']`)
        //  console.log(tile)

        tile.classList.remove('tile-winner')
        
        const tileType = index.board[i] == 'X' ?
        'tile-x' : 'tile-o';

        tile.innerHTML = `<span class="${tileType}">
        ${index.board[i] ? index.board[i]: ""}</span>`

        if(winningCombination && winningCombination.includes(i)){
            tile.classList.add('tile-winner');
        }
        
    }
 }
 updateTurn(index){
     let playerX=document.querySelector('.player-x');
     let playerO=document.querySelector('.player-o');
    
    playerX.classList.remove("active")
    playerO.classList.remove("active")

     if(index.turn == 'X'){
         playerX.classList.add('active')
     }
     else{
         playerO.classList.add('active')
     }
 }
}