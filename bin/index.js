const yargs = require("yargs")

const options = yargs
    .option('date', {
        alias: 'd',
        type: ''
    })
    .argv

const moonLanding = new Date();
console.log(moonLanding.getTime());