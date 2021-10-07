#! /usr/bin/env node

const yargs = require('yargs');

const opt = yargs
    .usage(
        "Usage: 'tyDon' or 'tyDon -d <Your Custom Date>'"
    )
    .option("date", {
        alias: 'd',
        describe: "Custom Date",
        type: "string",
        demandOption: false
    })
    .argv;

const a = `${opt.d}`;

if( a != 'undefined') {
    console.log(a);
    const moonLanding = new Date(a);
    console.log(moonLanding.getTime());
} else {
    const moonLanding = new Date;
    console.log(moonLanding.getTime());
}