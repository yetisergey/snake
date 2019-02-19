import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snake from './Snake';
import Food from './Food';
import {WIDTH_GAMEOBJECT} from './GameObject';

class GameField extends Component {
    componentDidMount() {
        this.refs.canvas.width = 500;
        this.refs.canvas.height = 500;
        this.ctx = this.refs.canvas.getContext('2d');
        this.snake = new Snake();
        this.food = this.generateFood();
        this.startGameField();
        this.addControlls();
    }

    generateFood(){
        return new Food(
            this.getRandomInt(this.refs.canvas.width),
            this.getRandomInt(this.refs.canvas.height)
        );
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * (max / WIDTH_GAMEOBJECT)) * WIDTH_GAMEOBJECT;
    }

    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    removeRect({ x, y, width, height }) {
        this.drawRect(x, y,width, height, '#FFF');
    }

    addRect({ x, y, width, height }, color = '#000') {
        this.drawRect(x, y, width, height, color );
    }

    addControlls() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 38) {
                this.snake.turnUp()
            }
            if (e.keyCode === 39) {
                this.snake.turnRight()
            }
            if (e.keyCode === 40) {
                this.snake.turnDown()
            }
            if (e.keyCode === 37) {
                this.snake.turnLeft()
            }
        })
    }

    startGameField() {
        const interval = setInterval(() => {
            if ((this.snake.x === 0 && this.snake.xSpeed === -1) ||
                (this.snake.y === 0 && this.snake.ySpeed === -1) ||
                (this.snake.x + WIDTH_GAMEOBJECT === this.refs.canvas.width && this.snake.xSpeed === 1) ||
                (this.snake.y + WIDTH_GAMEOBJECT === this.refs.canvas.width && this.snake.ySpeed === 1)) {
                    alert("game over")
                    this.snake.stop()
                    window.clearInterval(interval)
                    return;
            }

            const oldHead = {...this.snake}
            this.removeRect(this.snake)
            this.snake.move()
            this.addRect(this.snake)

            if(this.snake.Equals(this.food)){
                this.snake.eat()
                this.food = this.generateFood();
            }

            if (this.snake.body.length > 0) {
                for (let i = 0; i < this.snake.body.length; i++) {
                    this.removeRect(this.snake.body[i])
                }
                this.snake.body.pop()
                const newSnakeBody = [oldHead, ...this.snake.body]
                for (let i = 0; i < newSnakeBody.length; i++) {
                    this.addRect(newSnakeBody[i])
                }
                this.snake.body = newSnakeBody;
            }
            this.addRect(this.food, "#0F0")
        }, 100)
    }

    render() {
        return (
            <div>
                <canvas ref='canvas' style={{border: '1px solid black'}}/>
            </div>
        );
    }
}

export default connect()(GameField);