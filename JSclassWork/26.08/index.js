class Sportsman {
    constructor(name) {
        console.log('constructor sport', name);
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }

}

class Swimmer extends Sportsman {
    constructor(style, name) {
        super(name);
        console.log('constructor swimer');
        this.style = style;
    }

    swim() {
        console.log(`${this.name} is swimin ${this.style}`)
    }

    test() {
        console.log(this)
    }
}
const swimmer1 = new Swimmer('test style', 'Nazar');
console.log(swimmer1)
swimmer1.test();
swimmer1.swim();

//testing
// const sportsman = new Sportsman('Denis');
// console.log(sportsman);
// sportsman.run();

// const sportsman1 = new Sportsman('Andrey');
// sportsman1.run();
// const sportsman2 = new Sportsman('Marina');
// sportsman2.run();

// obj1 = {
//     name: 'Denis',
//     run() {
//         console.log(`${this.name} is running`)
//     }
// };
// console.log(obj1);

