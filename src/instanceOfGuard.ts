{
  //* Instance of guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("The animal make sounds...");
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBarking() {
      console.log("The dog sounds barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("The Cat sounds meawing");
    }
  }

  // Smart way te handle korar jonno chaile amr a function use korte pari.
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // if (animal instanceof Dog) {
    //   animal.makeBarking();
    // } else if (animal instanceof Cat) {
    //   animal.makeMeaw();
    // } else {
    //   animal.makeSound();
    // }
    if (isDog(animal)) {
      animal.makeBarking();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Lalu Vau", "Dog Dog");
  const cat = new Cat("Tomas", "Meaw Meaw");
  // console.log(dog);
  // getAnimal(dog);
  getAnimal(cat);
}
