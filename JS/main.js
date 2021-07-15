// import Index  from "./index.js";
// import Indexview from './indexview.js';

// let index = new Index()
// let indexView = new Indexview();

// document.querySelector('.start')
// .addEventListener('click',()=>{
//     console.log("new Gamne")
//     onStartClick()
// })
// let tiles = document.querySelectorAll(".board-title")
// // console.log(tiles)
// tiles.forEach((tile)=>{
//   tile.addEventListener('click',()=>{
//     // console.log(tile.dataset.index)
//     onTileClick(tile.dataset.index)
//   })
// })

// function onTileClick(i){
// // do something
//         index.makeMove(i)
//         // make a move
//         // update board
//        indexView.updateBoard(index)
// }

// function onStartClick(){
//     index = new Index()
//     indexView.updateBoard(index)
// }

// indexView.updateBoard(index)


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