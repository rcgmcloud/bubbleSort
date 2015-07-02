Array.prototype.bubbleSort = function(){
  var isPass = false;

  while(isPass === false){
    isPass = true;
    for(var i=0; i<this.length; i++){
      if(this[i] > this[i+1]){
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        isPass = false;
      }
    }
  }
  console.log(this);
};

var theArray = [3, 6000, 1, 250, 20];
theArray.bubbleSort();

//console.log(theArrray);



