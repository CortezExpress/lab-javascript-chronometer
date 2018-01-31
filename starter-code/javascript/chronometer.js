// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId ='1';
}


// We need to create a startClick() method for the Chronometer 
// object. The startClick() method is pretty simple, 
// it should start a setInterval that will add 1 to the
//  currentTime porperty every 1 second.

// The setInterval will be assigned to our intervalId property, 
// this way we will be able to clear it later on.



Chronometer.prototype.startClick = function (){
    setInterval(this.currentTime +=1, 1000);
};






// Our current time is our clock, but it only runs seconds,
//  so we need to create a method that will return us the number of minutes that corresponds to the value we have on currentTime!
Chronometer.prototype.setMinutes = function () {
    var minut = Math.floor(this.currentTime/60);
    return minut
  
};

Chronometer.prototype.setSeconds = function () {
  var seconds = this.currentTime%60;
  return seconds;
};





// Our chronometer has a super cool screen that needs two digits number to display minutes and seconds,
//  but sometimes setMinutes and setSeconds returns a single digit number
//  so let's create a super easy function that will receive as a parameter a value and will return us
//   the same value but 2 digits length.
Chronometer.prototype.twoDigitsNumber = function (number) {
    numberString=number.toString() 
    if (numberString.length===1) {numberString="0"+numberString}else if(numberString.length>1) {numberString=numberString}else{numberString= "00"};
     
    return numberString
  
    };

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
