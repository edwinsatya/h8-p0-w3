//Menggunakan Built-in Function pada Array

function dataHandling2 (input) {
    //Splice
    input[1] = input[1] + 'Elsharawy';
    input[2] = 'Provinsi ' + input[2];
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    var tempSplice = input;
    //Split
    var bulan = input[3].split('/');
    var tempSplit = bulan[1]
    switch (tempSplit) {
        case '01': tempSplit = 'Januari';
        break;
        case '02': tempSplit = 'Februari';
        break;
        case '03': tempSplit = 'Maret';
        break;
        case '04': tempSplit = 'April';
        break;
        case '05': tempSplit = 'Mei';
        break;
        default: 'Invalid Input';
    }
    //sort
    var tempSort = input[3].split('/').sort(function(a,b){return b - a });
    //join
    var tempJoin = bulan.join('-');
    //slice
    var tempSlice = input[1].slice(0, 15);
    //Display 
    console.log(tempSplice);
    console.log(tempSplit);
    console.log(tempSort);
    console.log(tempJoin);
    console.log(tempSlice);
};

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */