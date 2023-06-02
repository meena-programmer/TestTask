import { createServer } from "http";

/**
 * create server that lister port 3000 and route to '/hello' that return 'Hello world!'
 */
const server = createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/**
 * funtion that return sum of all even number from array
 * @param {*} arr
 * @returns
 */

(function sumEvenNumbers(arr) {
  // reduce method that returns accumulated value
  const sumOfEvenNumber = arr.reduce((sum, ele) => {
    if (ele % 2 === 0) {
      return sum + ele;
    } else {
      return sum;
    }
  }, 0);

  console.log(
    `Sum of even numbers from an Array [${arr}] = ${sumOfEvenNumber}`
  );
})([2, 2, 7, 9, 10, 1, 15, 21, 50]);

/**
 * run automatically for every 5 sec and returns query running msg
 */
setInterval(() => console.log("QUERY RUNNING"), 5000);
