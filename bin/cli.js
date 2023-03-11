#! /usr/bin/env node

const yargs = require('yargs');
let ty = require('./index')

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

console.log(ty.tyDon(a))