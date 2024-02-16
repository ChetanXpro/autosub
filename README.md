# autosub

autosub uses ffmpeg and [OpenAI Whisper's nodejs bindings](https://github.com/ChetanXpro/nodejs-whisper) to automatically generate and overlay subtitles on any video.

## Performance

- On Mac air m1 it takes less then 1 min to add subtitles in a 720p 4 min long video.
- Check example video example/sam_interview.mp4

## Installation

Before using autosub-cli, you need to have ffmpeg installed. You can install ffmpeg using your package manager:

```bash
# On Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# On macOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# On Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
```

```bash
npm install -g autosub-cli
```

## Usage

Generate subtitles for a video:

```bash
autosub generate -i <Absolute path to video> -o <output path>
```

Options:

- `-i, --input`: Absolute path to the input video file.
- `-o, --output`: (Optional) Output path for the subtitled video. If not provided, the output will be saved in the same directory as the input file.

Example:

```bash
autosub generate -i User/chetan/Developer/video.mp4 -o  User/chetan/Developer/output.mp4
```

3. Run this project

- Note: When you run this project for the first time, it will automatically download an AI model and then compile it. If you encounter any errors during this process,
please raise an issue in the [Nodejs-Whisper](https://github.com/ChetanXpro/nodejs-whisper) repository.


```bash
npm run start
```


4. Available AI models to generate subtitles for video (bigger model will give better result)
- For me tiny.en model works fine.
- To changes AI model you need to change "modelName" value in transcription.ts

| Model    | Disk    | Mem        |
|----------|---------|------------|
| tiny     | 75 MB   | ~390 MB    |
| tiny.en  | 75 MB   | ~390 MB    |
| base     | 142 MB  | ~500 MB    | 
| base.en  | 142 MB  | ~500 MB    | 
| small    | 466 MB  | ~1.0 GB    |
| small.en | 466 MB  | ~1.0 GB    |
| medium   | 1.5 GB  | ~2.6 GB    |
| medium.en| 1.5 GB  | ~2.6 GB    |
| large-v1 | 2.9 GB  | ~4.7 GB    | 
| large-v2 | 2.9 GB  | ~4.7 GB    |
| large    | 2.9 GB  | ~4.7 GB    | 






## Todo List

- [ ]  Command line interface support.
- [ ]  Give options to change subtitle styles

