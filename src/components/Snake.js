import GameObject from './GameObject'

class Snake extends GameObject {
    constructor() {
        super(0, 0)
        this.xSpeed = 1
        this.ySpeed = 0
        this.body = [new GameObject()]
    }

    stop() {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    turnUp() {
        this.xSpeed = 0;
        this.ySpeed = -1;
    }

    turnDown() {
        this.xSpeed = 0;
        this.ySpeed = 1;
    }

    turnLeft() {
        this.xSpeed = -1;
        this.ySpeed = 0;
    }

    turnRight() {
        this.xSpeed = 1;
        this.ySpeed = 0;
    }

    move() {
        this.x = this.x + this.xSpeed * this.width
        this.y = this.y + this.ySpeed * this.height
    }

    eat() {
        this.body = [...this.body, new GameObject()]
    }
}

export default Snake;