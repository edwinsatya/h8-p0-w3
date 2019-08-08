//Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
    // you can only write your code here!
   var result = [];
   var tampungHuruf = [];

   loopAnimals:
   for (var i = 0; i < animals.length; i++) {
       var tampungAnimal = [];
       //looping untuk check huruf depan
        for (var j = 0; j < tampungHuruf.length; j++) {
            if (animals[i][0] === tampungHuruf[j]) {
                continue loopAnimals;
            }
        }
        //looping untuk push ke array result dengan huruf peratama yg sama
        for (var k = 0; k < animals.length; k++) {
            if (animals[i][0] === animals[k][0]) {
                tampungAnimal.push(animals[k]);
            }
        }
        result.push(tampungAnimal);
        tampungHuruf.push(animals[i][0]);
   }
   //looping untuk manual sort
   for (var i = 0; i < result.length; i++) {
        for (var j = i+1; j < result.length; j++) {
            if (result[i] > result[j]) {
                var temp;
                temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
   }
   return result;
};
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]