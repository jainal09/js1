// const posts = [
//   { title: "Title of my post 1", body: "This is post 1" },
//   { title: "Title of my post 2", body: "This is post 2" },
// ];

// let output = [];

// function getPosts(test) {
//   console.log(test);
//   console.log("Function Called waiting for 1000 ms");
//   setTimeout(() => {
//     posts.forEach((post) => output.push(post.title));
//   }, 1000); // takes a function as an input and milli seconds (its like time.sleep)
//   console.log("I am Invoked after 1000 ms");
//   console.log(output);
// }

// // Promise magic in createPost
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     // A promise should always be returned with params like resolve and reject
//     // When you call resolve() after that the .then() part is called
//     setTimeout(() => {
//       // Explicitly using setTimeout to make it look like a long api request
//       output.push(post);
//       const error = false;
//       if (!error) {
//         resolve("test");
//       } else {
//         reject("Error Occured");
//       }
//     }, 2000);
//   });
// }
// createPost("Title of my post 3")
//   .then((values) => getPosts(values))
//   .catch((err) => console.log(err));
// just like callback

// Promise.all
// Kind of python's async await coroutine array (creating a task list and then
// executing all asynchronously)
// let init = 1;
// const promiseFunc = (waitTime) => (resolve, reject) => {
//   const myInitCopy = init;
//   console.log(`promise${myInitCopy} calling`);
//   setTimeout(() => {
//     console.log(`promise${myInitCopy} called`);
//     resolve(`The output returning is ${myInitCopy}`);
//   }, waitTime);
// };
// const promise1 = new Promise(promiseFunc(1000));
// const promise2 = new Promise(promiseFunc(2000));
// const promise3 = new Promise(promiseFunc(3000));
// const promise4 = new Promise(promiseFunc(4000));
// const promise5 = new Promise(promiseFunc(5000));
// const promise6 = new Promise(promiseFunc(6000));
// const promise7 = new Promise(promiseFunc(7000));
// const promise8 = new Promise(promiseFunc(8000));
// console.log("calling all promises");
// Promise.all([
//   promise1,
//   promise2,
//   promise3,
//   promise4,
//   promise6,
//   promise7,
//   promise8,
// ]).then((values) => console.log(values));

// PROMISE CHAINING
const myFunc1 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }); // plain old function returning a promise

myFunc1()
  .then(
    () =>
      new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
      })
  )
  .then(
    () =>
      new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
      })
  )
  .then(() => console.log("final promise"));
