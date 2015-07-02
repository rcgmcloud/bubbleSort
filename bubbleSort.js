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

var theArray = [3, 6, 1, 5, 2];
bubbleSort(theArray);

//console.log(theArrray);