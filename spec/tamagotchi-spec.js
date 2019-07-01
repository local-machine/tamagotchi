import { tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function() {
  let figure = tamagotchi;

  beforeEach(function() {
    jasmine.clock().install();
    figure.foodLevel = 100;
    figure.name = "figure";
    figure.setHunger();
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
});
