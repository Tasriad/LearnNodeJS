const fs = require("fs");

// fs.readFile('topic_list.txt', 'utf8', (err, data) => {
//     console.log("error:" + err);
//     console.log("data:\n" + data);
// })
// console.log("should have finished reading file"); // was printed first. This is due the asynchronous non blocking nature.

// if we want it to print after file reading then:
const a = fs.readFileSync('topic_list.txt');
console.log(a.toString());
console.log("Finished reading file");
// write to file
// fs.writeFileSync('topic_list.txt','5. file system modules');  // this one will clear out previous data.
// append to file
const b = fs.appendFileSync('topic_list.txt','\n5. file system modules');
// console.log(b.toString());
console.log("finished appending");