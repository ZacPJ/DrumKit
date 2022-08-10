"use strict";

var clap = new Audio("sounds/clap.wav");
var kick = new Audio("sounds/kick.wav");
var tink = new Audio("sounds/tink.wav");
var tom = new Audio("sounds/tom.wav");
var boom = new Audio("sounds/boom.wav");
var hihat = new Audio("sounds/hihat.wav");
var openhat = new Audio("sounds/openhat.wav");
var snare = new Audio("sounds/snare.wav");
var ride = new Audio("sounds/ride.wav");
window.addEventListener('click', function (event) {
  if (event.target == Boom) {
    boom.play();
  } else if (event.target == Clap) {
    clap.play();
  } else if (event.target == Hihat) {
    hihat.play();
  } else if (event.target == Kick) {
    kick.play();
  } else if (event.target == Openhat) {
    openhat.play();
  } else if (event.target == Ride) {
    ride.play();
  } else if (event.target = Snare) {
    snare.play();
  } else if (event.target == Tink) {
    tink.play();
  } else if (event.target == Tom) {
    tom.play();
  }
});
window.addEventListener('keydown', function (event) {
  if (event.key == "Q" || event.key == "q") {
    document.getElementById("Boom").click();
  } else if (event.key == "W" || event.key == "w") {
    document.getElementById("Clap").click();
  } else if (event.key == "E" || event.key == "e") {
    document.getElementById("Hihat").click();
  } else if (event.key == "R" || event.key == "r") {
    document.getElementById("Kick").click();
  } else if (event.key == "T" || event.key == "t") {
    document.getElementById("Openhat").click();
  } else if (event.key == "A" || event.key == "a") {
    document.getElementById("Ride").click();
  } else if (event.key == "S" || event.key == "s") {
    document.getElementById("Snare").click();
  } else if (event.key == "D" || event.key == "d") {
    document.getElementById("Tink").click();
  } else if (event.key == "F" || event.key == "f") {
    document.getElementById("Tom").click();
  }
});