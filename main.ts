// STACK = LIFO, store object as vertical tower
// Push() add to the top
// Pop() remove from the top
// Add / Remove only for the TOP, not the bottom or middle

// Stack Class
class Stack<T> {

  private items: T[] = [];

  // Add a new item to the Top
  push(item: T): void {
    this.items.push(item);
  }

  // Remove and return the item from the Top
  pop(): T | undefined {
    return this.items.pop();
  }

  // Peak at the item of the Top without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

}


const animalStack = new Stack();
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
