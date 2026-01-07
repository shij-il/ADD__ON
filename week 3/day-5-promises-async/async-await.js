function getData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve("Request successful") : reject("Request failed");
    }, 1000);
  });
}

async function fetchData() {
  try {
    const result = await getData(true);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();