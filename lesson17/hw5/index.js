export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    id: 0,
    startTimer() {
        this.id = setInterval(() => {
            this.secondsPassed++;
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minsPassed++;
            }
        }, 1000); 
    },

    getTime() {
        return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed:this.secondsPassed}`;
    },
    stopTimer() {
        clearInterval(this.id);
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}