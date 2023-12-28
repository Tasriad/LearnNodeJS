const path = require("path");
let a = path.basename('C:\\temp\\myfile.html');
// Returns:'myfile.html'
let b = path.dirname('C:\\temp\\myfile.html');
// Returns: 'C:\temp'
console.log(a);
console.log(b);

let c = path.extname(__filename);
// returns '.js'
console.log(c); 