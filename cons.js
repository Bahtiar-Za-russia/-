class Bird {
    constructor(name, voice, canFly){
        this.name = name;
        this.voice = voice;
        this.canFly = canFly;
    }
    say(){
        console.log(this.name, 'goes', this.voice);
    }
    fly(){
        console.log(this.name, 'flying hight');
    }
}

class Duck extends Bird{
    constructor(name, voice, canFly){
        super(name, voice, canFly);
    }
}

const myDuck = new Duck('Utka Finlandiavna', 'quack', true);
myDuck.say();
myDuck.fly();

class Duck extends Bird{
    constructor(name, voice, canFly){
        super(name, voice, canFly)
    }
    say(){
        console.log(this.name, 'stays silent.');
    }
}









// function Animal(name, voice){
//     this.name = name;
//     this.voice = voice;
// }

// Animal.prototype.say = function(){
//     console.log(this.name, 'goes', this.voice);
// }

// const dog = new Animal('Dog', 'woof');
// const cat = new Animal('Cat', 'meow');

// dog.say();
// cat.say();

// const animal = {
//     say(){
//         console.log(this.name, 'goes', this.voice);
//     }
// }
// function createAnimal(name, voice){
//     const result = Object.create(animal);
//     result.name = name;
//     result.voice = voice;
//     return result;
// }
// const dog = createAnimal('Dog', 'woof');
// const cat = createAnimal('Cat', 'meow');

// dog.say();
// cat.say();


// const animal = {
//     say(){
//         console.log(this.name, 'goes', this.voice);
//     }
// }
// const dog = {
//     name: 'dog',
//     voice: 'woof',
// };
// Object.setPrototypeOf(dog, animal);
// const cat = {
//     name: 'stalin',
//     voice: 'tuda germany',
// };
// Object.setPrototypeOf(cat, animal);
// dog.say();
// cat.say();


// const dog = {
//     name: 'gitler',
//     voice: 'nine!',
//     say(wen){
//         console.log(this.name, 'oret', this.voice)
//     }
// };

// const cat = {
//     name: 'cat',
//     voice: 'meow',
//     say(){
//         console.log(this.name, 'goes', this.voice);
//     }
// };
// dog.say();
// cat.say();