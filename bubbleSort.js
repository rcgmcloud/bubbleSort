function bubbleSort(arr){
  var isPass = true;
  function sort(arr){
    isPass = true;
    for(var i=0; i<arr.length; i++){
      if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        isPass = false;
      }
    }
  }
  sort(arr);
  while(isPass === false){
    sort(arr);
  }
  console.log(arr);
}

var theArray = [3, 600000000000000, 1, 2500000000000, 2000000000];
bubbleSort(theArray);

//console.log(theArrray);



