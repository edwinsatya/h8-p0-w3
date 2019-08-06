//Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    // you can only write your code here!
    var array = num.toString().split('');
    var newArray = [];
    
    for (var i = 0; i < array.length-1; i++) {
        newArray.push(array[i] + array[i+1])
    }
    newArray.sort();
    return Number(newArray[newArray.length-1]);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99