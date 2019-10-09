class GuessingGame {
    constructor() {
        this._range = [];
        this._index = 0;
        this.l = 0;
        this.r = 0;
    }

    setRange(min, max) {
        this.l = min;
        this.r = max;
        this._range = [min, max];
    }

    guess() {
        this._index = Math.ceil((this.l + this.r) / 2);
        return this._index;
    }

    lower() {
        this.r = this._index;
    }

    greater() {
        this.l = this._index;
    }
}

module.exports = GuessingGame;

