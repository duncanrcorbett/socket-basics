var moment = require('moment');
var now = moment();


// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf('x'));

var timeStamp = 1475608750006;
var timestampMoment = moment.utc(timeStamp);

console.log(timestampMoment.local().format('h:mma'));


// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma')); //Oct