import Animal from './animal.js';

export default class Zoo {

    static instance;

    constructor(){
        if(!!Zoo.instance){
            return Zoo.instance;
        }
        this.animalsInCaptivity = [new Animal('guau','Dog'), new Animal('miau','Cat')];
        Zoo.instance = this;
    }

    addAnimal(animal){
        this.animalsInCaptivity.push(animal);
    }

    animalList(){
        return this.animalsInCaptivity;
    }
}