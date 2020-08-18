const timer = {

    secondPassed: 0,
    minPassed: 0,

    startTime() {
        setInterval(() => {
            console.log(this);

            this.secondPassed =+ 1;
        }, 1000);
    },

    // startTime() {
    //     const adder = function () {
    //     console.log(this);

    //     this.secondsPassed += 1;
    //     };
    //     const adderBinded = adder.bind(this); // закрепили контекст с помощью bind
    //     setInterval(adderBinded, 1000);
    // },

    stopTime() {

    },

    getTime() {

    },

    reset(){

    }
}

timer.startTime();

// setTimeout(() => {
//     console.log('hello');
// },2000)

// const user = {
//     name: 'test',
//     run() {
//         console.log(this);
//     }
// }

// function printer(func) {
//     console.log('I am running');
//     func();
// }

// const func = user.run;
// printer(func);