export function removeFileExtension(filePath: string) {
	const name = filePath.split('/').slice(-1)[0]
	const lastDotIndex = name.lastIndexOf('.')

	return name.slice(0, lastDotIndex)
}

export function generateSubtitledFilename(inputFilename: string) {
	const lastSlashIndex = inputFilename.lastIndexOf('/')

	const directoryPath = inputFilename.slice(0, lastSlashIndex + 1)
	const filename = inputFilename.slice(lastSlashIndex + 1)

	const lastDotIndex = filename.lastIndexOf('.')

	const filenameWithoutExtension = filename.slice(0, lastDotIndex)

	const fileExtension = filename.slice(lastDotIndex)

	const subtitledFilename = directoryPath + filenameWithoutExtension + '_subtitled' + fileExtension

	return subtitledFilename
}
