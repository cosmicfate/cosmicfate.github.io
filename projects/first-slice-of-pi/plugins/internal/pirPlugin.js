var resources = require('./../../resources/model');
var Gpio = require('onoff').Gpio;

var device = resources.pi.sensors.pir;

var sensor;


function connectHardware(){
   sensor = new Gpio(device.gpio, 'in', 'both')
    sensor.watch(function(err,value){
        if(err) {
            print("Uh Oh! There was an error!")
        }
        else {
            device.value = !!value;
        }
    });
    
};



exports.start = function (connectHardware) {};
exports.stop = function(){
    sensor.unexport();
};
    





