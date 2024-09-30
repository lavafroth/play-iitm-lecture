# open IITM lecture in mpv

A fork of the `open-in-mpv` extension to open an IITM lecture in mpv.
Only tested on linux. Windows users can cope.

## License

Licensed under the EUPL-1.2-or-later

## Installation

### Firefox

1. go to <about:debugging#/runtime/this-firefox>
2. click "load temporary add-on"
3. select the `manifest.json`.

### Chromium:

1. replace `manifest.json` with `manifest-chrome.json`
2. go to <chrome://extensions/>
3. enable developer mode
4. click "load unpacked"
5. select the folder containing this extension.

## First run

On first run, the extension will give you a shell script. You must download and
run it to register the XDG handler.

### Features

- Skip 14 seconds of intro
- Normal speed: 2.15x (profs have slow cadence)
- Speed during areas of silence: 3x
