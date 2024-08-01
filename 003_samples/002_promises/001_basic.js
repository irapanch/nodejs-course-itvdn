const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //   const success = true
    const success = false;
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected");
    }
  }, 3000);
});

myPromise
  .then(
    (result) => {
      console.log("then #1");
      console.log("Success:", result);
    },
    (error) => {
      console.error("Error then #1:", error);
      //   throw new Error("Test error");
    }
  )
  .then((result) => {
    console.log("then #2");
  })
  .finally(() => {
    console.log("Executed in any case");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
