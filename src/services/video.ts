import ffmpeg from 'fluent-ffmpeg'

export const addSubtitles = async (videoPath: string, videoOutputPath: string, subtitlePath: string) => {
	try {
		console.log('Adding subtitles to video')
		return await new Promise((resolve, reject) => {
			ffmpeg()
				.input(videoPath)
				.videoFilter(
					`subtitles=${subtitlePath}:force_style='FontName=Arial,FontSize=20,PrimaryColour=&H00FFFFFF,BorderStyle=3,Outline=1,Shadow=0,Alignment=2,MarginL=10,MarginV=10'`
				)
				.audioFilters('channelmap=0')
				.audioBitrate('128k')
				.output(`${videoOutputPath}/output.mp4`)
				.outputOptions(['-map 0:v', '-map 0:a', '-y'])
				.on('end', () => {
					resolve('Subtitles added successfully')
				})
				.on('error', (err, stderr) => {
					console.log('Stderr:', stderr)
					reject(err)
				})
				.run()
		})
	} catch (e) {
		console.log(`[Video service] Error: ${e}`)
	}
}
