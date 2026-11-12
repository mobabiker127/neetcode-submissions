class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.unshift(val);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.shift();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[0]
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = 10 ** 1000
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < min) {
                min = this.stack[i];
            }
        }
        return min;
    }
}
