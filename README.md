# autosub

autosub uses ffmpeg and [OpenAI Whisper's nodejs bindings](https://github.com/ChetanXpro/nodejs-whisper) to automatically generate and overlay subtitles on any video.

## Installation

first You need to install ffmpeg, which is available from most package managers:

```bash
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg
```

1. Install all packages
```bash
npm install
```
2. Enter video absolute path in videoPath variable in index.ts

- Example

```bash
const videoPath = '/Users/chetan/Developer/autosub/assets/demo.mp4'
``` 

3. Run this project

- Note: When you run this project for the first time, it will automatically download an AI model and then compile it. If you encounter any errors during this process,
please raise an issue in the [Nodejs-Whisper](https://github.com/ChetanXpro/nodejs-whisper) repository.


```bash
npm run start
```


4. Available AI models to generate subtitles for video (bigger mode will give better result)
- For me tiny model also works fine if i try it with short videos.

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

- To changes ai model you need to change "modelName" value in transcription.ts


## TODO

## Todo List

- [ ]  Command line interface support.

