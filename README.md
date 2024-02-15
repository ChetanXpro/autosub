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

Install all packages
```bash
npm install
```


Run this project

- Note: When you run this project for the first time, it will automatically download an AI model and then compile it. If you encounter any errors during this process,
please raise an issue in the [Nodejs-Whisper](https://github.com/ChetanXpro/nodejs-whisper) repository.

```bash
npm run start
```

## TODO

## Todo List

- [ ]  Command line interface support.

