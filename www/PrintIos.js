var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'PrintIos', 'coolMethod', [arg0]);
};

module.exports.printMeFromNative = function (arg0, success, error) {
    exec(success, error, 'PrintIos', 'printMeFromNative', [arg0]);
};


