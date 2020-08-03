export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    
    startTimer() {
      this.interval = setInterval(() => {
        this.secondsPassed += 5;
        if (this.secondsPassed === 60) {
          this.minsPassed += 1;
          this.secondsPassed = 0;
        }
      }, 5000);
    },
  
    getTime() {
      if (this.secondsPassed >= 10)
        return `${this.minsPassed}:${this.secondsPassed}`;
      return `${this.minsPassed}:0${this.secondsPassed}`;
    },
  
    stopTimer() {
      clearInterval(this.interval);
    },
  
    resetTimer (){
      this.secondsPassed = 0;
      this.minsPassed = 0;
    }
  };