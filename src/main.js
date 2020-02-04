// import { Player } from './scriptsN.js/index.js';
import { rollDice } from './scripts.js';
import { holdDice } from './scripts2.js';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
//User Interface for ROLL & HOLD


function Player() {
  this.turnTotal = [];
  this.gameTotal = 0;
  this.currentRoll = [];
}
var player1 = new Player();
var player2 = new Player();


$(document).ready(function() {
  
  $("#roll1").click(function(event) {
    event.preventDefault();
    rollDice();
  });
  
  $("#hold1").click(function(event) {
    event.preventDefault();
    holdDice();
    $("#scoreTotal1").empty().text(player1.gameTotal);
    $("#scoreTotal2").empty().text(player2.gameTotal);
  });

});