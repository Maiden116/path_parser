export default class Animal {
    constructor(sound,specie){
        this.sound = sound;
        this.specie = specie;
    }

    speak(phrase){
        
        let splitedPhrase = phrase.split(" ");
        let phraseWithSound = '';
        let soundedAtLeastOneTime = false;

        splitedPhrase.forEach(element => {
            if (Math.random() < 0.5) {
                soundedAtLeastOneTime = true;
                phraseWithSound = `${phraseWithSound} ${this.sound} ${element}`;
            } else {
                phraseWithSound = `${phraseWithSound} ${element}`
            }
        });

        if(!soundedAtLeastOneTime){
            phraseWithSound = phraseWithSound.replace(/ /, ` ${this.sound} `);
        }           
        return phraseWithSound;
    } 
}