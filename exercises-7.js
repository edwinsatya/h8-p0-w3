//Logic Challenge - Menghitung Jumlah Kata

//cara logika berdasarkan index
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var array = [];
    var tempString = '';
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            array.push(tempString);
            tempString = '';
        } else {
            tempString += kalimat[i];
        }
        if (i == kalimat.length-1) {
            array.push(tempString);
        }
    }
    return array.length;
};

//cara cepat pakai split
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    kalimat = kalimat.split(' ');
    return kalimat.length;
};
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5