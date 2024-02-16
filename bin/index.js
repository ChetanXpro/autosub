#!/usr/bin/env node

const { program } = require('commander')
const { generate } = require('../dist')
program.name('autosub').version('1.0.0').description('Auto-generate subtitles for videos.')

program
	.command('generate')
	.description('Automatically generate subtitles for a video file')
	.option('-i, --input <videoPath>', 'Path to the input video file')
	.option('-o, --output <outputVideoPath>', 'Path to the output video file')
	.action(options => {
		const { input } = options
		const { output } = options

		if (!input) return console.log('Please provide a path to the input video file')

		generate(input, output)
	})

program.parse(process.argv)
