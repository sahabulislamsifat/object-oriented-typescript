"use strict";
{
    //* Object Oriented Programming - Class
    class Animal {
        // name: string;
        // species: string;
        // sound: string;
        // constructor(name: string, species: string, sound: string) {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            (this.name = name), (this.species = species), (this.sound = sound);
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Amader elakar lalu vau", "Dog", "Ghew Ghew");
    const cat = new Animal("Jadu kor er Kalo Biral", "Cat", "maw maw");
    // dog.makeSound();
    cat.makeSound();
}
