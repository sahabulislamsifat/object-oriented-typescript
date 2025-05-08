{
  //* Statics in Object oriented programming

  // Static
  class Counter {
    // count: number = 0;
    static count: number = 0;
    // increment() {
    static increment() {
      //   return (this.count = this.count + 1);
      return (Counter.count = Counter.count + 1);
    }
    // decrement() {
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }
  //   const instanceOne = new Counter();
  //   console.log(instanceOne.increment()); // --> Different Memory
  //   console.log(instanceOne.increment()); // --> Different Memory

  //
  //   const instanceTwo = new Counter();
  //   console.log(instanceTwo.increment()); // --> Different Memory
  //   console.log(instanceTwo.increment()); // --> Different Memory
  //   console.log(instanceTwo.increment()); // --> Different Memory

  //   console.log(Counter.increment());
  //   console.log(Counter.increment());
  //   console.log(Counter.increment());
  console.log(Counter.decrement());
  console.log(Counter.decrement());
  console.log(Counter.decrement());
}
