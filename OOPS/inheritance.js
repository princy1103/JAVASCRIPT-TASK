const animal = {
  name: "Animal",
  sound() {
    console.log(`${this.name} makes a sound.`);
  }
};

const dog = Object.create(animal);
dog.name = "Dog";
dog.bark = function () {
  console.log(`${this.name} barks.`);
};

const puppy = Object.create(dog);
puppy.name = "Puppy";
puppy.cute = function () {
  console.log(`${this.name} is cute.`);
};

animal.sound();    
dog.sound();        
dog.bark();     
puppy.sound();      
puppy.bark();     
puppy.cute();       
