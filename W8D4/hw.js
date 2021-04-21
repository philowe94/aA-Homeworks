function printCallback(arr) {
    arr.forEach( ele => console.log(ele) );
};

function titleize(arr, callback) {
    let new_arr = arr.map( ele => `Mx. ${ele} Jingleheimer Schmidt`);
    callback(new_arr);
};

// titleize(["Mary", "Brian", "Leo"], printCallback);

function isPalindrome(string) {
  function reverse() {
    return string.split('').reverse().join('');
  }

  return string === reverse();
}

console.log(isPalindrome("bababasdb"))

function Kitten(name, age) {
  this.name = name;
  this.age = age;

  this.meow = function () {
    console.log(this.name + ' says "meow!"');
  };
}

let kitten = new Kitten("Earl", 2);