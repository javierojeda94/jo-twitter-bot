let randomInt = require('random-int')
let moment = require('moment')

let getRandomFrom = (array) => {
  return array[randomInt(array.length - 1)];
}

let log = (message) => {
  console.log(`[${moment().format('DD-MM-YYYY kk:mm:ss')}] ${message}`);
}

let logInfo = (logMessage) => {
  log(`INFO: ${logMessage}`);
}

let logError = (logMessage) => {
  if(logMessage instanceof Array){
    for(let error of logMessage){
      log(`ERROR: ${error.message}`);
    }
  }else{
    log(`ERROR: ${logMessage.message}`);
  }
}

module.exports.getRandomFrom = getRandomFrom;
module.exports.logInfo = logInfo;
module.exports.logError = logError;