// Constructor
function Chronometer(currentTime, intervalId) {
    this.currentTime = 0;
    this.intervalId;
}

Chronometer.prototype.startClick = function () {
    var chronos = this;
    this.intervalId = setInterval(function(){
      chronos.currentTime++;

    }, 10);
};



Chronometer.prototype.setMinutes = function () {
  if(this.currentTime % 6000 === 0 ){
      return this.currentTime/6000;
  }
};

Chronometer.prototype.setSeconds = function () {
  if(this.currentTime % 100 === 0){
      return this.currentTime/100;
  }
};

Chronometer.prototype.twoDigitsNumber = function () {
    if(this.currentTime % 6000 === 0 ){
        return (this.currentTime/6000 + "0")
         
    }else if(this.currentTime % 100 === 0 ){
        return (this.currentTime/100 + "0")
         

  
};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {
return this.currentTime;
};

Chronometer.prototype.stopClick = function () {
  
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
