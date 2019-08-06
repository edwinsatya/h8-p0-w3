//Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
    // you can only write your code here!
    var check = true;
    num++

    while (check) {
        if (num == num.toString().split('').reverse().join('')) {
            return num;
        } else {
            num++
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001