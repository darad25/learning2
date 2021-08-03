const chalk = require('chalk')
const yargs = require('yargs') 
const load = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note buy',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    } 
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing the note')
    }
})


yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading the note')
    }
})







console.log(yargs.argv)