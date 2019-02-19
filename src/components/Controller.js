import React from 'react'
import gameControllerClick from '../reducers/gameController'

const Controller = ({ text, action }) => (
  <button onClick={() => gameControllerClick(action)}>{text}</button>
)

export default Controller