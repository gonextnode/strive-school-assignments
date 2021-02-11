// App State
const state = {
  drawNumbers: [],
  boardsCount: 0,
  boards: [],
  boardNumbers: []
}

// Generates random numbers between 1 and 75
const randomNumbers = (max = 75) => {
  const num = Math.floor(Math.random() * max)
  return num
}

// used to generate one boards list data
const randomNumbersList = () => {
  let numsArray = []
  for (let i = 0; i < 75; i++) {
    numsArray.push(randomNumbers())
  }
  console.log(numsArray)
}

// receives input selection number of boards
// sets state to number of boards
const numberBoardsSelected = () => {
  const { value } = document.querySelector('input')
  state.boardsCount = value
  console.log(state.boardsCount)
  initBoardsData()
  handleGenerateBoard()
}

// resets board state from previous selection
// then sets multiple boards state as array matrix
const initBoardsData = () => {
  for (let i = 1; i < state.boardsCount; i++) {
    state.boards = [[randomNumbersList()], ...state.boards]
    console.log(state.boards)
  }
  randomNumbersList()
}

// drawhistory UI component
const drawHistoryComponent = () => {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(state.drawNumbers[0])
  node.appendChild(textNode)
  document.getElementById('drawnumbers').appendChild(node)
}

// TODO issues with square numbers not staying within the confines of the board

// boards UI component
const boardComponent = () => {
  const board = document.createElement('div')
  board.className = 'board'
  board.setAttribute('id', 'board')
  document.getElementById('boards').appendChild(board)
  for (let i = 0; i < 75; i++) {
    const square = document.createElement('div')
    square.innerText = i + 1
    document.getElementById('board').appendChild(square)
    square.className = 'square'
  }
}

// menu button game control
const handleGenerateBoard = () => {
  state.boardsCount = 1
  for (let i = 0; i < state.boardsCount; i++) {
    boardComponent()
  }
}

// menu button game control
const handleDrawNumber = () => {
  state.drawNumbers.unshift(randomNumbers())
  drawHistoryComponent()
}

// TODO FIX gracefully remove nodes instead of using location.reload
// clear state and boards
const clearBoardsState = () => {
  window.location.reload()
  state.boards = []
  state.boardsCount = 0
}
