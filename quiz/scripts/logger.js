// Define a JavaScript function called logMsg() that can be used to log an error message for 
// any object that contains the property errMsg. 

function logMsg(){
    console.log(`ERROR MESSAGE: ${this.errMsg}`);
}
const o1 = { errMsg: '01'};

const o2 = { errMsg: '02'};

logMsg.call(o1);
logMsg.call(o2);
