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
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The tamagotchi ate the ${food}! Food level goes up ${amount}!`
    }

  },
    function(food) {
      this.foodLevel += 5
      return `The tamagotchi ate the ${food}! Food level goes up to 5!`
    }



};

  tamagotchi.eatSmall = tamagotchi.feed(50);
// tamagotchi.eatMedium = tamagotchi.feed(10);
// tamagotchi.eatLarge = tamagotchi.feed(15);
// tamagotchi.eatYuck = tamagotchi.feed(-10);
// tamagotchi.eatPowerUp = tamagotchi.feed(50);
// tamagotchi.eatSpecialBonus = tamagotchi.feed(100);
// tamagotchi.eatWeirdThing = tamagotchi.feed(Math.floor((Math.random() * 20) + 1));
