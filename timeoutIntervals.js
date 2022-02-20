function task() {
  console.log("hi");
}

let timeOutVar;
function clearTime(timeInterval) {
  console.log("Clearing Timeout");
  clearInterval(timeInterval);
}

timeOutVar = setInterval(task, 5000);

//clearInterval(timeInterval);
