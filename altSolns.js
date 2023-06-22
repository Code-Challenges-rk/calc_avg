function calc_average(array) {
    let sum = array.reduce((a, b) => a + b, 0)
    if (array.length === 0) return 0;
    else return sum / array.length
}

function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    let result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

console.log(find_average([4, 4, 4]));