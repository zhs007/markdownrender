/* eslint-disable no-console */
const program = require('commander');
const fs = require('fs');
const {generate} = require('../src/generate');

const package = JSON.parse(fs.readFileSync('package.json'));
const VERSION = package.version;

program.version(VERSION);

program
    .command('generate [filename]')
    .description('generate markdown')
    .option('-o, --output [outputfile]', 'export output file')
    .action(function(filename, options) {
      console.log('version is ', VERSION);

      if (!filename || !options.output) {
        console.log(
            'command wrong, please type ' + 'markdownrender generate --help'
        );

        return;
      }

      console.log('filename - ', filename);

      if (options.output) {
        console.log('output - ', options.output);
      }

      generate(filename, options.output);
    });

program.parse(process.argv);
