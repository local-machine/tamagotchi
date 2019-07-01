import { tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function() {
  let figure = tamagotchi;

  beforeEach(function() {
    jasmine.clock().install();
    figure.foodLevel = 100;
    figure.funLevel = 100;
    figure.sleepLevel = 100;
    figure.name = "figure";
    figure.setHunger();
    figure.setFun();
    figure.setWake();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

   it('should have a name and food level of 100 when it is created', function(){
     expect(figure.name).toEqual("figure");
     expect(figure.foodLevel).toEqual(100);
  });

  it('should have a food level of 70 after 30001 milliseconds', function() {
    jasmine.clock().tick(30001);
    expect(figure.foodLevel).toEqual(70);

  });

   it('should get very hungry if the food level drops below zero', function(){
     figure.foodLevel = 0
     expect(figure.didItStarve()).toEqual(true);

   });
   it ('should get very hugngry if 100 seconds pass without feeding', function() {
     jasmine.clock().tick(100001);
     expect(figure.didItStarve()).toEqual(true);

   });
   it('should return that the tamagotchi ate the blueberries and the food level should go up 50', function() {
     expect(figure.eatSmall("blueberries")).toEqual("The tamagotchi ate the blueberries! Food level goes up 50!");
     expect(figure.foodLevel).toEqual(150);
   });

   it('should return that the tamagotchi ate the strawberries and the food level should go up 100', function() {
     expect(figure.eatMedium("strawberries")).toEqual("The tamagotchi ate the strawberries! Food level goes up 100!");
     expect(figure.foodLevel).toEqual(200);
   });

   it('should return that the tamagotchi ate the watermelon and the food level should go up 150', function() {
     expect(figure.eatLarge("watermelon")).toEqual("The tamagotchi ate the watermelon! Food level goes up 150!");
     expect(figure.foodLevel).toEqual(250);
   });

   it('should return that the tamagotchi played with the ball and the fun level should go up 50', function() {
     expect(figure.playSmall("ball")).toEqual("The tamagotchi played with the ball! Fun level goes up 50!");
     expect(figure.funLevel).toEqual(150);
   });

   it('should return that the tamagotchi played with the stuffie and the fun level should go up 100', function() {
     expect(figure.playMedium("stuffie")).toEqual("The tamagotchi played with the stuffie! Fun level goes up 100!");
     expect(figure.funLevel).toEqual(200);
   });

   it('should return that the tamagotchi played with the puzzle and the fun level should go up 150', function() {
     expect(figure.playLarge("puzzle")).toEqual("The tamagotchi played with the puzzle! Fun level goes up 150!");
     expect(figure.funLevel).toEqual(250);
   });

   it('should return that the tamagotchi took a short nap and the sleep level should go up 50', function() {
     expect(figure.sleepShort("short")).toEqual("The tamagotchi took a short nap! Sleep level goes up 50!");
     expect(figure.sleepLevel).toEqual(150);
   });

   it('should return that the tamagotchi took a medium nap and the sleep level should go up 50', function() {
     expect(figure.sleepMedium("medium")).toEqual("The tamagotchi took a medium nap! Sleep level goes up 100!");
     expect(figure.sleepLevel).toEqual(200);
   });

   it('should return that the tamagotchi took a long nap and the sleep level should go up 50', function() {
     expect(figure.sleepLong("long")).toEqual("The tamagotchi took a long nap! Sleep level goes up 150!");
     expect(figure.sleepLevel).toEqual(250);
   });


}); 
