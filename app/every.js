class Timer {
  constructor(quantiy){
    this.quantiy = quantiy;
  }

  // every second are 1000 miliseconds
  get seconds(){ 
    return this.quantiy * 1000;
  }

  get minutes(){
    return this.seconds * 60;
  }

  get hours(){
    return this.minutes * 60;
  }
}

let every = (quantity) => {
  return new Timer(quantity);
}

module.exports = every;