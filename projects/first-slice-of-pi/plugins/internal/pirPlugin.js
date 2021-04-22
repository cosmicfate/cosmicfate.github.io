var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;


function connectHardware(){
    new Gpio(device.gpio, 'in', 'both')
    sensor.watch(function(err,value){
        if(err) {
            print("Uh Oh! There was an error!")
        }
        else {
            device.value = !!value;
        }
    });
    
};



exports.start = function (params) {};
exports.stop = function(){
    sensor.unexport();
};
    


var sensor = new Gpio;
var device = resources.pi.sensors.pir;

