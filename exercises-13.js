//Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
    // you can only write your code here!
    var dariO = false;
    var dariX = false;
    var jmlDariOkeX = 0;
    var jmlDariXkeO = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            dariO = true;
        }
        if (dariO) {
            if (arr[i] === ' ') {
                jmlDariOkeX++
            } else if (arr[i] === 'x') {
                jmlDariOkeX++
                return jmlDariOkeX;
            } else if (arr[i] === 'o') {
                jmlDariOkeX = 0;
            } 
        }
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            dariX = true;
        }
        if (dariX) {
            if (arr[i] === ' ') {
                jmlDariXkeO++
            } else if (arr[i] === 'o') {
                jmlDariXkeO++
                return jmlDariXkeO;
            } else if (arr[i] === 'x') {
                jmlDariXkeO = 0;
            } 
        }
    }
    if (dariO && !dariX) {
        return 0;
    } else if (dariX && !dariO) {
        return 0;
    }
};
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2