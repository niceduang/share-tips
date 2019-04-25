#!/usr/bin/env node

const program = require('commander');

program
	.version('1.0.0', '-v, --version')
	.command('init <dir>', 'generate a new project')
	.action(function(dir, cmd) {
		console.log(dir, cmd, 'hi~');
	})
	.parse(process.argv);