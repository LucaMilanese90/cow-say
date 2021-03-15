const cowsay = require("cowsay");
const myInformation = require('./information.js');


console.log(cowsay.say({
    text: `Hello I'm ${myInformation.name} from ${myInformation.campus} Campus!`,
    e: "oO",
    T: "U "
}));
