const WIDTH_GAMEOBJECT = 10;

class GameObject {
    constructor(x = -100, y = -100) {
        this.x = x;
        this.y = y;
        this.width = WIDTH_GAMEOBJECT;
        this.height = WIDTH_GAMEOBJECT;
    }

    Equals({ x, y }) {
        return this.x === x && this.y === y;
    }
}

export default GameObject;
export {
    WIDTH_GAMEOBJECT
};