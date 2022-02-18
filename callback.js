// set timeout

const posts = [
  { title: "Title of my post 1", body: "This is post 1" },
  { title: "Title of my post 2", body: "This is post 2" },
];

let output = [];

function getPosts() {
  console.log("Function Called waiting for 1000 ms");
  setTimeout(() => {
    posts.forEach((post) => output.push(post.title));
  }, 1000); // takes a function as an input and milli seconds (its like time.sleep)
  console.log("I am Invoked after 1000 ms");
  console.log(output);
}

// function setPost(post) {
//   setTimeout(() => {
//     output.push(post);
//     console.log("Setting a new Posts ");
//   }, 2000);
// }

// setPost("Title of my post 3");
// getPosts();
// console.log(output); // Does not print the post with the setPost value in the
// output

// BEHOLD CALLBACKS
function setPost(post, callback) {
  setTimeout(() => {
    output.push(post);
    console.log("Setting a new Posts ");
    callback();
  }, 2000);
}
setPost("Title of my post 3", getPosts);
console.log("ASYNC BABY!!");
