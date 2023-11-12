const canvas = document.getElementById('canvas-container')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGTH = (canvas.height = 600)

const playerImage = new Image()
playerImage.src = './assets/image/shadow_dog.png'
const spriteWidth = 575
const spriteHeigth = 523

let gameFrame = 0
let staggerFrame = 2

const spriteAnimations = []
const animationStates = [
  {
    name: 'idle',
    frames: 7
  },
  {
    name: 'jump',
    frames: 7
  },
  {
    name: 'fall',
    frames: 7
  },
  {
    name: 'run',
    frames: 9
  },
  { name: 'dizzy', frames: 11 },
  {
    name: 'sit',
    frames: 5
  },
  {
    name: 'roll',
    frames: 7
  },
  {
    name: 'bite',
    frames: 7
  },
  {
    name: 'ko',
    frames: 12
  },
  {
    name: 'getHit',
    frames: 4
  }
]

const globalState = 'ko'

animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }

  for (let i = 0; i < state.frames; i++) {
    frames.loc.push({ x: i * spriteWidth, y: index * spriteHeigth })
  }

  spriteAnimations[state.name] = frames
})

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH)

  position =
    Math.floor(gameFrame / staggerFrame) %
    spriteAnimations[globalState].loc.length

  let frameX = spriteAnimations[globalState].loc[position].x
  let frameY = spriteAnimations[globalState].loc[position].y

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeigth,
    0,
    0,
    spriteWidth,
    spriteHeigth
  )

  gameFrame++

  requestAnimationFrame(animate)
}

animate()
