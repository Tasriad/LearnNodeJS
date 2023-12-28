// If you want to run this add "type":"module" to package.json.
// import { simple } from "./third.mjs";
import * as functions from "./third.mjs";
console.log(functions);
functions.simple();
functions.default();