//Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var newArray = [];
    for (var i = 1; i < arr.length; i++) {
        newArray[newArray.length] = arr[i] - arr[i-1];
        if (i == arr.length-1) {
            for (var j = 0; j < newArray.length-1; j++) {
                if (newArray[j] != newArray[j+1]) {
                        return false;
                    }
            } return true;
        }
    }
};
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false