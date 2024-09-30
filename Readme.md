# open IITM lecture in mpv

A fork of the `open-in-mpv` extension to open an IITM lecture in mpv.
Only tested on linux. Windows users can cope.

### Features

- Skip 14 seconds of intro
- Normal speed: 2.15x (profs have slow cadence)
- Speed during areas of silence: 3x

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

> Note: the script uses base64 to avoid quoting issues.

If you don't trust running random scripts, follow these steps:

- Save the contents of [this file](https://raw.githubusercontent.com/ferreum/mpv-skipsilence/refs/heads/master/skipsilence.lua) to `~/.config/mpv/scripts/skipsilence.lua`
- Clone this repo
- Review the contents of `iitm-scheme-handler.desktop`
- Copy it to `~/.local/share/applications`
- Register the XDG handler using `xdg-mime default iitm-scheme-handler.desktop x-scheme-handler/iitm`

### Usage

`Shift + Right Click` on a lecture video > `Click` "open lecture in mpv"

## License

Licensed under the EUPL-1.2-or-later
