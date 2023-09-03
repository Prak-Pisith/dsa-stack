// STACK = LIFO, store object as vertical tower
// Push() add to the top
// Pop() remove from the top
// Add / Remove only for the TOP, not the bottom or middle
// Stack Class
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Add a new item to the Top
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Remove and return the item from the Top
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Peak at the item of the Top without removing it
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
var animalStack = new Stack();
animalStack.push('Lion');
animalStack.push('Cat');
animalStack.push('Tiger');
animalStack.push(2);
console.log(animalStack.peek());
console.log(animalStack.pop());
console.log(animalStack.isEmpty());
console.log(animalStack.peek());
console.log(animalStack.size());
animalStack.clear();
console.log(animalStack.size());
