import { createTranscription } from './services/transcription'
import dotenv from 'dotenv'
import { addSubtitles } from './services/video'
import { removeFileExtension } from './utils/helper'

import chalk from 'chalk'
dotenv.config()
export const generate = async (videoPath: string, videoOutput?: string, subtitlePath?: string) => {
	try {
		if (subtitlePath) {
			console.log(chalk.bold.blue('🔄 Using provided subtitles...'))
		} else {
			console.log(chalk.bold.blue('🔄 Generating subtitles for the video...'))
			await createTranscription(videoPath)
			console.log(chalk.yellow('✔️  Subtitles generated successfully\n'))
		}

		const srtPath = subtitlePath || videoPath.replace('.mp4', '.wav.srt')
		const outputVideoPath =
			videoPath.split('/').slice(0, -1).join('/') + '/' + removeFileExtension(videoPath) + '_subtitled.mp4'

		if (!videoOutput) {
			videoOutput = outputVideoPath
		}
		console.log(chalk.bold.cyan('⏳ Adding subtitles to the video...'))
		await addSubtitles(videoPath, videoOutput, srtPath)
		console.log(chalk.bold.green('✔️  Subtitles added successfully'))
	} catch (error) {
		console.log(chalk.bold.red(`❌ Error: ${error}`))
	}
}
