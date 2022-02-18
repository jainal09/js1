// Better Promises
let output = [];
function createPost(post) {
  return new Promise((resolve, reject) => {
    // A promise should always be returned with params like resolve and reject
    // When you call resolve() after that the .then() part is called
    setTimeout(() => {
      // Explicitly using setTimeout to make it look like a long api request
      output.push(post);
      const error = false;
      if (!error) {
        resolve("test");
      } else {
        reject("Error Occured");
      }
    }, 2000);
  });
}

async function callPromise() {
  await createPost("test"); // Done no .then() bull shit
  // use plain old try catch to catch exceptions of reject()
  console.log(output);
}

callPromise();
