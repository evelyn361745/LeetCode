/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.nums = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.nums.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.nums.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.nums[this.nums.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let minVal = Number.MAX_VALUE;
    for (let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] < minVal)
            minVal = this.nums[i];
    }
    return minVal;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
