<!-- How to handle asynchronous operations using async/await over callback/promise TypeScript. -->


Understanding Async/Await, Callbacks, and Promises in TypeScript

- What is async/await in typescript ? 

async/await is a modern way of handling asynchronous operations in TypeScript.

async: used to define an asynchronous function. When a function is marked as async it automatically return a promise.

await: pauses the execution of the async function and waits for the promise to resolve or reject. It can only be used inside an async function.

 Here an example:
  async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fetched from the server")
    }, 1000)
  })
}


- What is a callback in typeScript?
 A callback is a function passed as an argument to another function executed once an operation completes. In typeScript callbacks facilitate asynchronous programming but can lead to "callback hell" where nested callbacks complicate code readability and maintain.  

Here an example: 
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("fetched using callback")
  }, 1000)
}


- What is a promise in typeScript?
A Promise is an object that represents the eventual completion or failure of an asynchronous operation and is widely used for tasks like network requests and database queries. Promises can be in one of three states: pending, fulfilled, or rejected. They simplify chaining asynchronous operations compared to callbacks, though chaining multiple .then() calls can still result in complex code.

Here an example: 
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetched using promise")
    }, 1000)
  })
}

- Why Use async/await Over callbacks or promises?
Async/await offers the most readable and maintainable code for handling asynchronous operations making code look synchronous and easier to understand. It also provides cleaner error handling with try/catch blocks, making error management more intuitive. While promises improve readability compared to callbacks async/await completely avoids the issue of "callback hell" caused by nested callbacks.

Here comparison example:

Using Promises:
fetchData()
  .then((data) => pData(data))
  .then((proData) => {
    console.log("data:", proData);
  })
  .catch((error) => {
    console.error("error occurred:", error);
  });

Using async/await:
async function handleData() {
  try {
    const data = await fetchData();
    const proData = await pData(data);
    console.log("data:", proData);
  } catch (error) {
    console.error("error occurred:", error);
  }
}



