// Backend logic with exports, functions, constructors, etc.
export let tamagotchi = {
  foodLevel: 100,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel --;
      if(this.didItStarve() == true) {
        clearInterval(hungerInterval);
        return "Your tamagotchi Starved!";
      }
    }, 1000);
  },
  didItStarve: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount){
    let doThis = (food) => {
      this.foodLevel += amount
      return `The tamagotchi ate the ${food}! Food level goes up ${amount}!`
    }
    return doThis;
  },


  funLevel: 100,
  setFun: function() {
    const funInterval = setInterval (() => {
      this.funLevel --;
      if(this.didItBore() == true) {
        clearInterval(funInterval);
        return "Your tamagotchi is bored!";
      }
    }, 1000);
  },
  didItBore: function() {
    if(this.funLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  playful: function(amount){
    let doThat = (toy) => {
      this.funLevel += amount
      return `The tamagotchi played with the ${toy}! Fun level goes up ${amount}!`
    }
    return doThat;
  },

  sleepLevel: 100,
  setWake: function() {
    const sleepInterval = setInterval (() => {
      this.sleepLevel --;
      if(this.didItTire() == true) {
        clearInterval(sleepInterval);
        return "Your tamagotchi is tired!";
      }
    }, 1000);
  },
  didItTire: function() {
    if(this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  sleep: function(amount){
    let doThat = (length) => {
      this.sleepLevel += amount
      return `The tamagotchi took a ${length} nap! Sleep level goes up ${amount}!`
    }
    return doThat;
  }


};

  tamagotchi.eatSmall = tamagotchi.feed(50);
  tamagotchi.eatMedium = tamagotchi.feed(100);
  tamagotchi.eatLarge = tamagotchi.feed(150);
  tamagotchi.playSmall = tamagotchi.playful(50);
  tamagotchi.playMedium = tamagotchi.playful(100);
  tamagotchi.playLarge = tamagotchi.playful(150);
  tamagotchi.sleepShort = tamagotchi.sleep(50);
  tamagotchi.sleepMedium = tamagotchi.sleep(100);
  tamagotchi.sleepLong = tamagotchi.sleep(150);
