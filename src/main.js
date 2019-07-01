// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { tamagotchi } from './../src/tamagotchi.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  tamagotchi.setFun();
  tamagotchi.setHunger();
  tamagotchi.setWake();

  $("#foodCard").hide();
  $("#sleepCard").hide();
  $("#playCard").hide();

// Category buttons
  $("#feedButton").click(function(){
    $("#foodCard").slideToggle();
  });
  $("#sleepButton").click(function(){
    $("#sleepCard").slideToggle();
  });
  $("#playButton").click(function(){
    $("#playCard").slideToggle();
  });

// Pantry content buttons
  $("#blueberryButton").click(function(){
    tamagotchi.eatSmall("blueberries");
    console.log(tamagotchi.foodLevel);
  });
  $("#strawberryButton").click(function(){
    tamagotchi.eatMedium("strawberries");
    console.log(tamagotchi.foodLevel);
  });
  $("#watermelonButton").click(function(){
    tamagotchi.eatLarge("watermelon");
    console.log(tamagotchi.foodLevel);
  });

  // Bed content buttons
  $("#shortNapButton").click(function(){
    tamagotchi.sleepShort("short");
    console.log(tamagotchi.sleepLevel);
  });
  $("#mediumNapButton").click(function(){
    tamagotchi.sleepMedium("medium");
    console.log(tamagotchi.sleepLevel);
  });
  $("#longNapButton").click(function(){
    tamagotchi.sleepLong("long");
    console.log(tamagotchi.sleepLevel);
  });

  // Toybox content buttons
  $("#ballButton").click(function(){
    tamagotchi.playSmall("ball");
    console.log(tamagotchi.funLevel);
  });
  $("#stuffieButton").click(function(){
    tamagotchi.playMedium("stuffie");
    console.log(tamagotchi.funLevel);
  });
  $("#puzzleButton").click(function(){
    tamagotchi.playLarge("puzzle");
    console.log(tamagotchi.funLevel);
  });


// Counters for needs levels
  setInterval(function() {
    $("#foodCounter").html(tamagotchi.foodLevel);
    $("#funCounter").html(tamagotchi.funLevel);
    $("#sleepCounter").html(tamagotchi.sleepLevel);
  }, 5);

// Fail functionality

setInterval(function() {
  if(tamagotchi.didItStarve() == true) {
    clearInterval(tamagotchi.hungerInterval);
    $("#gameBoard").slideUp(1000);
    $("#deathScreen").slideDown(2500);
    $("#starveCard").slideDown();
    setTimeout(function(){
      document.location.reload()
    }, 5000);
  } else if(tamagotchi.didItBore() == true) {
    clearInterval(tamagotchi.funInterval);
    $("#gameBoard").slideUp(1000);
    $("#deathScreen").slideDown(2500);
    setTimeout(function(){
      document.location.reload()
    }, 5000);
  } else if(tamagotchi.didItTire() == true) {
    clearInterval(tamagotchi.sleepInterval);
    $("#gameBoard").slideUp(1000);
    $("#deathScreen").slideDown(2500);
    setTimeout(function(){
      document.location.reload()
    }, 10000);
  }
}, 5);





});
