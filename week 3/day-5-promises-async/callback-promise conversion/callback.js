function loadData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
loadData(result => console.log(result));