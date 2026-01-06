function processData(callback) {
  console.log("Processing data...");

  setTimeout(() => {
    callback("Data processed successfully!");
  }, 1500);
}

processData((message) => {
  console.log(message);
});