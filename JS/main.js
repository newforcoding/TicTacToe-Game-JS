import Index from './index.js'
import Indexview from './indexview.js'

let index = new Index()
let indexView = new Indexview()

document.querySelector('.start').addEventListener('click',()=>{
// console.log('start new game')
onRestartGame()
})

const tiles = document.querySelectorAll(".board-title")
tiles.forEach((tile)=>{
    tile.addEventListener('click',()=>{
        onTileClick(tile.dataset.index)
    })
})

function onTileClick(i){
    index.makeMove(i)
    indexView.updateBoard(index)
}

function onRestartGame(){
    index = new Index()
    indexView.updateBoard(index)
}

indexView.updateBoard(index)