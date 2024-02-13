import { createTranscription } from './services/transcription'
import dotenv from 'dotenv'
import { addSubtitles } from './services/video'
dotenv.config()
const videoPath = '/Users/chetan/Developer/make/autosub/assets/demo.mp4'
const subtitlePath = '/Users/chetan/Developer/make/autosub/assets/demo.wav.srt'
const outputVideoPath = '/Users/chetan/Developer/make/autosub/assets'

const run = async () => {
	await createTranscription(videoPath)
	await addSubtitles(videoPath, outputVideoPath, subtitlePath)
}

run()
