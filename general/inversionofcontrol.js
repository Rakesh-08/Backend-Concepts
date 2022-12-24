let a = [3, 8, 2, 6, -9, -1, 3, -8];

let filter = function (arr, callback) {
  let output = [];

  for (i = 0; i < arr.length; i++) {
    let value = callback(arr[i]);

    if (value) {
      output.push(value);
    }
  }
  return output;
};

let positives = (item) => {
  return item > 0 ? item : "";
};

let negatives = (item) => {
  return item < 0 ? item : "";
};

let Even = (item) => {
  return item % 2 == 0 ? item : "";
};

let GetPositives = filter(a, positives);

let GetNegatives = filter(a, negatives);

let GetEven = filter(a, Even);

console.log(GetNegatives);
console.log(GetPositives);
console.log(GetEven);
