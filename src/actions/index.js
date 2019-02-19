export const SnakeTurn = (direction) => ({
  type: 'SET_SNAKE_DIRECTION',
  direction
})

export const SnakeDirections = {
  SNAKE_UP: 'SNAKE_UP',
  SNAKE_DOWN: 'SNAKE_DOWN',
  SNAKE_RIGHT: 'SNAKE_RIGHT',
  SNAKE_LEFT: 'SNAKE_LEFT'
}