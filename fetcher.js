const fs = require("fs");
const request = require("request");

// getting the arguments from command line
const args = process.argv.slice(2);

// callback function that prints to the console the path and bytes
const requestResult = (data, path) => {
  console.log(`Downloaded and saved ${data.length} bytes to ${path}`);
};

const fetcher = (url, path, callback) => {
  // requesting the data
  request(url, (error, response) => {
    if (error) {
      console.log(error);
    }
    // create a new file index.js and add the response.body text there
    fs.writeFile(path, response.body, { flag: "a+" }, (err) => {});
    // calling our callback function with the response recieve and the path
    callback(response.body, path);
  });
};

fetcher(args[0], args[1], requestResult);
