function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Number is positive");
    } else {
      reject("Number is negative or zero");
    }
  });
}

checkNumber(5)
  .then(result => console.log(result))
  .catch(error => console.log(error));