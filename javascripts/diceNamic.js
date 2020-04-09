// jshint esversion: 7

//define helper functions here
let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = function() {
  let target,
    die1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1,
    imgElem2,
    divElem,
    cheeryMsg;

  target = document.querySelector("input").value;
  console.log(target);

  //roll the target number (and count the rolls)
  do {
    //roll the dice
    die1 = rollDie();
    die2 = rollDie();

    //increment the roll counter
    rollCount++;

    //log the dice and the counter
    console.log("d1 = " + die1 + " " + "d2 = " + die2);
  } while (die1 + die2 != target);
  console.log(
    `You hit your number in ${rollCount} roll${rollCount > 1 ? "s" : ""}!`
  );

  //uodate images on webpage
  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  //dipslay number of rolls on the web page
  cheeryMsg = `You hit your number in ${rollCount} roll${
    rollCount > 1 ? "s" : ""
  }!`;

  divElem = document.querySelector("div");
  divElem.innerHTML = cheeryMsg;
};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
