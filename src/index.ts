import { createTranscription } from './services/transcription'
import dotenv from 'dotenv'
import { addSubtitles } from './services/video'
dotenv.config()

// enter absolute path of the video file
const videoPath = '/Users/chetan/Developer/autosub/assets/demo.mp4'

const subtitlePath = videoPath.replace('.mp4', '.wav.srt')
const outputVideoPath = videoPath.split('/').slice(0, -1).join('/') + '/output.mp4'

const run = async () => {
	await createTranscription(videoPath)

	await addSubtitles(videoPath, outputVideoPath, subtitlePath)
}

run()
