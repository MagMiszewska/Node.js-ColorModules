var os = require('os');
var colors = require('colors');

function calcTime() {
  var time = os.uptime();
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time - hours * 3600) / 60);
  var seconds = Math.floor(time - hours * 3600 - minutes * 60);
  time = hours + 'h ' + minutes + 'min ' + seconds + 'sec';
  return time;
}

exports.print = calcTime;